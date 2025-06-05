<route lang="yaml">
meta:
  title: "My Development Setup, Part 0: The Tools I Use"
  description: "An overview of the tools I use, my dotfiles, and my workflow"
  publishedDate: "2025-06-05"
  thumbnail: "/images/blog/setup-part-0.jpg"
  tags: ["development", "tools", "workflow"]
  draft: false
</route>

<script setup lang="ts">
import {
	Card,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { ref } from "vue";
import GitHub from "~icons/mdi/github";
import Gist from "./components/gist-ghq-project-switch.vue";
import CodeBlock from "@/components/ui/code/CodeBlock.vue";
import { useHead } from "@unhead/vue";

definePage({
	meta: {
		title: "My Development Setup, Part 0: The Tools I Use",
		description: "An overview of the tools I use, my dotfiles, and my workflow",
		publishedDate: "2025-06-05",
		thumbnail: "/images/blog/setup-part-0.jpg",
		tags: ["development", "tools", "workflow"],
		author: "Lucas Goyeche",
	},
});

useHead({
	title: "Lucas Goyeche - My Development Setup, Part 0: The Tools I Use",
	meta: [
		{
			name: "description",
			content: "An overview of the tools I use, my dotfiles, and my workflow",
		},
	],
});

// Interactive workspace simulator
const currentWorkspace = ref(1);
const workspaces = ref([
	{ id: 1, name: "Browser", apps: ["Chrome"], color: "bg-blue-500" },
	{
		id: 2,
		name: "Code",
		apps: ["Terminal", "IDE"],
		color: "bg-green-500",
	},
	{
		id: 3,
		name: "Notes",
		apps: ["Obsidian", "Notion"],
		color: "bg-purple-500",
	},
	{
		id: 4,
		name: "Database",
		apps: ["Docker", "Redis"],
		color: "bg-orange-500",
	},
	{ id: 5, name: "Empty", apps: [], color: "bg-gray-400" },
]);
</script>

<template>
  <article class="max-w-none">
    <div class="prose dark:prose-invert prose-quoteless prose-neutral">
      <header>
        <h1 class="text-3xl font-bold mb-2">
          My Development Setup, Part 0: The Tools I Use
        </h1>
        <p class="text-sm text-muted-foreground">Published on June 5, 2025</p>
      </header>

      <p>
        For a while, I've wanted to write about the tools I use, my dotfiles, and
        share an overview of my workflow. I like to obsess over these things.
      </p>

      <p>
        For me, having nice, memorable shortcuts, a scalable way to structure
        projects, and a workflow I <em>can have fun with</em> is non-negotiable.
        I don't change my setup too frequently, but when I do, I feel like a
        sculptor, patiently carving my dotfiles piece by piece.
      </p>

      <a href="https://github.com/lucasgoyeche/dotfiles" target="_blank" rel="noopener noreferrer" class="no-underline">
        <Card class="my-6 hover:border-primary transition-colors group">
          <CardHeader>
            <CardTitle class="flex items-center gap-2 my-0">
              <GitHub class="size-6 group-hover:rotate-12 transition-transform" />
              <span>lucasgoyeche/dotfiles</span>
            </CardTitle>
            <CardDescription>
              My personal configuration files for fish, tmux, AeroSpace, and more.
            </CardDescription>
          </CardHeader>
        </Card>
      </a>

      <h2>Core Tools</h2>
      <p>
        Whether I'm on Linux, Windows, or MacOS, I <em>need</em> a
        <a href="https://en.wikipedia.org/wiki/Tiling_window_manager" target="_blank" rel="noopener noreferrer">tiling
          window manager</a>. In short, it allows you to change workspaces with the press of a key,
        move windows around, stack them on top of each other, or even more
        complex stuff.
      </p>
      <p>
        On MacOS, I use
        <a href="https://github.com/nikitabobko/AeroSpace" target="_blank" rel="noopener noreferrer">AeroSpace</a>. It's
        an i3-like tiling window manager for MacOS. It's
        <strong>pretty</strong> good. I have a pretty default config, this is how
        I typically work:
      </p>

      <!-- Interactive Workspace Simulator -->
      <div class="not-prose my-8 p-6 bg-gray-50 dark:bg-gray-900 rounded-lg border">
        <h4 class="text-lg font-semibold mb-4 text-center mt-0">🚀 Interactive Workspace Demo</h4>
        <p class="text-sm text-muted-foreground text-center mb-4">Click the workspace numbers to see how I organize my
          work</p>

        <div class="flex justify-center gap-2 mb-6">
          <button v-for="workspace in workspaces" :key="workspace.id" @click="currentWorkspace = workspace.id" :class="[
            'px-4 py-2 rounded-lg font-mono text-sm font-bold transition-all duration-200',
            currentWorkspace === workspace.id
              ? `${workspace.color} text-white scale-105`
              : 'bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600'
          ]">
            ⌥{{ workspace.id }}
          </button>
        </div>

        <div class="text-center">
          <!-- Window with title bar -->
          <div class="inline-block bg-white dark:bg-gray-800 rounded-lg shadow border w-80 h-48">
            <!-- Window title bar -->
            <div class="flex items-center justify-between px-4 py-3 bg-gray-100 dark:bg-gray-700 rounded-t-lg border-b">
              <div class="flex items-center gap-2">
                <!-- Traffic light buttons -->
                <div class="flex gap-1.5">
                  <div class="w-3 h-3 bg-red-400 rounded-full"></div>
                  <div class="w-3 h-3 bg-yellow-400 rounded-full"></div>
                  <div class="w-3 h-3 bg-green-400 rounded-full"></div>
                </div>
              </div>
              <div class="text-sm font-medium text-gray-600 dark:text-gray-300">
                Workspace {{ currentWorkspace }}
              </div>
              <div class="w-12"></div> <!-- Spacer for centering -->
            </div>

            <!-- Window content -->
            <div class="p-6 h-36 flex flex-col justify-center">
              <h5 class="font-bold text-lg mb-4 text-center">
                {{workspaces.find(w => w.id === currentWorkspace)?.name}}
              </h5>
              <div class="flex-1 flex flex-col justify-center">
                <div class="space-y-2 max-h-20 overflow-y-auto">
                  <div v-for="app in workspaces.find(w => w.id === currentWorkspace)?.apps" :key="app"
                    class="px-3 py-1.5 bg-gray-100 dark:bg-gray-700 rounded-md text-sm text-center font-medium">
                    {{ app }}
                  </div>
                  <div v-if="workspaces.find(w => w.id === currentWorkspace)?.apps.length === 0"
                    class="text-muted-foreground text-sm text-center py-4">
                    <div class="text-2xl mb-2">💤</div>
                    Empty workspace
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ul>
        <table class="my-6 border">
          <thead>
            <tr>
              <th>Shortcut</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <kbd
                  class="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-sm font-bold text-muted-foreground opacity-100">
                  <span class="text-sm">⌥</span>N
                </kbd>
              </td>
              <td>Where <kbd
                  class="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-sm font-bold text-muted-foreground opacity-100">N</kbd>
                is 1-5, takes me to workspace <kbd
                  class="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-sm font-bold text-muted-foreground opacity-100">N</kbd>
              </td>
            </tr>
            <tr>
              <td>
                <kbd
                  class="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-sm font-bold text-muted-foreground opacity-100">
                  <span class="text-sm">⇧</span><span class="text-sm">⌥</span>N
                </kbd>
              </td>
              <td>Moves the current window into workspace <kbd
                  class="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-sm font-bold text-muted-foreground opacity-100">N</kbd>
              </td>
            </tr>
            <tr>
              <td>
                <kbd
                  class="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-sm font-bold text-muted-foreground opacity-100">
                  <span class="text-sm">⌥</span>,
                </kbd>
              </td>
              <td>Stack layout</td>
            </tr>
            <tr>
              <td>
                <kbd
                  class="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-sm font-bold text-muted-foreground opacity-100">
                  <span class="text-sm">⌥</span>/
                </kbd>
              </td>
              <td>Split layout</td>
            </tr>
          </tbody>
        </table>
      </ul>
      <p>
        That's it. I typically have my browser in workspace 1, terminal on 2, and
        notes on 3. If I have a DB client, I open it on 4, but that's about it.
      </p>

      <p>
        I take a ton of inspiration from ThePrimeagen's workflow,
        <a href="https://youtu.be/bdumjiHabhQ" target="_blank" rel="noopener noreferrer">he explains it very well</a>:
      </p>

      <blockquote class="border-l-2 p-6 italic text-muted-foreground bg-muted">
        <p>I'm like: 'I need to go my browser' — <strong>I JUST DO IT!</strong></p>
        <p>I don't have to <em>think</em> about it. I don't have to do any sort of <em>mental overhead</em>.</p>
        <p>I've been using the exact same setup for years now, to the point where it's just <strong>MUSCLE
            MEMORY</strong>.</p>
        <p>My <strong>SPINAL CORD</strong> responds to my thinking (...)</p>
        <p>I'm just like '<strong><em>TERMINAL!</em></strong>' *summons terminal*</p>
        <cite class="text-sm not-italic">— ThePrimeagen</cite>
      </blockquote>

      <p>The rest of my setup is pretty simple:</p>
      <ul>
        <li>
          For any terminal-based apps, I use
          <a href="https://github.com/tmux/tmux" target="_blank" rel="noopener noreferrer">tmux</a>, with the default
          config.
        </li>
        <li>
          I use
          <a href="https://fishshell.com/" target="_blank" rel="noopener noreferrer">fish</a>
          as my shell, I find it very simple and powerful.
        </li>
      </ul>

      <h3>Why tmux?</h3>
      <p>
        I like it. It's simple, provides keyboard shortcuts for everything, and I
        can switch between sessions with just a few keystrokes.
      </p>

      <h3>Why fish?</h3>
      <p>
        Great defaults compared to other shells, and minimal config for the
        things I really need. Any shell works for me though, if something new
        comes out that's even simpler and more attractive, I will switch.
      </p>

      <h2>Folder structure for projects</h2>
      <p>
        Instead of having to think where to place new projects, I use
        <a href="https://github.com/x-motemen/ghq" target="_blank" rel="noopener noreferrer">ghq</a>. Whenever I need to
        clone a new repo, I run:
      </p>
    </div>

    <Suspense>
      <CodeBlock code="ghq get github.com/org_name/repo_name" lang="bash" />
    </Suspense>

    <!-- ASCII Art File Tree -->
    <div class="not-prose my-6 p-4 bg-gray-50 dark:bg-gray-900 rounded-lg font-mono text-sm">
      <div class="text-muted-foreground mb-2">📁 Your projects get organized like this:</div>
      <pre class="text-xs leading-relaxed">
        ~/ghq/
        ├── github.com/
        │ ├── microsoft/
        │ │ ├── vscode/
        │ │ └── typescript/
        │ ├── vercel/
        │ │ ├── next.js/
        │ │ └── swr/
        │ └── your-org/
        │ ├── awesome-project/
        │ └── another-repo/
        ├── gitlab.com/
        │ └── company/
        │ └── private-repo/
        └── bitbucket.org/
        └── legacy-stuff/
        └── old-project/
      </pre>
    </div>

    <p class="prose dark:prose-invert prose-quoteless prose-neutral">
      The repo will then get cloned into
      <code>~/ghq/github/org_name/repo_name</code>. To choose projects, I have a
      small fish function that I invoke when pressing <kbd
        class="pointer-events-none inline-flex h-5 select-none items-center gap-0 rounded border bg-muted px-1.5 font-mono text-[10px] font-bold text-muted-foreground opacity-100">
        <span class="text-xs">^</span>P
      </kbd>
      on a terminal.
    </p>

    <Suspense>
      <Gist />
    </Suspense>

    <div class="prose dark:prose-invert prose-quoteless prose-neutral">
      <div class="flex gap-2 flex-wrap sm:flex-nowrap sm:items-center">
        <img class="sm:h-80 inline" src="/gif/ghostty.gif">

        <div>
          <p>
            The function shows all of my <code>ghq</code> projects and uses
            <a href="https://github.com/junegunn/fzf" target="_blank" rel="noopener noreferrer">fzf</a>
            the list, I get moved into a new (or existing) <code>tmux</code> session
            for that directory.
          </p>

          <p>
            This is great because I have long-lived sessions and
            <code>tmux</code> keeps my panes/windows intact, even if I close my
            terminal, plus the added benefit of not having to think where to spawn my
            <code>tmux</code> sessions or how to name them.
          </p>
        </div>
      </div>

      <hr class="my-8" />

      <p>
        That's an overview of the tools I use. I want to share more about my IDE
        and other shortcuts, but I'll save that for another post :)
      </p>

      <div
        class="not-prose my-8 p-6 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20 rounded-lg border">
        <div class="text-center">
          <h4 class="text-lg font-bold mb-2">🔮 Want more setup deep-dives?</h4>
          <p class="text-sm text-muted-foreground mb-4">
            Next up: My IDE setup, custom shortcuts, and the dotfiles that make it all work together.
          </p>
          <div class="flex flex-col sm:flex-row gap-2 justify-center">
            <a target="_blank" href="https://github.com/raxelo/dotfiles"
              class="no-underline px-4 py-2 border border-primary text-primary rounded-lg hover:bg-primary/10 transition-colors">
              ⭐ Star the dotfiles repo
            </a>
          </div>
        </div>
      </div>
    </div>
  </article>
</template>
