import { useState } from 'react'
import './App.css'
import vacancies from './data/data.json'
import { Vacancy } from './Vacancy'

export default function App() {
	const [selectedTags, setSelectedTags] = useState([])

	return (
		<div className='w-full grid justify-items-center gap-8 bg-lightGrayCyanBg'>
			<div className='absolute w-full top-0 bg-darkCyan'>
				<img
					className='mx-auto'
					src='src/assets/images/bg-header-desktop.svg'
					alt='bg'
				/>
			</div>
			<div className='mt-28 text-xl z-10 bg-white shadow-xl w-3/5 h-20 rounded-lg'>
				Tags
			</div>
			<div className='flex flex-col w-3/5'>
				{vacancies.map(vacancy => (
					<Vacancy key={vacancy.id} vacancy={vacancy} />
				))}
			</div>
		</div>
	)
}
