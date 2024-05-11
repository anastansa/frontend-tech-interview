export interface IQuestion {
	id: string;
	title: string;
	description: string;
	link: string;
	created_at: number;
	updated_at: number | null;
}
