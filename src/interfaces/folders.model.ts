
export interface DataObjectType {
    name: string;
    file: string[];
    folders: FolderType[];
    
}
interface FileType {
    name: string;
    extension: 'js' | 'css' | 'html'|'json';
}

interface FolderType {
    name: string;
    files: FileType[]
}