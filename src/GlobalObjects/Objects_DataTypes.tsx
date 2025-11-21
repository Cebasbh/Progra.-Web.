export type Stream = {
    id: number;
    user : User;
    game : Game;
    thumbnail: string;
    title: string;
    viewersnumber : number;
    viewers : User[];
    messagelist : Message[]
};

export type Message = {
    texto : string
    hora : string
    user : User
    inchat : User
}

export type GameTag = {
    id : number;
    name : string;
}

export type Game = {
    name : string;
    photo : string;
    spectators : number;
    followers : number;
    tags : GameTag[];
}

export type Pack = {
    id : number;
    name : string;
    value : number;
    initialprice : number;
    finalprice : number;
    discount : number;
}
export type Point = {
    id: number;
    quantity : number;
    fromStreamer : User;
}
export type Medal = {
    id: number;
    quality : string;
    fromStreamer : User;
}
export type User = {
    id: number;
    name: string;
    email: string;
    password: string;
    coins: number;
    pfp: string;
    online: boolean;
    followed : User[];
    followers : User[];
    friends : User[];
    points : Point[];
    bio : string;
    clips : string[];
    medals : Medal[];
    xlink : string;
    youtubelink : string;
    instagramlink : string;
    tiktoklink : string;
}



