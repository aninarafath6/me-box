export interface AccordionProps {
    folderName: string;
    files: FileType[];
    active: {
        activeFolder: string;
        setActiveFolder: React.Dispatch<React.SetStateAction<any>>;
    };
}

interface FileType   {
    name:string,
    extension:'js'|'css'
}