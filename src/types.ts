export interface Categories {
    name: string;
}

export interface Data {
    category: number;
    name: string;
    photos: string[];
}

export type ApiService<Params = unknown, Response = unknown> = (params: Params) => Promise<Response>

export type CollectionType = {
    items: Data[];
    meta: {
        [key: string]: number
    };
}