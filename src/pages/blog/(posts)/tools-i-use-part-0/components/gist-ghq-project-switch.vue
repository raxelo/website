<script lang="ts" setup>
import CodeBlock from "@/components/ui/code/CodeBlock.vue";

const code = `function ghq_tmx
    set current_session NONE
    set tmux_running (tmux list-sessions 2>/dev/null)
    if test "$TERM_PROGRAM" = tmux
        set current_session (tmux display -p '#{session_name}')
        set inside_tmux true
    end

    # Run \`ghq list\` with fzf, but exclude the current tmux session from the list
    set selection (ghq list | grep -v "$current_session" | fzf --reverse --preview-window bottom:50% --preview "
        set folder_name (basename {})
        if test -n \"\$folder_name\" 
            if tmux has-session -t \$folder_name 2>/dev/null
                tmux capture-pane -t \$folder_name -e -p -S -
            else
                ls -1 (ghq root)/{}
            end
        else
            echo 'No folder name extracted, running ls instead'
            ls -1 (ghq root)/{}
        end
    ")

    # If nothing is selected, exit
    if test -z "$selection"
        return
    end

    # Extract the folder name (last segment of the path)
    set folder_name (basename $selection)

    # Check if we're already inside a tmux session
    set session_info "$current_session"
    if test -n "$session_info"; and test "$inside_tmux" = true
        # We're already in a tmux session, check if it's the desired one
        if test "$session_info" != "$folder_name"
            # Detach from the current session before switching or creating a new one
            # Check if the desired session exists
            if tmux has-session -t $folder_name 2>/dev/null
                # Switch to the existing session
                tmux switch-client -t $folder_name
            else
                # If the session doesn't exist, create it without attaching
                tmux new-session -A -s $folder_name -c (ghq root)/$selection -d
                tmux switch-client -t $folder_name
            end
        end
    else
        # Not in a tmux session, create and attach to the session
        tmux new-session -A -s $folder_name -c (ghq root)/$selection
    end
end

# Bind the function to CMD+P (Escape + p)
bind \cp ghq_tmx`;
</script>

<template>
  <CodeBlock :code="code" lang="fish" />
</template>
