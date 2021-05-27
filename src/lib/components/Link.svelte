<script>
	let to;
	let active = false;
	let clazz;

	export { to, active, clazz as class };
</script>

<a href={to} class={`hover:text-white transition-colors ${clazz || ''}`} class:text-white={active}>
	<slot />
</a>
