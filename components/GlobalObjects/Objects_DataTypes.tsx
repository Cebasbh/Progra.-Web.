
export type Streamer = {
    id: number;
    nickname : string;
    photo : string;
    onLine : boolean;
}

export type Stream = {
    id: number;
    streamer : Streamer;
    game : Game;
    thumbnail: string;
    title: string;
    viewers : number;
};

export type Message = {
    texto : string
    hora : string
}

export type Tag = {
    id : number;
    name : string;
}

export type Game = {
    name : string;
    photo : string;
    tags : Tag[];
}

