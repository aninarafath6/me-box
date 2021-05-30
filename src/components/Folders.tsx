import React, {
  FC,
  MouseEvent,
  MutableRefObject,
  useRef,
  useState,
} from "react";

import Accordion from "./Accordion";
import { iconsBaseURL } from "../utils/constants";
import { commands } from "../utils/commands";
import { useSelector } from "react-redux";
import { FileType } from "../interfaces/accordion.model";
// interface of mousemove event
interface mouseMoveEvent {
  clientX: number;
}
//interface of root state
interface RootState {
  dataFile: {
    name: string;
    files: FileType[];
    folders: FolderType[];
  };
}

//interface of folder type
interface FolderType {
  name: string;
  files: FileType[];
}

const Folders: FC = () => {
  // files from global store
  const dataFiles = useSelector((state: Partial<RootState>) => state.dataFile);
  // width of side bar
  const [width, setWidth] = useState<number>(200);
  //state of active
  const [activeFolder, setActiveFolder] = useState<string>("");
  const active = {
    setActiveFolder,
    activeFolder,
  };
  //refs
  const divRef = useRef() as MutableRefObject<HTMLDivElement>;

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
  };


  const onCreateFileHandler =()=>{

  }

  return (
    <aside
      style={{ width: `${width}px`, minWidth: "200px" }}
      className="relative   border-r  h-screen  flex flex-col "
      ref={divRef}
    >
      <div
        className="absolute top-0 bottom-0 right-0 bg-gray w-1 cursor-move opacity-0 active:opacity-100 transform transition-all duration-100 ease-in-out "
        onMouseDown={mouseDownHandler}
      />
      <div className="group flex justify-between border-b p-3 py-2">
        {/* left section  */}
        <div className="">
          <p className="text-xs font-bold">{dataFiles?.name}</p>
        </div>
        {/* //right section */}
        <div className="space-x-1 hidden group-hover:flex">
          {/* svg of file icons */}
          <svg onClick={onCreateFileHandler}
            className="cursor-pointer fill-current text-[#8a8a8a]  hover:text-white transition-all duration-300 ease-in-out"
            width="16"
            height="16"
            fill="none"
            viewBox="0 0 16 16"
          >
            {/* svg of folder icon */}
            <path
              fillRule="evenodd"
              d="M8.284 2.5H4.5A.5.5 0 004 3v10a.5.5 0 00.5.5h7a.5.5 0 00.5-.5V6.08L8.284 2.5zM8 3l3.5 3.5H8V3z"
              clipRule="evenodd"
            ></path>
          </svg>
          <svg
            className="cursor-pointer fill-current text-[#8a8a8a] hover:text-white transition-all duration-300 ease-in-out"
            width="16"
            height="16"
            fill="none"
            viewBox="0 0 16 16"
          >
            <path d="M6.5 3.5H3a.5.5 0 00-.5.5v8.5a.5.5 0 00.5.5h10a.5.5 0 00.5-.5V5.167a.5.5 0 00-.5-.5H8l-1.167-1.04A.5.5 0 006.5 3.5z"></path>
          </svg>
        </div>
      </div>
      <div className=" mt-2">
        {dataFiles?.folders?.map((folder, i) => {
          // console.log(folder);
          return (
            <Accordion
              key={i}
              active={active}
              folderName={folder.name}
              files={folder.files}
            />
          );
        })}
        {dataFiles?.files?.map((file, i) => {
          return (
            <div
              key={i}
              className={`space-x-2 items-center cursor-pointer active:bg-gray flex`}
            >
              <div className="py-1 px-2 space-x-2 items-center cursor-pointer flex">
                <img
                  className="h-4"
                  src={`${iconsBaseURL}${commands[file.extension]}.svg`}
                  alt=""
                />
                <p className="text-xs truncate text-gray-light ">{file.name}</p>
              </div>
            </div>
          );
        })}
      </div>
    </aside>
  );
};

export default Folders;
