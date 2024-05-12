<script setup lang="ts"></script>

<template>
	<div class="page">
		[ ЗДЕСЬ МОГЛА БЫТЬ ВАША РЕКЛАМА ]
	</div>
</template>

<style scoped lang="scss">
.page {
	padding: 0 50px;
	font-size: 2rem;
	text-align: center;
	animation: appear 4s;
}

@keyframes appear {
	from {
		opacity: 0;
	}

	to {
		opacity: 0.9;
	}
}
</style>