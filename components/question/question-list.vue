<script setup lang="ts">
import QuestionItem from './question-item.vue';
import type { IQuestion } from '../../mock/types';

defineProps<{
	list: IQuestion[];
}>()

</script>

<template>
	<div class="list">
		<QuestionItem v-for="item in list" :key="item.id" :item="item" />
	</div>
</template>

<style scoped lang="scss">
.list {
	display: flex;
	flex-direction: column;
	gap: 15px;
}
</style>