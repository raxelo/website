<style global lang="postcss">
	@tailwind base;
	@tailwind components;
	@tailwind utilities;

	:root {
		--scrollbar-bg: rgb(3, 3, 3);
		--scrollbar-color: rgb(10, 10, 10);
		--scrollbar-hover: rgb(32, 32, 32);
	}

	html {
		overflow-y: scroll;
		overflow-x: hidden;
	}
	* {
		scrollbar-color: var(--scrollbar-color) var(--scrollbar-bg);
	}
	::-webkit-scrollbar {
		width: 8px;
	}
	::-webkit-scrollbar-track {
		background: var(--scrollbar-bg);
		border-radius: 12px;
	}
	::-webkit-scrollbar-thumb {
		background: var(--scrollbar-color);
		border-radius: 12px;
	}
	::-webkit-scrollbar-thumb:hover {
		background: var(--scrollbar-hover);
	}
</style>
