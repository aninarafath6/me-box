import {
  DeleteFileAction,
  CreateFileAction,
  EditFileAction,
} from "../../interfaces/action.mode";
import { CREATE_FILE, DELETE_FILE, EDIT_FILE } from "../types/fileTypes";

//create file
export const createFileAction = (payload: Required<CreateFileAction>) => {
  return {
    type: CREATE_FILE,
    payload: payload,
  };
};

//delete file
export const deleteFileAction = (payload: Required<DeleteFileAction>) => {
  return {
    type: DELETE_FILE,
    payload: payload,
  };
};

//editFile
export const editFileAction = (payload: Required<EditFileAction>) => {
  return {
    type: EDIT_FILE,
    payload: payload,
  };
};
