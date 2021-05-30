import { FileType } from "./file.model";

export interface CreateFileAction {
    type:Required<string>;
    payload:{
        name: string;
    }
}