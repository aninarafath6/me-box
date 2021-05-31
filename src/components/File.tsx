import { commands } from "../utils/commands";
import { iconsBaseURL } from "../utils/constants";
import { XIcon, PencilIcon } from "@heroicons/react/solid";
import { useDispatch } from "react-redux";
import { deleteFileAction, editFileAction } from "../redux/acions/FileAction";
import { FileType } from "../interfaces/file.model";
import { ChangeEvent, KeyboardEvent, useEffect, useState } from "react";
import tippy from "tippy.js";
import "tippy.js/dist/tippy.css";
import "tippy.js/animations/scale.css";

interface FileProps {
  file: FileType;
  className: string;
  isEditing: boolean;
  setIsEditing: any;
}

const Files = ({ file, className, isEditing, setIsEditing }: FileProps) => {
  // edited file name
  const [editedFileTitle, setFileTitle] = useState<string>("");
  //extension
  const [extension, setExtension] = useState<any>("txt");
  // extension types
  const [extensionTypes, setExtensionTypes] = useState<string[]>([]);
  // dispatch
  const dispatch = useDispatch();

  // file delete handler
  const onFileDeleteHandler = (id: number): void => {
    // dispatching delete action
    dispatch(deleteFileAction({ id: id }));
  };

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

  // on key up handler
  const submitHandler = (event: KeyboardEvent<HTMLInputElement>): void => {
    if (event.keyCode === 13) {
      event.preventDefault();
      setIsEditing("");
      dispatch(editFileAction({ name: editedFileTitle, id: file.id }));
    }
  };

  // on edit file handler
  const onFileEditTitleChangeHandler = (
    event: ChangeEvent<HTMLInputElement>
  ): void => {
    // title
    const title = event.target.value;
    // setting file edited title
    setFileTitle(title);
    // split extension
    const ext = title.split(".").pop();
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
  const setEditing =():void=>{
    setIsEditing(file.name)
    const ext = file.name.split(".").pop();
    let valid = extensionTypes.filter((ex) => ex === ext);
    if (valid[0]) {
      setExtension(
        file.name === "package.json"
          ? "nodejs"
          : file.name === "package.lock.json"
          ? "nodejs"
          : file.name === "yarn.lock"
          ? "yarn"
          : file.name === ".gitignore"
          ? "git"
          : valid[0]
      );
  }
}
  return (
    <div
      className={`group justify-between space-x-2 items-center cursor-pointer flex ${className}`}
    >
      <div className="py-1 px-2 space-x-2 items-center cursor-pointer flex">
        <img
          className="h-4"
          src={
            isEditing
              ? `${iconsBaseURL}${commands[extension] || "txt"}.svg`
              : `${iconsBaseURL}${commands[file.extension] || "txt"}.svg`
          }
          alt=""
        />
        {isEditing ? (
          <input
            defaultValue={file.name}
            onKeyUp={submitHandler}
            autoFocus
            type="text"
            onChange={onFileEditTitleChangeHandler}
            className="text-xs bg-gray p-1 w-full border border-gray-light rounded-sm outline-none focus:outline-none "
          />
        ) : (
          <p className="text-xs truncate text-gray-light ">{file.name}</p>
        )}
      </div>
      <div
        className={`space-x-3 hidden ${
          !isEditing && "group-hover:flex"
        }  pr-1 text-[#8a8a8a] `}
      >
        <PencilIcon
          onClick={setEditing}
          className="h-4 hover:text-white  focus:outline-none transition-all duration-300 ease-in-out"
        />
        <XIcon
          onClick={() => onFileDeleteHandler(file.id)}
          className=" remove-file h-4 hover:text-white  focus:outline-none transition-all duration-300 ease-in-out"
        />
      </div>
    </div>
  );
};

export default Files;
