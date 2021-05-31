import { FolderType } from "../../interfaces/dtaFileType.mode"
import { CREATE_FOLDER } from "../types/folderTypes"


export const createFolderAction = (payload:Partial<FolderType>)=>{
    return{
        type:CREATE_FOLDER,
        payload:payload
    }
}