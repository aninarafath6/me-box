import React, { useState } from 'react'
import { ChevronRightIcon, ChevronDownIcon } from '@heroicons/react/solid'
interface Props {
    folderName: string;
    files?:string[];
}

const Accordion = ({ folderName }: Props) => {
    const [isOpen, setIsOpen] = useState<boolean>(false)
    return (
        <div onClick={() => setIsOpen(prev => !prev)} className='flex space-x-2 items-center cursor-pointer '>
            {!isOpen ? <ChevronRightIcon className='h-4 text-gray' /> : <ChevronDownIcon className='h-4 text-gray' />}
            <img className='h-5' src="https://raw.githubusercontent.com/PKief/vscode-material-icon-theme/8da6dcd12303252a3f9371980eccd9649984c077/icons/folder-public.svg" alt="" />
            <p className='text-xs '>{folderName}</p>
        </div>
    )
}

export default Accordion
