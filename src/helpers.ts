import { VacancyType } from './types'

export const getVacancyTags = (vacancy: VacancyType) => {
	return [vacancy.role, vacancy.level, ...vacancy.tools, ...vacancy.languages]
}
