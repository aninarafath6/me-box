import React, {
  FC,
  MouseEvent,
  MutableRefObject,
  useRef,
  useState,
} from "react";
import Accordion from "./Accordion";
import { DataObjectType } from "../interfaces/folders.model";
import { iconsBaseURL } from "../utils/constants";
import { commands } from "../utils/commands";
// interface of mousemove event
interface mouseMoveEvent {
  clientX: number;
}

const Folders: FC = () => {
  const [width, setWidth] = useState<number>(200);
  const [activeFolder, setActiveFolder] = useState<string>("");
  const active = {
    setActiveFolder,
    activeFolder,
  };
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
  };
  let dataObject: DataObjectType = {
    name: "My App",
    files: [
      { name: ".gitignore", extension: "git" },
      { name: "README.md", extension: "md" },
      { name: "package.json", extension: "nodejs" },
      { name: "package.lock.json", extension: "nodejs" },
    ],
    folders: [
      {
        name: "public",
        files: [
          { name: "index.html", extension: "html" },
          { name: "logo.svg", extension: "svg" },
          { name: "robots.txt", extension: "txt" },

        ],
      },
      {
        name: "src",
        files: [
          { name: "App.js", extension: "js" },
          { name: "App.css", extension: "css" },
          { name: "index.js", extension: "js" },
          { name: "index.css", extension: "css" },
        ],
      },
    ],
  };
  // const onOpenHandler =(folderName:string):void =>{
  //     setActiveFolder(folderName)
  // }

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
      <div className="border-b p-3 py-2">
        <p className="text-xs font-bold">{dataObject.name}</p>
      </div>
      <div className=" mt-2">
        {dataObject.folders?.map((folder, i) => {
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
        {dataObject.files?.map((file, i) => {
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
