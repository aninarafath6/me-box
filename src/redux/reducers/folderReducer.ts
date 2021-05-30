import { dtaFileType } from "../../interfaces/dtaFileType.mode";
const initialState: Partial<dtaFileType> = {
  name: "My site",
  files: [],
  folders: [],
};

const folderReducer = (state: object = initialState) => {
  return state
};
export default folderReducer;
