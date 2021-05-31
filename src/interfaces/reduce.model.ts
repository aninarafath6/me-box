import { FileType } from "./file.model";

export interface CreateFileAction {
    type:Required<string>;
    payload:{
        id:number
        name: string;
    }
}

export interface DeleteFileAction{
    type:string,
    payload:{
        id:number
    }
}

