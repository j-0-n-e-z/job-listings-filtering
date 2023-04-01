import { useState } from 'react'
import './App.css'
import vacancies from './data/data.json'
import { Vacancy } from './components/Vacancy'
import { getVacancyTags } from './helpers'
import background from '../public/images/bg-header-desktop.svg'
import backgroundMobile from '../public/images/bg-header-mobile.svg'
import { Tags } from './components/Tags'

export default function App() {
	const [selectedTags, setSelectedTags] = useState<string[]>([])

	return (
		<div className='w-full min-h-screen grid justify-items-center content-start lg:gap-8 gap-16 bg-lightGrayCyanBg'>
			<div className='absolute w-screen top-0 bg-darkCyan'>
				<img className='mx-auto lg:block hidden' src={background} alt='bg' />
				<img
					className='mx-auto lg:hidden block'
					src={backgroundMobile}
					alt='bg'
				/>
			</div>
			<Tags selectedTags={selectedTags} setSelectedTags={setSelectedTags} />
			<div className='flex flex-col lg:w-4/5 w-11/12'>
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
