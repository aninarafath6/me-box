import { CreateFileAction } from "../../interfaces/action.mode";
import { dtaFileType } from "../../interfaces/dtaFileType.mode";
import { CREATE_FILE } from "../types/fileTypes";
const initialState: dtaFileType = {
  name: "Static Box",
  files: [],
  folders: [],
};

// {
//   type: 'CREATE_FILE',
//   payload:{
//   name:'anin.js',
//   extension:'js'
//   }
//   }

const folderReducer = (state = initialState, action: CreateFileAction) => {
  switch (action.type) {
    case CREATE_FILE:
      const extension =
        action.payload.name === "package.json"
          ? "nodejs"
          : action.payload.name === "package.lock.json"
          ? "nodejs"
          : action.payload.name === "yarn.lock"
          ? "yarn"
          : action.payload.name === ".gitignore"
          ? "git"
          : action.payload.name.split(".").pop();

      return {
        ...state,
        files: [
          ...state.files,
          { name: action.payload.name, extension: extension },
        ],
      };
    default:
      return state;
  }
};
export default folderReducer;
