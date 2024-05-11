export interface IMenuItem {
	name: string;
	url: string;
	icon?: string;
}

export const MENU_ITEM_LIST: IMenuItem[] = [
	{
		name: '',
		url: '/',
		icon: 'radix-icons:home',
	},
	{
		name: 'javascript',
		url: '/javascript',
	},
	{
		name: 'css',
		url: '/css',
	},
	{
		name: 'html',
		url: '/html',
	},
	{
		name: 'typescript',
		url: '/typescript',
	},
	{
		name: 'vue',
		url: '/vue',
	},
	{
		name: 'react',
		url: '/react',
	},
];