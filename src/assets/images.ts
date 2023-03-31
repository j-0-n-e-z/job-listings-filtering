import vacancies from '../data/data.json'

export const IMAGES = vacancies.reduce<Record<string, string>>(
	(obj, vacancy) => (
		(obj[vacancy.company] = new URL(vacancy.logo, import.meta.url).href), obj
	),
	{}
)
