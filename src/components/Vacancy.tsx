import { FC } from 'react'
import { VacancyType } from '../types'
import { getVacancyTags } from '../helpers'

type VacancyProps = {
	vacancy: VacancyType
	setSelectedTags: React.Dispatch<React.SetStateAction<string[]>>
	selectedTags: string[]
}

export const Vacancy: FC<VacancyProps> = ({ vacancy, setSelectedTags }) => {
	return (
		<div
			className={`flex lg:items-center items-start lg:flex-row flex-col lg:p-10 p-6 lg:mb-6 mb-12 rounded-lg shadow-xl lg:gap-6 w-full bg-white border-l-darkCyan ${
				vacancy.featured && 'lg:border-l-[6px] border-l-[5px] lg:px-8 px-5'
			}`}
		>
			<img
				className='lg:mt-0 -mt-[70px] lg:ml-0 -ml-5 lg:scale-100 scale-[0.6]'
				src={vacancy.logo}
				alt='logo'
			/>
			<div className='flex flex-col gap-3 lg:gap-1'>
				<div className='flex'>
					<p className='font-bold text-darkCyan lg:text-base text-sm'>
						{vacancy.company}
					</p>
					{vacancy.new && (
						<div className='flex items-center font-medium lg:text-sm text-xs text-white px-2 uppercase lg:ml-4 ml-6 rounded-full bg-darkCyan'>
							new!
						</div>
					)}
					{vacancy.featured && (
						<div className='flex items-center font-medium lg:text-sm text-xs text-white px-2 uppercase ml-2 rounded-full bg-veryDarkGrayCyan'>
							featured
						</div>
					)}
				</div>
				<p className='font-bold text-veryDarkGrayCyan lg:text-lg text-sm cursor-pointer hover:text-darkCyan transition'>
					{vacancy.position}
				</p>
				<div className='flex gap-3 text-darkGrayCyan font-medium lg:text-base text-sm'>
					<p>{vacancy.postedAt}</p>•<p>{vacancy.contract}</p>•
					<p>{vacancy.location}</p>
				</div>
			</div>
			<hr className='w-full my-5 lg:hidden block bg-darkGrayCyan' />
			<div className='flex ml-auto gap-5 flex-wrap'>
				{getVacancyTags(vacancy).map(tag => (
					<div
						key={tag}
						className='tag'
						onClick={() =>
							setSelectedTags(prev =>
								prev.includes(tag) ? prev : [...prev, tag]
							)
						}
					>
						{tag}
					</div>
				))}
			</div>
		</div>
	)
}
