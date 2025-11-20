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

export type Pack = {
    id : number;
    name : string;
    value : number;
    initialprice : number;
    finalprice : number;
    discount : number;
}

export type UserRole = "viewer" | "streamer"

export type User = {
    id: number;
    name: string;
    email: string;
    password: string;
    role: UserRole;
    coins: number;
}

export type Streamer = {
    id: number;
    nickname : string;
    photo : string;
    onLine : boolean;
}

