import { FC } from 'react'
import { VacancyType } from './types'
import { getVacancyTags } from './helpers'

type VacancyProps = {
	vacancy: VacancyType
	setSelectedTags: React.Dispatch<React.SetStateAction<string[]>>
	selectedTags: string[]
}

export const Vacancy: FC<VacancyProps> = ({ vacancy, setSelectedTags }) => {
	return (
		<div className='flex items-center p-10 mb-6 rounded-lg shadow-xl gap-x-6 w-full bg-white'>
			<img src={`src/${vacancy.logo.slice(1)}`} alt='logo' />
			<div className='flex flex-col'>
				<div className='flex'>
					<p className='font-bold text-darkCyan'>{vacancy.company}</p>
					{vacancy.new && (
						<div className='flex items-center font-medium text-sm text-white px-2 uppercase ml-4 rounded-full bg-darkCyan'>
							new!
						</div>
					)}
					{vacancy.featured && (
						<div className='flex items-center font-medium text-sm text-white px-2 uppercase ml-2 rounded-full bg-veryDarkGrayCyan'>
							featured
						</div>
					)}
				</div>
				<p className='font-bold text-veryDarkGrayCyan text-lg cursor-pointer'>
					{vacancy.position}
				</p>
				<div className='flex gap-3 text-darkGrayCyan font-medium'>
					<p>{vacancy.postedAt}</p>•<p>{vacancy.contract}</p>•
					<p>{vacancy.location}</p>
				</div>
			</div>
			<div className='flex ml-auto gap-5'>
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
