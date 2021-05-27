import React, { FC, MouseEvent, MutableRefObject, useRef, useState } from 'react'

// interface of mousemove event
interface mouseMoveEvent {
    clientX: number;
}

const Folders: FC = () => {
    const [width, setWidth] = useState<number>(200);

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



    return (
        <aside style={{ width: `${width}px`, minWidth: '200px' }} className='relative   border-r  h-screen  flex flex-col items-center p-2 py-4' ref={divRef} >
            <div className='absolute top-0 bottom-0 right-0 bg-red-500 w-1 cursor-move opacity-0 ' onMouseDown={mouseDownHandler} />
        </aside>
    )
}

export default Folders
