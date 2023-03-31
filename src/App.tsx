import { useState } from 'react'
import './App.css'
import vacancies from './data/data.json'
import { Vacancy } from './Vacancy'
import { getVacancyTags } from './helpers'
import background from '../public/images/bg-header-desktop.svg'

export default function App() {
	const [selectedTags, setSelectedTags] = useState<string[]>([])

	return (
		<div className='w-full grid justify-items-center gap-8 bg-lightGrayCyanBg'>
			<div className='absolute w-full top-0 bg-darkCyan'>
				<img className='mx-auto' src={background} alt='bg' />
			</div>
			<div
				className={`${
					selectedTags.length === 0 ? 'invisible' : 'visible'
				} flex items-center mt-28 z-10 bg-white shadow-xl w-3/5 min-h-[80px] rounded-lg px-8`}
			>
				<div className='flex gap-4 flex-wrap py-4'>
					{selectedTags.map(selectedTag => (
						<div
							key={selectedTag}
							className='flex items-center bg-lightGrayCyanFilter font-bold text-darkCyan rounded-md'
						>
							<div className='px-2 text-sm'>{selectedTag}</div>
							<button
								className='text-white bg-darkCyan hover:bg-veryDarkGrayCyan px-[6px] py-[7px] rounded-[0_.375rem_.375rem_0] transition'
								onClick={() =>
									setSelectedTags(prev =>
										prev.filter(tag => tag !== selectedTag)
									)
								}
							>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									fill='none'
									viewBox='0 0 24 24'
									strokeWidth={3}
									stroke='currentColor'
									className='w-5 h-5'
								>
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										d='M6 18L18 6M6 6l12 12'
									/>
								</svg>
							</button>
						</div>
					))}
				</div>
				<button
					className='ml-auto font-bold capitalize text-darkGrayCyan hover:text-darkCyan hover:underline transition'
					onClick={() => setSelectedTags([])}
				>
					clear
				</button>
			</div>
			<div className='flex flex-col w-3/5'>
				{vacancies
					.filter(
						vacancy =>
							selectedTags.length === 0 ||
							selectedTags.every(selectedTag =>
								getVacancyTags(vacancy).includes(selectedTag)
							)
					)
					.map(vacancy => (
						<Vacancy
							key={vacancy.id}
							vacancy={vacancy}
							setSelectedTags={setSelectedTags}
							selectedTags={selectedTags}
						/>
					))}
			</div>
		</div>
	)
}
