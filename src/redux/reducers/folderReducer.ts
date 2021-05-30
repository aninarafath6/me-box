import { CreateFileAction } from "../../interfaces/action.mode";
import { dtaFileType } from "../../interfaces/dtaFileType.mode";
import { commands } from "../../utils/commands";
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
  let extensionTypes = [];
  for (const [key] of Object.entries(commands)) {
    extensionTypes.push(key);
  }

  switch (action.type) {
    case CREATE_FILE:
      // checking extension exist if extension is not exist put txt extension
      const ext = action.payload.name.split(".").pop();
      let valid = extensionTypes.filter((ex) => ex === ext);
      if (!valid[0] && valid[0] === "yarn.lock") {
        action.payload.name = action.payload.name + ".txt";
      }

      // separating extension
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
