import { useEffect, useState } from "react";
import AppRouter from "./routes/AppRouter";
import "./App.css";
import type { Stream } from "./GlobalObjects/Objects_DataTypes";
import type { GameTag } from "./GlobalObjects/Objects_DataTypes";
import type { Game } from "./GlobalObjects/Objects_DataTypes";
import type { User } from "./GlobalObjects/Objects_DataTypes";
import type { Pack } from "./GlobalObjects/Objects_DataTypes";
import type { Message } from "./GlobalObjects/Objects_DataTypes";
import type { Level } from "./GlobalObjects/Objects_DataTypes";
import type { Medal } from "./GlobalObjects/Objects_DataTypes";

const App = () => {
const [user, setUser] = useState<User | null>(null);
const [streams, setStreams] = useState<Stream[]>([]);
const [tags, setTags] = useState<GameTag[]>([]);
const [games, setGames] = useState<Game[]>([]);
const [following, setFollowing] = useState<User[]>([]);
const [levels, setLevels] = useState<Level[]>([]);
const [medals, setMedals] = useState<Medal[]>([]);

const [packs, setPacks] = useState <Pack[]>([]);
const [users, setUsers] = useState <User[]>([]);

//Para guardar el usuario
const USER_STORAGE_KEY = "streaming_user";

const FollowFunction = (user : User) =>{
    for (let i = 0; i < following.length; i++) {
        if (following[i].id == user.id){
            const newfollowing = [...following]
            newfollowing.splice(i, 1) 
            setFollowing(newfollowing)
            return
        }   
    }
    setFollowing([...following, user])
}

const ChatFunction = (message: Message, stream: Stream) => {
    for (let i = 0; i < streams.length; i++) {
        if (streams[i].id == stream.id) {
            const copy = [...streams];
            copy[i] = { ...copy[i], messagelist: [...copy[i].messagelist, message] };
            setStreams(copy);
            
            for (let j = 0; j < users.length; j++) {
                if (users[j].id == message.user.id) {
                    const copyusers = [...users];
                    const currentMessagessent = [...copyusers[j].messagessent];
                    const streamerId = stream.user.id;

                    let streamerIndex = -1;
                    for (let k = 0; k < currentMessagessent.length; k++) {
                        if (currentMessagessent[k][1].id === streamerId) {
                            streamerIndex = k;
                            break;
                        }
                    }
                    
                    if (streamerIndex !== -1) {
                        const newpoints = currentMessagessent[streamerId][0] + 1
                        currentMessagessent[streamerId] = [
                            newpoints,
                            currentMessagessent[streamerId][1]
                        ];
                    } else {
                        currentMessagessent[streamerId] = [1, stream.user]
                    }
                    copyusers[j] = { ...copyusers[j], messagessent: currentMessagessent };
                    setUsers(copyusers);
                    

                    ReloadUser();
                    return;
                }
            }
        }   
    }
};
const ReloadUser = () => {
    for (const reloaded of users) {
        if (reloaded.id === user?.id) {
            setUser(reloaded);
            localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(reloaded));
            return 1;
        }
    }
};
const PayingFunction = (user : User | null, bought : number) => {
    if (!user){
        return
    }
    setUsers(prevUsers => prevUsers.map((u : User) => (u.id === user?.id? { ...u, coins: u.coins + bought } : u)))

    setUser(prevUser => prevUser ? { ...prevUser, coins: prevUser.coins + bought } : null);
}
//TODO: Si alguien está registrado no aparezca botón en about us
const LogInFunction = (email : string, pass : string) => {
    if (email == ""  || pass == ""){
            throw new Error("Por favor, rellena todos los campos");
    }
    for (const user of users) {
        if (email == user.email && pass == user.password){
            localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(user));
            return 1;
        }
    }
    throw new Error("Usuario o contraseña incorrectos");
}

const LogOutFunction = () => {
    localStorage.removeItem(USER_STORAGE_KEY);
}

const SignInFunction = (name : string, email : string, pass : string) => {
    if (name == "" || email == "" || pass == ""){
        throw new Error("Por favor, rellena todos los campos");
    }
    if (pass.length < 6){
        throw new Error("La contraseña debe tener como mínimo 6 caracteres");
    }
    for (const user of users) {
        if (email == user.email){
            throw new Error("Email ya en uso");
        }
    }
    const newuser = {
        "id": users.length,
        "name": name,
        "email": email,
        "password": pass,
        "coins": 0,
        "pfp" : "https://static-cdn.jtvnw.net/user-default-pictures-uv/de130ab0-def7-11e9-b668-784f43822e80-profile_image-70x70.png",
        "online" : false,
        "bio" : "",
        "followed" : [],
        "followers" : [],
        "friends" : [],
        "pointsrecieved" : [],
        "messagessent" : [],
        "medalsrecieved" : [],
        "streaminghours" : 0,
        "streamerlevel" : {
            "id": 1,
            "level": "Astronauta Novato",
            "min_followers": 0,
            "max_followers": 100,
            "min_hours": 0,
            "max_hours": 50
        },
        "medalsforviewers" : [],
        "clips" : [],
        "xlink": "",
        "youtubelink": "",
        "instagramlink": "",
        "tiktoklink": "",
        "discordlink": ""
    }
    setUsers([...users, newuser])
}

const GetUser = () => {
    const userJson = localStorage.getItem(USER_STORAGE_KEY);
    if (!userJson) {
        return null;
    }
    try {
        return JSON.parse(userJson) as User;
    } 
    catch (error) {
        console.error('Error parsing user data:', error);
        localStorage.removeItem(USER_STORAGE_KEY);
        return null;
    }
};
useEffect(() => {
    const fetchData = async () => {
        try {
            const posibleuser = GetUser();
            setUser(posibleuser);
            const response1 = await fetch("./data/streams.json");
            const data1 = await response1.json();
            setStreams(data1);
            const response2 = await fetch("./data/tags.json");
            const data2 = await response2.json();
            setTags(data2);
            const response3 = await fetch("./data/games.json");
            const data3 = await response3.json();
            setGames(data3);
            const response4 = await fetch("./data/following.json");
            const data4 = await response4.json();
            setFollowing(data4);
            const response5 = await fetch("./data/packs.json");
            const data5 = await response5.json();
            setPacks(data5);
            const response6 = await fetch("./data/users.json");
            const data6 = await response6.json();
            setUsers(data6);
            const response7 = await fetch("./data/levels.json");
            const data7 = await response7.json();
            setLevels(data7);
            const response8 = await fetch("./data/medals.json");
            const data8 = await response8.json();
            setMedals(data8);
            console.log("Streams loaded:", data1);
            console.log("Tags loaded:", data2);
            console.log("Games loaded:", data3);
            console.log("Following loaded:", data4);
            console.log("Packs loaded:", data5);
            console.log("Users loaded:", data6);
            console.log("Levels loaded:", data7);
            console.log("Medals loaded:", data8);
            console.log("User loaded:", user);
        } catch (error) {
            console.error("Error al leer JSON:", error);
        }
    };
    fetchData();
}, []);

return <AppRouter streams={streams} tags={tags} games={games} following={following} packs = {packs} users = {users} user = {user} doPayment={PayingFunction} doFollowing={FollowFunction} doChatting={ChatFunction} doLogIn={LogInFunction} doSignIn={SignInFunction} doLogOut={LogOutFunction} GetUser={GetUser}/>;
};

export default App;