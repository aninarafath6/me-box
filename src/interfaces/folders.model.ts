export interface DataObjectType {
  name: string;
  files: FileType[];
  folders: FolderType[];
}
interface FileType {
  name: string;
  extension:
    | "js"
    | "css"
    | "html"
    | "json"
    | "git"
    | "md"
    | "nodejs"
    | "svg"
    | "txt";
}

interface FolderType {
  name: string;
  files: FileType[];
}
