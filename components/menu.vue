<script lang="ts" setup>
import { MENU_ITEM_LIST } from './menu.list';
</script>

<template>
	<div class="menu__wrapper">
		<nav class="menu">
			<NuxtLink v-for="item in MENU_ITEM_LIST" :key="item.name" :to="item.url" class="menu__item">
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
		color: black;
		font-size: 1.3rem;

		padding: 5px 10px;
		border: 1px solid black;
		border-radius: 10px;
		cursor: pointer;

		&:hover {
			background-color: rgba(0, 0, 0, 0.6);
			color: white;
			border-color: transparent;
			transition: all 0.3s ease;
		}
	}
}

.router-link-active {
	background-color: black;
	color: white;

	&:hover {
		background-color: black;
		color: white;
	}
}
</style>