<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import { QUESTION_LIST } from '../../../mock/mock.data';

// TODO replace mock data
const route = useRoute();

const item = computed(() => QUESTION_LIST.find((item) => item.id === route.params.id))
</script>

<template>
	<div v-if="item">
		{{ item.id }}
	</div>
</template>

<style scoped lang="scss"></style>