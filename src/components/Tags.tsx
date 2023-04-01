import { Dispatch, FC, SetStateAction } from 'react'
import { Xmark } from './Xmark'

type TagsProps = {
	setSelectedTags: Dispatch<SetStateAction<string[]>>
	selectedTags: string[]
}

export const Tags: FC<TagsProps> = ({ selectedTags, setSelectedTags }) => {
	return (
		<div
			className={`${
				selectedTags.length === 0 ? 'invisible mt-[70px]' : 'visible mt-28'
			} flex items-center lg:mt-28 z-10 bg-white shadow-xl lg:w-3/5 w-11/12 min-h-[80px] rounded-lg lg:px-8 px-4`}
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
								setSelectedTags(selectedTags =>
									selectedTags.filter(tag => tag !== selectedTag)
								)
							}
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
		</div>
	)
}
