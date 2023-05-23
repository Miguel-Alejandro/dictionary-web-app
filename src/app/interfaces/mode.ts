export interface ModeGet {
    getMode(): Promise< 'light' | 'dark'>;
}

export interface ModeChange{
    changeMode(mode: 'light' | 'dark'): Promise<void>;
}