<route lang="yaml">
meta:
  title: "How I Manage My Emails: Simple, Fast, and Intentional"
  description: "My approach to email management using Gmail's keyboard shortcuts, split view, and a clear mental model"
  publishedDate: "2025-06-11"
  thumbnail: "/images/blog/email-management.jpg"
  tags: ["productivity", "email", "workflow"]
  draft: false
</route>

<script setup lang="ts">
import {
	Card,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { ref, onMounted, onUnmounted } from "vue";
import { useHead } from "@unhead/vue";

definePage({
	meta: {
		title: "How I Manage My Emails: Simple, Fast, and Intentional",
		description:
			"My approach to email management using Gmail's keyboard shortcuts, split view, and a clear mental model",
		publishedDate: "2025-06-11",
		thumbnail: "/images/blog/email-management.jpg",
		tags: ["productivity", "email", "workflow"],
		author: "Lucas Goyeche",
	},
});

useHead({
	title:
		"Lucas Goyeche - How I Manage My Emails: Simple, Fast, and Intentional",
	meta: [
		{
			name: "description",
			content:
				"My approach to email management using Gmail's keyboard shortcuts, split view, and a clear mental model",
		},
	],
});

// Interactive email demo
const selectedEmail = ref(0);
const emails = ref([
	{
		id: 1,
		from: "Sarah Chen",
		subject: "Project timeline update",
		preview: "Hi Lucas, I wanted to update you on the current status...",
		label: "work",
		time: "2h ago",
	},
	{
		id: 2,
		from: "GitHub",
		subject: "New pull request on dotfiles",
		preview: "A new pull request has been opened by contributor...",
		label: "github",
		time: "4h ago",
	},
	{
		id: 3,
		from: "Mom",
		subject: "Dinner this Sunday?",
		preview: "Hey! Are you free this Sunday for dinner? I'm making...",
		label: "personal",
		time: "1d ago",
	},
	{
		id: 4,
		from: "Spotify",
		subject: "Spotify Subscription Renewal",
		preview: "Your invoice for December is now available...",
		label: "invoices",
		time: "2d ago",
	},
]);

const isDemo = ref(true);

onMounted(() => {
	document.addEventListener("keydown", handleKeyPress);
});

onUnmounted(() => {
	document.removeEventListener("keydown", handleKeyPress);
});

const handleKeyPress = (event) => {
	if (!isDemo.value) return;

	// Allow browser shortcuts and other key combinations
	if (event.metaKey || event.ctrlKey || event.altKey || event.shiftKey) {
		return;
	}

	// Only handle single letter keys for our demo
	if (!["j", "k", "e"].includes(event.key.toLowerCase())) {
		return;
	}

	event.preventDefault();

	switch (event.key.toLowerCase()) {
		case "j":
			if (selectedEmail.value < emails.value.length - 1) {
				selectedEmail.value++;
			}
			break;
		case "k":
			if (selectedEmail.value > 0) {
				selectedEmail.value--;
			}
			break;
		case "e":
			// Simulate archiving
			emails.value.splice(selectedEmail.value, 1);
			if (selectedEmail.value >= emails.value.length) {
				selectedEmail.value = Math.max(0, emails.value.length - 1);
			}
			break;
	}
};

const stopDemo = () => {
	isDemo.value = false;
	document.removeEventListener("keydown", handleKeyPress);
};

onUnmounted(() => {
	stopDemo();
});
</script>

<template>
  <article class="max-w-none">
    <div class="prose dark:prose-invert prose-quoteless prose-neutral">
      <header>
        <h1 class="text-3xl font-bold mb-2">
          How I Manage My Emails: Simple, Fast, and Intentional
        </h1>
        <p class="text-sm text-muted-foreground">Published on June 11, 2025</p>
      </header>

      <p>
        Email used to be a source of stress for me. Thousands of messages cluttering my inbox, important emails getting
        lost in the noise, and no clear system for actually <em>dealing</em> with what needed my attention.
      </p>

      <p>
        Now, my email feels intentional. Every message gets dealt with, my inbox reflects my actual to-dos, and I can
        navigate everything without lifting my fingers from the keyboard.
      </p>

      <h2>The Problem: Email as Chaos</h2>

      <div class="not-prose my-6">
        <div class="grid md:grid-cols-2 gap-6">
          <Card class="border-red-200 dark:border-red-800">
            <CardHeader>
              <CardTitle class="text-red-600 dark:text-red-400 flex items-center gap-2">
                😵‍💫 Before: Email Chaos
              </CardTitle>
              <CardDescription>
                <ul class="space-y-2 text-sm">
                  <li>Thousands of emails in inbox</li>
                  <li>Clicking around to navigate</li>
                  <li>Important emails getting lost</li>
                  <li>Email as just communication, not task management</li>
                  <li>No clear mental model of what needs attention</li>
                </ul>
              </CardDescription>
            </CardHeader>
          </Card>

          <Card class="border-green-200 dark:border-green-800">
            <CardHeader>
              <CardTitle class="text-green-600 dark:text-green-400 flex items-center gap-2">
                ✨ After: Intentional Email
              </CardTitle>
              <CardDescription>
                <ul class="space-y-2 text-sm">
                  <li>Clean inbox that reflects actual to-dos</li>
                  <li>Keyboard-only navigation</li>
                  <li>Every email gets dealt with</li>
                  <li>Clear mental model of what needs attention</li>
                  <li>Psychological clarity and control</li>
                </ul>
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </div>

      <p>
        The shift wasn't about finding the perfect email client or complex productivity system. It was about making a
        few key changes to Gmail and developing a clear mental model for how email should work.
      </p>

      <h2>The Setup: Four Simple Changes</h2>

      <h3>1. Keyboard Shortcuts (Vim-style)</h3>
      <p>
        I enabled <a href="https://support.google.com/mail/answer/6594?hl=en" target="_blank">GMail's built-in vim
          keybinds</a>. This means I can navigate my inbox with <kbd
          class="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-sm font-bold text-muted-foreground opacity-100">h</kbd><kbd
          class="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-sm font-bold text-muted-foreground opacity-100">j</kbd><kbd
          class="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-sm font-bold text-muted-foreground opacity-100">k</kbd><kbd
          class="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-sm font-bold text-muted-foreground opacity-100">l</kbd>
        and archive emails with <kbd
          class="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-sm font-bold text-muted-foreground opacity-100">E</kbd>.
      </p>

      <h3>2. Split Layout</h3>
      <p>
        I use Gmail's split view: email list on the left, preview on the right. Combined with keyboard navigation, I can
        quickly scan through emails without clicking around.
      </p>

      <h3>3. Labels for Organization</h3>
      <p>
        I apply labels to emails as they come in - by project, urgency, or type. Nothing fancy, no nested hierarchies.
        Just simple tags that help me categorize what needs attention.
      </p>

      <h3>4. Archive Everything</h3>
      <p>
        The key mindset shift: I archive any email I'm done with by pressing <kbd
          class="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-sm font-bold text-muted-foreground opacity-100">E</kbd>.
        My inbox only contains emails that need action.
      </p>

      <!-- Interactive Demo -->
      <div class="not-prose my-8 p-6 bg-gray-50 dark:bg-gray-900 rounded-lg border">
        <h4 class="text-lg font-semibold mb-4 text-center mt-0">📧 Interactive Email Navigation Demo</h4>
        <p class="text-sm text-muted-foreground text-center mb-4">
          {{ isDemo ? 'Use J/K to navigate, E to archive' : 'Click "Start Demo" to try keyboard navigation' }}
        </p>

        <div class="flex justify-center mb-4 gap-2">
          <button v-if="emails.length === 0" @click="emails = [
            {
              id: 1,
              from: 'Sarah Chen',
              subject: 'Project timeline update',
              preview: 'Hi Lucas, I wanted to update you on the current status...',
              label: 'work',
              time: '2h ago'
            },
            {
              id: 2,
              from: 'GitHub',
              subject: 'New pull request on dotfiles',
              preview: 'A new pull request has been opened by contributor...',
              label: 'github',
              time: '4h ago'
            },
            {
              id: 3,
              from: 'Mom',
              subject: 'Dinner this Sunday?',
              preview: 'Hey! Are you free this Sunday for dinner? I\'m making...',
              label: 'personal',
              time: '1d ago'
            },
            {
              id: 4,
              from: 'Client Portal',
              subject: 'Invoice #2024-156 is ready',
              preview: 'Your invoice for December services is now available...',
              label: 'invoices',
              time: '2d ago'
            },
          ]; selectedEmail = 0;"
            class="px-4 py-2 rounded-lg font-medium transition-all duration-200 bg-green-500 text-white hover:bg-green-600">
            Reset Demo
          </button>
        </div>

        <!-- Gmail-like interface -->
        <div class="bg-white dark:bg-gray-800 rounded-lg border overflow-hidden">
          <!-- Gmail header -->
          <div class="bg-gray-100 dark:bg-gray-700 px-4 py-2 border-b">
            <div class="flex items-center justify-between">
              <h5 class="font-semibold text-sm">Inbox ({{ emails.length }})</h5>
              <div class="text-xs text-muted-foreground">
                {{ isDemo ? 'Demo Mode: Use J/K/E keys' : 'Click \'Start Demo\'' }}
              </div>
            </div>
          </div>

          <div class="flex" style="height: 300px;">
            <!-- Email list (left side) -->
            <div class="w-1/2 border-r">
              <div v-for="(email, index) in emails" :key="email.id" :class="[
                'p-3 border-b cursor-pointer transition-colors',
                selectedEmail === index
                  ? 'bg-blue-100 dark:bg-blue-900/30 border-l-4 border-l-blue-500'
                  : 'hover:bg-gray-50 dark:hover:bg-gray-700/50'
              ]" @click="selectedEmail = index">
                <div class="flex items-start justify-between mb-1">
                  <div class="font-medium text-sm truncate">{{ email.from }}</div>
                  <div class="text-xs text-muted-foreground ml-2">{{ email.time }}</div>
                </div>
                <div class="text-sm font-medium mb-1 truncate">{{ email.subject }}</div>
                <div class="text-xs text-muted-foreground truncate">{{ email.preview }}</div>
                <div class="mt-2">
                  <span class="inline-block px-2 py-1 text-xs bg-gray-200 dark:bg-gray-600 rounded">
                    {{ email.label }}
                  </span>
                </div>
              </div>

              <div v-if="emails.length === 0" class="h-full flex items-center justify-center text-muted-foreground">

                <div class="text-center">
                  <div class="text-2xl mb-2">🎉</div>
                  <div class="text-sm">Inbox Zero!</div>
                </div>
              </div>
            </div>

            <!-- Email preview (right side) -->
            <div class="w-1/2 p-4">
              <div v-if="emails.length > 0 && emails[selectedEmail]" class="h-full">
                <div class="border-b pb-3 mb-3">
                  <h6 class="font-semibold text-lg mb-1">{{ emails[selectedEmail].subject }}</h6>
                  <div class="text-sm text-muted-foreground">
                    From: {{ emails[selectedEmail].from }} • {{ emails[selectedEmail].time }}
                  </div>
                </div>
                <div class="text-sm leading-relaxed">
                  {{ emails[selectedEmail].preview }}
                </div>
                <div class="mt-4 pt-3 border-t">
                  <div class="text-xs text-muted-foreground">
                    Press <kbd class="px-1 py-0.5 bg-gray-200 dark:bg-gray-600 rounded text-xs">E</kbd> to archive this
                    email
                  </div>
                </div>
              </div>
              <div v-else class="h-full flex items-center justify-center text-muted-foreground">
                <div class="text-center">
                  <div class="text-2xl mb-2">📭</div>
                  <div class="text-sm">No emails to preview</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="mt-4 text-center">
          <div class="inline-flex gap-4 text-xs text-muted-foreground">
            <span><kbd class="px-1 py-0.5 bg-gray-200 dark:bg-gray-600 rounded">J</kbd> Next email</span>
            <span><kbd class="px-1 py-0.5 bg-gray-200 dark:bg-gray-600 rounded">K</kbd> Previous email</span>
            <span><kbd class="px-1 py-0.5 bg-gray-200 dark:bg-gray-600 rounded">E</kbd> Archive email</span>
          </div>
        </div>
      </div>

      <h2>The Automation Layer</h2>
      <p>
        I set up filters for emails that don't need immediate attention - weekly reports, newsletters, automated
        notifications. These skip my main inbox and go directly to specific labels like "newsletters" or "reports."
      </p>

      <p>
        This means my main inbox only contains emails that actually need a response or action from me.
      </p>

      <p>
        It's not about having zero emails, for me it's about having a clear mental model of what requires my attention.
      </p>

      <h2>Staying Aware</h2>
      <p>
        I also set up a subtle notification sound for new emails. It helps me stay aware of conversations as they happen
        without constantly checking my inbox.
      </p>

      <!-- Gmail notification settings image -->
      <img src="./img/email-sounds.jpg"
        class="rounded-3xl shadow block mx-auto w-full sm:w-10/12 border-2 mt-4 overflow-hidden"
        alt="Gmail notification sounds setting">

      <p class="text-muted-foreground text-sm text-center">
        <em>Note: This might be distracting for some people and could break your flow. Find what works for you.</em>
      </p>

      <h2>The Psychology of Intentional Email</h2>
      <p>
        The real benefit isn't just speed or organization - it's the psychological clarity. When I open my email, I know
        exactly what needs my attention. Every email in my inbox represents something I need to deal with.
      </p>

      <p>
        There's something deeply satisfying about processing an email and immediately archiving it with a single
        keystroke. It feels like checking off a to-do item. My inbox becomes a reflection of my actual work, not just a
        dumping ground for messages.
      </p>

      <h2>Simple, Reproducible, Fast</h2>
      <p>
        This setup is intentionally simple. No complex rules, no elaborate folder hierarchies, no third-party tools.
        Just Gmail with a few settings changed and a clear mental model for how email should work.
      </p>

      <p>
        The goal is not to have a small inbox, it's to be <strong>aware</strong> of what's there and deal with
        every item at its own pace. Some emails get archived immediately, others get labeled and stay in the inbox until
        I can properly address them.
      </p>

      <hr class="my-8" />

      <p>
        That's my approach to email management. Simple, keyboard-driven, and focused on maintaining a clear mental model
        of what needs attention.
      </p>
    </div>
  </article>
</template>
