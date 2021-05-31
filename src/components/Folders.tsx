import React, {
  ChangeEvent,
  FC,
  KeyboardEvent,
  MouseEvent,
  MutableRefObject,
  useEffect,
  useRef,
  useState,
} from "react";

import { iconsBaseURL } from "../utils/constants";
import { commands } from "../utils/commands";
import { useDispatch, useSelector } from "react-redux";
import { createFileAction } from "../redux/acions/FileAction";
import Folder from "./Folder";
import File from "./File";
import tippy from "tippy.js";
import "tippy.js/dist/tippy.css";
import "tippy.js/animations/scale.css";
import { FileType } from "../interfaces/file.model";
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
  const [activeNewFile, setActiveNewFile] = useState<boolean>(false);
  //extension
  const [extension, setExtension] = useState<any>("txt");
  // extension types
  const [extensionTypes, setExtensionTypes] = useState<string[]>([]);
  //new file name
  const [newFileName, setNewFileName] = useState<string>("");
  //refs
  const divRef = useRef() as MutableRefObject<HTMLDivElement>;
  // file active
  const [active, setActive] = useState<string>("");
  // is file isEditing
  const [isEditing, setIsEditing] = useState<string>('');


  // dispatches
  const dispatch = useDispatch();

  let tooltipOptions = {
    theme: "light",
    inertia: true,
    arrow: false,
    delay: 500,
  };

  useEffect(() => {
    // taking all extension from commands
    let types = [];
    for (const [key] of Object.entries(commands)) {
      types.push(key);
    }
    // setting extension
    setExtensionTypes(types);

    // tippy js for tool tip
    tippy(".new-file", {
      ...tooltipOptions,
      content: "New File",
    });
    tippy(".new-folder", {
      ...tooltipOptions,
      content: "New Folder",
    });
    tippy(".remove-file", {
      ...tooltipOptions,
      content: "Delete File ",
    });
  }, []);

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

  // on create file handler
  const onCreateFileHandler = () => {
    setActiveNewFile((prev) => !prev);
  };

  // on key up handler
  const submitHandler = (event: KeyboardEvent<HTMLInputElement>): void => {
    // event key == 13 13 key is enter 
    if (event.keyCode === 13) {
      // preventing reload
      event.preventDefault();
      // hiding active input
      setActiveNewFile(false);
      // creating new file
      dispatch(
        createFileAction({ id: Date.now(), name: newFileName, extension: extension })
      );
      // setting file name into default null
      setNewFileName("");
      // setting extension into default .txt
      setExtension("txt");
    }
  };

  // onchange of new file
  const onFileTitleChangeHandler = (
    event: ChangeEvent<HTMLInputElement>
  ): void => {
    const title = event.target.value;
    const ext = title.split(".").pop();
    setNewFileName(title);
    let valid = extensionTypes.filter((ex) => ex === ext);
    if (valid[0]) {
      setExtension(
        title === "package.json"
          ? "nodejs"
          : title === "package.lock.json"
          ? "nodejs"
          : title === "yarn.lock"
          ? "yarn"
          : title === ".gitignore"
          ? "git"
          : valid[0]
      );
    } else {
      setExtension(
        title === "package.json"
          ? "nodejs"
          : title === "package.lock.json"
          ? "nodejs"
          : title === "yarn.lock"
          ? "yarn"
          : title === ".gitignore"
          ? "git"
          : "txt"
      );
    }
  };

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
          <svg
            onClick={onCreateFileHandler}
            className=" focus:outline-none outline-none new-file cursor-pointer fill-current text-[#8a8a8a]  hover:text-white transition-all duration-300 ease-in-out"
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
            className=" focus:outline-none new-folder cursor-pointer fill-current text-[#8a8a8a] hover:text-white transition-all duration-300 ease-in-out"
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
          return (
            <Folder key={i} folderName={folder.name} files={folder.files} />
          );
        })}
        <div
          className={`space-x-2 items-center cursor-pointer bg-gray hover:bg-transparent flex ${
            !activeNewFile && "hidden"
          }`}
        >
          <div className="py-1 px-2 space-x-2 items-center cursor-pointer flex">
            <img
              className="h-4"
              src={`${iconsBaseURL}${commands[extension]}.svg`}
              alt=""
            />
            <p className="text-xs truncate text-gray-light ">
              <input
                autoFocus
                value={newFileName}
                onKeyUp={submitHandler}
                type="text"
                onChange={onFileTitleChangeHandler}
                className="bg-gray p-1 text-xs w-full border border-gray-light rounded-sm outline-none focus:outline-none "
              />
            </p>
          </div>
        </div>
        {dataFiles?.files?.map((file, i) => {
          return (
            <div onClick={() => setActive(file.name)}>
              {" "}
              <File
                setIsEditing={setIsEditing}
                className={file.name === active ? "bg-gray" : ""}
                isEditing={file.name === isEditing ?true :false}
                key={i}
                file={file}
              />
            </div>
          );
        })}
      </div>
    </aside>
  );
};

export default Folders;
