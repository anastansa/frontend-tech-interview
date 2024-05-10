export interface IMenuItem {
	name: string;
	url: string;
}

export const MENU_ITEM_LIST: IMenuItem[] = [
	{
		name: 'home',
		url: '/',
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