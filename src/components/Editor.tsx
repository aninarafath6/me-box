import React, {
    ChangeEvent,
    FC, MouseEvent, MutableRefObject, useRef, useState
} from 'react'
import {mouseMoveEvent} from '../interfaces/editor.model'
import MonacoEditor from '@monaco-editor/react'

const Editor: FC = () => {
    const [width, setWidth] = useState<number>(600);

    //refs 
    const divRef = useRef() as MutableRefObject<HTMLDivElement>;
    const editorRef = useRef<any>(null)


    // mouse down handler
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
            if (resized! <= 600) {
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


    // handle editor change 
    const onHandleEditorChange = (value:any,event:ChangeEvent)=>{
        console.log(value);
    }

    //handle editor did MouseEvent
    const onHandleEditorDidMount =(editor:object, monaco:object)=>{
        editorRef.current = editor

    }
    

    return (
        <main style={{ width: `${width}px`, minWidth: '200px' }} className='relative   border-r  h-screen  flex flex-col items-center pr-1' ref={divRef} >
            <div className='absolute top-0 bottom-0 right-0 bg-gray w-1 cursor-move opacity-0 active:opacity-100 transform transition-all duration-100 ease-in-out' onMouseDown={mouseDownHandler} />
              
              <MonacoEditor
                    className='h-full w-full bg-red-100'
                    height="100%"
                    width='100%'
                    theme='vs-dark'
                    defaultLanguage="javascript"
                    defaultValue="// some comment"
                    onChange={onHandleEditorChange}
                    onMount={onHandleEditorDidMount}                
                />
        </main>
    )
}

export default Editor