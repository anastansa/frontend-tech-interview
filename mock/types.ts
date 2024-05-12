export interface IQuestion {
	id: string;
	title: string;
	description: string | null;
	link: string;
	reading_time: number;
	is_favorite: boolean;
	category_name: string;
	category_type: number;
	created_at: number;
	updated_at: number | null;
}
