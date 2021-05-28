import React, { FC, useState } from 'react'
import { Resizable } from 're-resizable'
const Folders: FC = () => {
    const [width, setWidth] = useState<number>(200);





    return (
      
        <Resizable
        
        className='relative border-r max-w-sm overflow-hidden  h-screen  flex flex-col items-center p-2 py-4'
        size={{ width: width <= 200 ?200:width, height: '100v' }}
        style={{minWidth:200}}
        onResizeStop={(e, direction, ref, d) => {
                setWidth(width + d.width);
        }}
        >
           
        </Resizable>
    )
}

export default Folders
