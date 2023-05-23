export interface StorageSet{
    saveItem(key: string, value:any): Promise<void>;
}

export interface StorageGet{
    getItem(key: string): Promise<any>;
}