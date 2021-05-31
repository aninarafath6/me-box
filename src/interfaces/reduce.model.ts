import { FolderType } from "./dtaFileType.mode";
import { FileType } from "./file.model";

export interface FileExplorerReducer {
  type: string;
  payload: {
    id: number;
    name: string;
    files: FileType[];
    folders: FolderType[]
  };
}



