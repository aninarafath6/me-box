export interface AccordionProps {
    folderName: string;
    files: FileType[];
    active: {
        activeFolder: string;
        setActiveFolder: React.Dispatch<React.SetStateAction<any>>;
    };
}

export interface FileType {
    name: string;
    extension: 'js' | 'css' | 'html' | 'json';
}