// create file interface
export interface CreateFileAction {
  id: number;
  name: string;
  extension: any;
}

// delete file interface
export interface DeleteFileAction {
  id: number;
}

// edit file interface
export interface EditFileAction {
    id:number;
    name:string
}

