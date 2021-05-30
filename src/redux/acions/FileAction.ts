import { FileType } from '../../interfaces/file.model'
import {CREATE_FILE} from '../types/fileTypes'

export const createFile=(payload:Required<FileType>)=>{
return{
    type:CREATE_FILE,
    payload:payload
}
}