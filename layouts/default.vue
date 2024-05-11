<script setup lang="ts">

</script>

<template>
	<section class="container">
		<Menu />
		<slot />
	</section>
</template>

<style lang="scss" scoped>
.container {
	padding-top: 100px;
	min-height: 100vh;
	display: grid;
	grid-template-columns: 100%;
	grid-template-rows: max-content 1fr;
	gap: 50px;
}
</style>