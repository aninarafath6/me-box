import React, { useState } from 'react'
// import { ChevronRightIcon, ChevronDownIcon } from '@heroicons/react/solid'
import { folderIconBaseUrl, iconsBaseURL } from '../utils/constants'
import { commands } from '../utils/commands'
import { AccordionProps } from '../interfaces/accordion.model'



const Accordion = ({ folderName, files }: AccordionProps) => {
    const [isOpen, setIsOpen] = useState<boolean>(false)


    return (
        <div className='space-y-1'>
            <div onClick={() => setIsOpen(prev => !prev)} className={`flex  items-center justify-between cursor-pointer group ${isOpen && 'bg-gray hover:bg-transparent border-b border-t '} py-1 px-2`}>
                {/* //left section */}
                <div className={`flex space-x-2 items-center cursor-pointer`}>
                    {/* folder icon */}
                    <img className='h-4' src={`${isOpen ? `${folderIconBaseUrl}folderOpen.6913563c.svg` : `${folderIconBaseUrl}folder.31ca7ee0.svg`}`} alt="" />
                    {/* folder name */}
                    <p className='text-xs truncate '>{folderName}</p>
                </div>

                {/* //right section */}
                <div className='space-x-1 hidden group-hover:flex'>
                    <svg className='cursor-pointer fill-current text-[#8a8a8a]  hover:text-white transition-all duration-300 ease-in-out' width="16" height="16" fill="none" viewBox="0 0 16 16"><path fillRule="evenodd" d="M8.284 2.5H4.5A.5.5 0 004 3v10a.5.5 0 00.5.5h7a.5.5 0 00.5-.5V6.08L8.284 2.5zM8 3l3.5 3.5H8V3z" clipRule="evenodd"></path></svg>
                    <svg className='cursor-pointer fill-current text-[#8a8a8a] hover:text-white transition-all duration-300 ease-in-out' width="16" height="16" fill="none" viewBox="0 0 16 16"><path d="M6.5 3.5H3a.5.5 0 00-.5.5v8.5a.5.5 0 00.5.5h10a.5.5 0 00.5-.5V5.167a.5.5 0 00-.5-.5H8l-1.167-1.04A.5.5 0 006.5 3.5z"></path></svg>
                </div>
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
