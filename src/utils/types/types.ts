export interface Filter {
    name: string;
    photo: ImageURISource;
}

interface ImageURISource {
    uri?: string; 
    bundle?: string; 
    method?: string; 
    headers?: { [key: string]: string }; 
    body?: string; 
    width?: number; 
    height?: number; 
    scale?: number; 
}