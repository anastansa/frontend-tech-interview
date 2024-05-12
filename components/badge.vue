<script setup lang="ts">
defineProps<{
	name: string;
	color?: string;
}>()
</script>

<template>
	<div class="badge">
		<div class="badge__dot" :style="{ backgroundColor: color }" />
		<div class="badge__name">
			{{ name }}
		</div>
	</div>
</template>

<style scoped lang="scss">
.badge {
	display: flex;
	align-items: center;
	gap: 8px;

	&__dot {
		width: 8px;
		height: 8px;
		border-radius: 50%;
	}

	&__name {
		font-style: italic;
	}
}
</style>