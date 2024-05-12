export const getBadgeColor = (category_type: number): string => {

	switch (category_type) {
		case (1):
			return 'red';
		case (2):
			return 'blue';
		case (3):
			return 'green';
		case (4):
			return 'yellow';
		case (5):
			return 'purple';
		case (6):
			return 'aqua';
		default:
			return 'grey';
	}
}