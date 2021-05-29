import { ChipIcon, CloudIcon, CogIcon, PuzzleIcon, SearchCircleIcon, UsersIcon } from '@heroicons/react/solid'
import React from 'react'

const SideBar = () => {
    return (
        <aside className='w-16  border-r  h-screen  flex flex-col items-center p-2 py-4 '>
            <div className='space-y-5'>
                <ChipIcon className='h-10 text-white  p-2 bg-gray cursor-pointer rounded' />
                <SearchCircleIcon className='h-10 text-gray-400  p-2 active:bg-gray cursor-pointer rounded active:text-white' />
                <CogIcon className='h-10 text-gray-400  p-2 active:bg-gray cursor-pointer rounded active:text-white' />
                <PuzzleIcon className='h-10 text-gray-400  p-2 active:bg-gray cursor-pointer rounded active:text-white' />
                <CloudIcon className='h-10 text-gray-400  p-2 active:bg-gray cursor-pointer rounded active:text-white' />
                <UsersIcon className='h-10 text-gray-400  p-2 active:bg-gray cursor-pointer rounded active:text-white' />
            </div>
        </aside>
    )
}

export default SideBar
