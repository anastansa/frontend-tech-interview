<script setup lang="ts">
import type { IQuestion } from '../../mock/types';
import { getBadgeColor } from '../helpers/badge';

defineProps<{
	item: IQuestion;
}>()

</script>

<template>
	<NuxtLink :to="`question/${item.category_name}/${item.id}`">
		<div class="card">
			<div class="card__header">
				<div class="card__title"> {{ item.title }}</div>
				<div class="card__details">
					<div class="card__time">
						<Icon name="radix-icons:clock" />
						{{ item.reading_time }} min.
					</div>
					<Icon v-if="item.is_favorite" name="radix-icons:heart-filled" />
					<Icon v-else name="radix-icons:heart" />
				</div>
			</div>
			<div class="card__description"> {{ item.description || '...' }}</div>
			<!-- <div class="card__link"> read more: {{ item.link }}</div> -->
			<Badge :name="item.category_name" :color="getBadgeColor(item.category_type)" />
		</div>
	</NuxtLink>
</template>

<style scoped lang="scss">
.card {
	padding: 15px;
	cursor: pointer;
	background-color: rgb(36 36 36 / 85%);
	border-radius: 10px;

	&:hover {
		background-color: rgb(36 36 36 / 70%);
		transition: all 0.3s ease;
	}

	&__header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 20px;
	}

	&__details {
		display: flex;
		align-items: center;
		gap: 15px;
	}

	&__time {
		display: flex;
		align-items: center;
		gap: 5px;
	}

	&__title {
		font-size: 1.3rem;
		font-weight: bold;
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
</style>