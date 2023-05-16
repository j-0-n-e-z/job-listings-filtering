import { FC } from 'react'
import { VacancyType } from '../types'
import { getVacancyTags } from '../helpers'

type VacancyProps = {
	vacancy: VacancyType
	setSelectedTags: React.Dispatch<React.SetStateAction<string[]>>
	selectedTags: string[]
}

export const Vacancy: FC<VacancyProps> = ({
	vacancy,
	selectedTags,
	setSelectedTags
}) => {
	function toggleTag(tag: string) {
		setSelectedTags(selectedTags => {
			if (selectedTags.includes(tag)) {
				return selectedTags.filter(selectedTag => selectedTag !== tag)
			}
			return [...selectedTags, tag]
		})
	}

	const vacancyTags = getVacancyTags(vacancy).filter(
		tag => tag !== 'New' && tag !== 'Featured'
	)

	return (
		<article
			className={`flex lg:items-center items-start lg:flex-row flex-col lg:p-10 p-6 lg:mb-6 mb-12 rounded-lg shadow-xl lg:gap-6 w-full bg-white border-l-darkCyan ${
				vacancy.featured ? 'lg:border-l-[6px] border-l-[5px] lg:px-8 px-5' : ''
			}`}
		>
			<img
				className='lg:mt-0 -mt-[70px] lg:ml-0 -ml-5 lg:scale-100 scale-[0.6]'
				src={vacancy.logo}
				alt='logo'
			/>
			<div className='flex flex-col gap-3 lg:gap-1'>
				<div className='flex'>
					<span className='font-bold text-darkCyan lg:text-base text-sm'>
						{vacancy.company}
					</span>
					{vacancy.new && (
						<span
							onClick={() => toggleTag('New')}
							className='flex items-center font-medium lg:text-sm text-xs text-white px-2 uppercase lg:ml-4 ml-6 pt-1 rounded-full bg-darkCyan cursor-pointer'
						>
							new!
						</span>
					)}
					{vacancy.featured && (
						<span
							onClick={() => toggleTag('Featured')}
							className='flex items-center font-medium lg:text-sm text-xs text-white px-2 uppercase ml-2 pt-1 rounded-full bg-veryDarkGrayCyan cursor-pointer'
						>
							featured
						</span>
					)}
				</div>
				<a
					href='#'
					target='_blank'
					className='font-bold text-veryDarkGrayCyan lg:text-lg text-sm cursor-pointer hover:text-darkCyan transition'
				>
					{vacancy.position}
				</a>
				<div className='flex gap-x-3 text-darkGrayCyan font-medium lg:text-base text-sm'>
					<span>{vacancy.postedAt}</span>
					<span>•</span>
					<span>{vacancy.contract}</span>
					<span>•</span>
					<span>{vacancy.location}</span>
				</div>
			</div>
			<hr className='w-full my-5 lg:hidden block bg-darkGrayCyan' />
			<div className='flex ml-auto gap-5 flex-wrap justify-end'>
				{vacancyTags.map(vacancyTag => (
					<div
						key={vacancyTag}
						className={`tag ${
							selectedTags.includes(vacancyTag) ? 'tag--selected' : ''
						}`}
						onClick={() => toggleTag(vacancyTag)}
					>
						{vacancyTag}
					</div>
				))}
			</div>
		</article>
	)
}
