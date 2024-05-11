<script setup lang="ts">
import QuestionList from '../components/question/question-list.vue';
import { JAVASCRIPT_QUESTION_LIST } from '../mock/javascript.data';
</script>

<template>
	<div class="page">
		<QuestionList :list="JAVASCRIPT_QUESTION_LIST" />
	</div>
</template>

<style scoped lang="scss">
.page {
	padding: 0 50px;
}
</style>