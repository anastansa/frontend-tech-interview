<script lang="ts" setup>
import { MENU_ITEM_LIST } from './menu.list';
</script>

<template>
	<div class="menu__wrapper">
		<nav class="menu">
			<NuxtLink v-for="item in MENU_ITEM_LIST" :key="item.url" :to="item.url" class="menu__item">
				{{ item.name }}
				<Icon v-if="item.icon" :name="item.icon" />
			</NuxtLink>
		</nav>
	</div>
</template>

<style lang="scss" scoped>
.menu {
	display: flex;
	justify-content: space-between;
	align-items: center;
	gap: 15px;
	width: 50%;
	margin: 0 auto;

	&__wrapper {
		padding: 0 50px;
	}

	&__item {
		text-decoration: none;
		list-style: none;
		color: rgba(255, 255, 255, 0.7);
		font-size: 1.4rem;

		display: flex;
		align-items: center;
		justify-content: center;

		min-height: 40px;
		padding: 0 15px;
		border: 1px solid rgba(255, 255, 255, 0.7);
		border-radius: 10px;
		cursor: pointer;

		&:hover {
			color: rgba(255, 255, 255, 0.9);
			border-color: rgba(255, 255, 255, 0.9);
			transition: all 0.3s ease;
		}
	}
}

.router-link-active {
	border-color: rgb(50 245 134 / 80%);
	color: rgb(50 245 134 / 80%);

	&:hover {
		border-color: rgb(50 245 134 / 80%);
		color: rgb(50 245 134 / 80%);
	}
}
</style>