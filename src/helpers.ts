import { VacancyType } from './types'

export const getVacancyTags = (vacancy: VacancyType) => {
	const vacancyTags = [
		vacancy.role,
		vacancy.level,
		...vacancy.tools,
		...vacancy.languages
	]
	if (vacancy.new) vacancyTags.push('New')
	if (vacancy.featured) vacancyTags.push('Featured')
	return vacancyTags
}
