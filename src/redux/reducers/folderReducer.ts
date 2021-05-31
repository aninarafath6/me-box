import { CreateFileAction } from "../../interfaces/reduce.model";
import { dtaFileType } from "../../interfaces/dtaFileType.mode";
import { commands } from "../../utils/commands";
import { CREATE_FILE, DELETE_FILE, EDIT_FILE } from "../types/fileTypes";

// initial state
const initialState: dtaFileType = {
  name: "Static Box",
  files: [],
  folders: [],
};

// folder reducer
const folderReducer = (state = initialState, action: CreateFileAction) => {
  let extensionTypes = [];
  // global variables
  let extension, valid;

  // taking all extensions
  for (const [key] of Object.entries(commands)) {
    extensionTypes.push(key);
  }

  switch (action.type) {
    // create file
    case CREATE_FILE:
      if (!action.payload.name) {
        action.payload.name = "hello.txt";
      }

      // checking extension exist if extension is not exist put txt extension
      var ext = action.payload.name.split(".").pop();
      valid = extensionTypes.filter((ex) => ex === ext);
      if (!valid[0] && action.payload.name !== "yarn.lock") {
        action.payload.name = action.payload.name + ".txt";
      }

      // separating extension with name
      extension =
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
          {
            id: action.payload.id,
            name: action.payload.name,
            extension: extension,
          },
        ],
      };

    // delete file
    case DELETE_FILE:
      // taking index of file
      var deleteFileIndex = state.files.findIndex(
        (file) => file.id === action.payload.id
      );
      // new file array
      var newFiles = [...state.files];
      // chekiang index grater than 0
      if (deleteFileIndex >= 0) {
        // removing file from array
        newFiles.splice(deleteFileIndex, 1);
      } else {
        alert("file is not exist");
      }
      return {
        ...state,
        files: newFiles,
      };

    case EDIT_FILE:
      if (!action.payload.name) {
        action.payload.name = "hello.txt";
      }

      // checking extension exist if extension is not exist put txt extension
      var ext = action.payload.name.split(".").pop();
      valid = extensionTypes.filter((ex) => ex === ext);
      if (!valid[0] && action.payload.name !== "yarn.lock") {
        action.payload.name = action.payload.name + ".txt";
      }

      // separating extension with name
      extension =
        action.payload.name === "package.json"
          ? "nodejs"
          : action.payload.name === "package.lock.json"
          ? "nodejs"
          : action.payload.name === "yarn.lock"
          ? "yarn"
          : action.payload.name === ".gitignore"
          ? "git"
          : action.payload.name.split(".").pop();
      var EditFileIndex = state.files.findIndex(
        (file) => action.payload.id === file.id
      );
      if (EditFileIndex >= 0) {
        // new file array
        var newEditingFile = [...state.files];
        newEditingFile[EditFileIndex].name = action.payload.name;
        newEditingFile[EditFileIndex].extension = extension;

        return {
          ...state,
          newEditingFile,
        };
      } else {
        alert("file not found");
      }
      return {
        ...state,
      };
    default:
      return state;
  }
};
export default folderReducer;
