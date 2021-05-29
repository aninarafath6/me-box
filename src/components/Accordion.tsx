import React, { useState } from 'react'
// import { ChevronRightIcon, ChevronDownIcon } from '@heroicons/react/solid'
import { folderIconBaseUrl, iconsBaseURL } from '../utils/constants'
import {commands} from '../utils/commands'
import { AccordionProps } from '../interfaces/accordion.model'



const Accordion = ({ folderName, files }: AccordionProps) => {
    const [isOpen, setIsOpen] = useState<boolean>(false)

    // useEffect(() => {

    // }, [isOpen])

    return (
        <div className='space-x-3'>
            <div onClick={() => setIsOpen(prev => !prev)} className={`flex space-x-2 items-center cursor-pointer  none ${isOpen && 'bg-gray hover:bg-transparent border-b border-t '} py-1 px-2`}>
                {/* {!isOpen ? <ChevronRightIcon className='h-4 text-gray-light' /> : <ChevronDownIcon className='h-4 text-gray-light' />} */}

                <img className='h-4' src={`${isOpen?`${folderIconBaseUrl}folderOpen.6913563c.svg`:`${folderIconBaseUrl}folder.31ca7ee0.svg`}`} alt="" />
                <p className='text-xs truncate '>{folderName}</p>
            </div>
            <div>
                {
                    files?.map((file, i) => {
                        return (
                            <div key={i} className={`space-x-2 items-center cursor-pointer active:bg-gray ${!isOpen ? 'hidden' : 'flex'}`}>
                                <div className="pl-6 p-1 space-x-2 items-center cursor-pointer flex">
                                <img className='h-4' src={`${iconsBaseURL}${commands[file.extension]}.svg`} alt="" />
                                <p className='text-xs truncate text-gray-light '>{file.name}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Accordion
