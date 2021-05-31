import { FileType } from "./file.model";

export interface dtaFileType {
  name: string;
  files: FileType[];
  folders: FolderType[];
}

export interface FolderType {
  name: string;
  isOpen:Required<boolean>;
  files: FileType[];
}
