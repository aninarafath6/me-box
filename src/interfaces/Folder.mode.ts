import { FileType } from "./file.model";


export interface FolderProps {
  className:string;
  folderName: string;
  files: FileType[];
}