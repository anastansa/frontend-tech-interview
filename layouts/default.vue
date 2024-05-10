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
}
</style>