import { FileType } from "./file.model";

export interface dtaFileType {
  name: string;
  files: FileType[];
  folders: FolderType[];
}

export interface FolderType {
  id: number;
  name: string;
  files: FileType[];
}
