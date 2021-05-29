import React, { Key, useEffect, useState } from 'react'
import { ChevronRightIcon, ChevronDownIcon } from '@heroicons/react/solid'
import { imageBaseURL } from '../../utils/constants'
import commands from '../../utils/commands'
import { AccordionProps } from './accordion.model'



const Accordion = ({ folderName, files }: AccordionProps) => {
    const [isOpen, setIsOpen] = useState<boolean>(false)

    // useEffect(() => {

    // }, [isOpen])

    return (
        <div className='space-x-2'>
            <div onClick={() => setIsOpen(prev => !prev)} className={`flex space-x-1 items-center cursor-pointer  none ${isOpen && 'bg-gray hover:bg-transparent border-b border-t '} py-1 px-2`}>
                {!isOpen ? <ChevronRightIcon className='h-4 text-gray-light' /> : <ChevronDownIcon className='h-4 text-gray-light' />}

                <img className='h-5' src={`${imageBaseURL}folder-public.svg`} alt="" />
                <p className='text-xs truncate '>{folderName}</p>
            </div>
            <div>
                {
                    files?.map((file, i) => {
                        return (
                            <div key={i} className={`space-x-2 items-center cursor-pointer pl-6 p-1 transition-all duration-1000 ease-in-out ${!isOpen ? 'hidden' : 'flex'}`}>
                                <img className='h-5' src={`${imageBaseURL}${commands[file.extension]}.svg`} alt="" />
                                <p className='text-xs truncate text-gray-light '>{file.name}</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Accordion
