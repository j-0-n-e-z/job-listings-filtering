import { useState } from 'react'
import { getVacancyTags } from './helpers'
import vacanciesData from './data/vacancies.json'
import { Vacancy } from './components/Vacancy'
import { Filter } from './components/Filter'

function App() {
	const [selectedTags, setSelectedTags] = useState<string[]>([])

	let vacancies = selectedTags.length
		? vacanciesData.filter(vacancy =>
				selectedTags.every(selectedTag =>
					getVacancyTags(vacancy).includes(selectedTag)
				)
		  )
		: vacanciesData

	if (selectedTags.includes('New')) {
		vacancies = vacancies.filter(vacancy => vacancy.new)
	}

	if (selectedTags.includes('Featured')) {
		vacancies = vacancies.filter(vacancy => vacancy.featured)
	}

	vacancies
		.sort((a, b) => +b.new - +a.new)
		.sort((a, b) => +b.featured - +a.featured)

	return (
		<main className='font-LeagueSpartan min-h-screen grid justify-items-center content-start lg:gap-8 gap-16 bg-lightGrayCyanBg'>
			<div className='absolute w-screen top-0 bg-darkCyan'>
				<img
					className='mx-auto lg:block hidden'
					src='./images/bg-header-desktop.svg'
					alt='background'
				/>
				<img
					className='mx-auto lg:hidden block'
					src='./images/bg-header-mobile.svg'
					alt='background'
				/>
			</div>
			<Filter selectedTags={selectedTags} setSelectedTags={setSelectedTags} />
			<section className='flex flex-col lg:w-4/5 w-11/12'>
				{vacancies.map(vacancy => (
					<Vacancy
						key={vacancy.id}
						vacancy={vacancy}
						selectedTags={selectedTags}
						setSelectedTags={setSelectedTags}
					/>
				))}
			</section>
		</main>
	)
}

export default App
