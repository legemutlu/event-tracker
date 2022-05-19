<script lang="ts">
	import Header from '$lib/components/header/Header.svelte';
	import '../app.css';
	import Footer from "$lib/components/footer/Footer.svelte";
</script>

<Header/>

<main>
	<slot />
</main>

<style>
</style>
