
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

export type SlideData = {
  id: number;
  image: string;
  title: string;
  channel: string;
}

export type Message = {
    texto : string
    hora : string
}

export type Tag = {
    name : string;
}
export type Game = {
    name : string;
    photo : string;
    tags : Tag[];
}

