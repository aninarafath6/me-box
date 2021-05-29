import React, { FC } from 'react'
import { GlobeIcon, MenuAlt2Icon } from '@heroicons/react/outline'
import { CogIcon, HeartIcon } from '@heroicons/react/solid'



const Header: FC = () => {
    return (
        <header className="border-b border sticky" >
            <div className="flex justify-between p-3 px-4">

                {/* left section */}
                <div className="flex space-x-3 items-center">
                    <MenuAlt2Icon className="h-5 text-gray-500 cursor-pointer hover:text-white duration-200 transition-all ease-in-out " />
                    <p className="text-xs cursor-pointer">CodeSandbox</p>
                </div>



                {/* mid section */}
                <div className='flex space-x-3'>
                    <div className='flex items-center space-x-2'>
                        <p className='text-sm'>React</p>
                        <GlobeIcon className='h-4' />
                    </div>
                    <div className="bg-[#343434] px-2 py-1 rounded cursor-pointer" ><p className="text-xs">Templates</p></div>
                </div>


                {/* right section  */}
                <div className="flex space-x-3 items-center">
                    <CogIcon className='h-5 text-gray-400 mr-3  cursor-pointer transition-all duration-500 ease-in-out hover:text-white' />
                    <div className='flex items-center space-x-2'>
                        <HeartIcon className='h-5 text-white' />
                        <p className="text-xs">1672</p>
                    </div>
                    <div className="bg-gray p-1 rounded flex px-2 py-1 space-x-1 cursor-pointer hover:bg-gray-light" >
                        <img src="/icons/embed.svg" className='text-white' alt="" />
                        <p className="text-xs">Embed</p>
                    </div>
                    <div className="bg-gray p-1 rounded flex px-2 py-1 space-x-1 cursor-pointer hover:bg-gray-light" >
                        <img src="/icons/fork.svg" className='text-white' alt="" />
                        <p className="text-xs">Fork</p>
                    </div>
                    <div className="bg-gray p-1 rounded flex px-2 py-1 space-x-1 cursor-pointer hover:bg-gray-light" >
                        <p className="text-xs">Create Sandbox</p>
                    </div>
                    <div className="bg-blue-600 p-1 rounded flex px-2 py-1 space-x-1 cursor-pointer hover:bg-blue-500" >
                        <p className="text-xs">Sign in</p>
                    </div>
                </div>
            </div>

        </header>
    )
}

export default Header
