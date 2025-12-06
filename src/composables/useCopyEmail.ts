import { ref } from "vue";
import { toast } from "vue-sonner";

const EMAIL = "lucasgoyeche@gmail.com";

const clickCount = ref(0);

const MAX_THRESHOLD = 120;

export function useCopyEmail() {
	async function copyEmail() {
		clickCount.value++;

		if (clickCount.value >= MAX_THRESHOLD) {
			clickCount.value = 0;
			return;
		}

		if (clickCount.value >= 100) {
			toast(
				`You win. Resetting the counter in ${MAX_THRESHOLD - clickCount.value}`,
			);
			return;
		}

		if (clickCount.value >= 50) {
			toast("Clicking the button isn't free!!");
			return;
		}

		if (clickCount.value >= 10) {
			toast("Hello!! Stop spamming the button!!");
			return;
		}

		if (clickCount.value >= 3) {
			toast("Hey! It's copied already.");
			return;
		}

		await navigator.clipboard.writeText(EMAIL);
		toast("Email copied to clipboard", {
			description: EMAIL,
		});
	}

	return { copyEmail };
}
