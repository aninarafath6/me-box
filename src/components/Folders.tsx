import React, { FC, MouseEvent, MutableRefObject, useRef, useState } from 'react'
import Accordion from './Accordion';
import { DataObjectType } from '../interfaces/folders.model'
// interface of mousemove event
interface mouseMoveEvent {
    clientX: number;
}

const Folders: FC = () => {
    const [width, setWidth] = useState<number>(200);
    const [activeFolder, setActiveFolder] = useState<string>('')
    const active = {
        setActiveFolder,
        activeFolder,
    }
    //refs 
    const divRef = useRef() as MutableRefObject<HTMLDivElement>;

    // mouse down handiler
    const mouseDownHandler = (e: MouseEvent<HTMLDivElement>) => {
        //mouse move listener
        window.addEventListener("mousemove", mouseMove);
        //mouse up listener
        window.addEventListener("mouseup", mouseUp);

        //clint x
        let prevX: number = e.clientX;


        // mouse move handler
        function mouseMove(e: mouseMoveEvent): void {
            //rect
            const rect = divRef.current.getBoundingClientRect();
            //resized width
            const resized: number = rect.width - (prevX - e.clientX);
            //checking resized width is grater than 290
            if (resized! <= 290) {
                //setting resized width on width state
                setWidth(resized);
                prevX = e.clientX;
            }
        }
        // mouse up handler
        function mouseUp(e: any): void {
            // removing mouse move listener
            window.removeEventListener("mousemove", mouseMove);
        }


    }
    let dataObject: DataObjectType = {
        "name": "My App",
        "file": ["index.html","index.js"],
        "folders": [
            {
                "name": "public", "files":

                    [
                        { name: "main.css", extension: 'css' },
                        { name: 'app.js', extension: 'js' },
                        { name: 'index.html', extension: 'html' },
                        { name: 'index.json', extension: 'json' }

                        

                    ]
            },
        ]
    }
    // const onOpenHandler =(folderName:string):void =>{
    //     setActiveFolder(folderName)
    // }

    return (
        <aside style={{ width: `${width}px`, minWidth: '200px' }} className='relative   border-r  h-screen  flex flex-col ' ref={divRef} >
            <div className='absolute top-0 bottom-0 right-0 bg-gray w-1 cursor-move opacity-0 active:opacity-100 transform transition-all duration-100 ease-in-out ' onMouseDown={mouseDownHandler} />
            <div className='border-b p-3 py-2'>
                <p className='text-xs font-bold'>{dataObject.name}</p>
            </div>
            <div className=" mt-2">
                {
                    dataObject.folders.map((folder, i) => {
                        // console.log(folder);
                        return (
                            <Accordion key={i} active={active} folderName={folder.name} files={folder.files} />
                        )
                    })
                }
            </div>
        </aside>
    )
}

export default Folders