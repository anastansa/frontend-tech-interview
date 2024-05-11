<script setup lang="ts">
import type { IQuestion } from '../../mock/types';

defineProps<{
	item: IQuestion;
}>()

</script>

<template>
	<div class="card">
		<div class="card__title"> {{ item.title }}</div>
		<div class="card__description"> {{ item.description }}</div>
		<!-- <div class="card__link"> read more: {{ item.link }}</div> -->
	</div>
</template>

<style scoped lang="scss">
.card {
	padding: 15px;
	cursor: pointer;
	border: 2px solid black;
	border-radius: 10px;

	&:hover {
		transition: all 0.3s ease;
		background: linear-gradient(-45deg, #baf5e7, #b8c8f5, #ECEFF8, #f5eab3);
		background-size: 400% 400%;
		animation: gradient 15s ease infinite;
	}

	&__title {
		font-size: 1.3rem;
		font-weight: bold;
		margin-bottom: 20px;
	}

	&__description {
		font-size: 1.1rem;
		margin-bottom: 20px;
		max-height: 60px;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
	}
}

@keyframes gradient {
	0% {
		background-position: 0 50%;
	}

	50% {
		background-position: 100% 50%;
	}

	100% {
		background-position: 0 50%;
	}
}
</style>