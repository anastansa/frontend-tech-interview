<script setup lang="ts">
import QuestionList from '../components/question/question-list.vue';
import { QUESTION_LIST } from '../mock/mock.data';
</script>

<template>
	<div class="page">
		<!--TODO replace mock data-->
		<QuestionList :list="QUESTION_LIST.filter((item) => item.category_name === 'typescript')" />
	</div>
</template>

<style scoped lang="scss">
.page {
	padding: 0 50px;
}
</style>