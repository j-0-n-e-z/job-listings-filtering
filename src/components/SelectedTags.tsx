import { FC } from 'react'
import { Xmark } from './Xmark'

type SelectedTagsProps = {
	setSelectedTags: React.Dispatch<React.SetStateAction<string[]>>
	selectedTags: string[]
}

export const SelectedTags: FC<SelectedTagsProps> = ({
	selectedTags,
	setSelectedTags
}) => {
	function removeTag(tag: string) {
		setSelectedTags(selectedTags =>
			selectedTags.filter(selectedTag => selectedTag !== tag)
		)
	}

	return (
		<section
			className={`${
				selectedTags.length === 0 ? 'invisible mt-[70px]' : 'visible mt-28'
			} flex items-center lg:mt-28 z-10 bg-white shadow-xl lg:w-3/5 w-11/12 min-h-[80px] rounded-lg lg:px-8 px-4`}
		>
			<div className='flex gap-4 flex-wrap py-4'>
				{selectedTags.map(selectedTag => (
					<div
						key={selectedTag}
						className='flex items-center h-min bg-lightGrayCyanFilter font-bold text-darkCyan rounded-md overflow-hidden'
					>
						<span className='px-2 pt-1 text-sm'>{selectedTag}</span>
						<button
							className='text-white bg-darkCyan hover:bg-veryDarkGrayCyan px-[6px] py-[7px] transition'
							onClick={() => removeTag(selectedTag)}
						>
							<Xmark />
						</button>
					</div>
				))}
			</div>
			<button
				className='lg:text-base text-sm ml-auto font-bold capitalize text-darkGrayCyan hover:text-darkCyan hover:underline transition'
				onClick={() => setSelectedTags([])}
			>
				clear
			</button>
		</section>
	)
}
