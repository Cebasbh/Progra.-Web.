import { useEffect, useState } from "react";
import AppRouter from "./routes/AppRouter";
import "./App.css";
import type { Stream } from "./components/GlobalObjects/Objects_DataTypes";
import type { Tag } from "./components/GlobalObjects/Objects_DataTypes";
import type { Game } from "./components/GlobalObjects/Objects_DataTypes";
import type { Streamer } from "./components/GlobalObjects/Objects_DataTypes";
import type { Pack } from "./components/GlobalObjects/Objects_DataTypes";
import type { User } from "./components/GlobalObjects/Objects_DataTypes";
import type { UserRole } from "./components/GlobalObjects/Objects_DataTypes";

const App = () => {
const [user, setUser] = useState<User | null>(null);
const [streams, setStreams] = useState<Stream[]>([]);
const [tags, setTags] = useState<Tag[]>([]);
const [games, setGames] = useState<Game[]>([]);
const [following, setFollowing] = useState<Streamer[]>([]);
const [packs, setPacks] = useState <Pack[]>([]);
const [users, setUsers] = useState <User[]>([]);

//Para guardar el usuario
const USER_STORAGE_KEY = "streaming_user";
const COUNTER = "counter"
const FollowFunction = (streamer : Streamer) =>{
    for (let i = 0; i < following.length; i++) {
        if (following[i].id == streamer.id){
            const newfollowing = [...following]
            newfollowing.splice(i, 1) 
            setFollowing(newfollowing)
            console.log(`Streamer ${streamer.nickname} eliminado`)
            return
        }   
    }
    setFollowing([...following, streamer])
    console.log(`Streamer ${streamer.nickname} agregado`)
    console.log(following)
}

const PayingFunction = (user : User | null, bought : number | undefined) => {
    setUsers(prevUsers => prevUsers.map((u : User) => (u.id === user?.id? { ...u, coins: u.coins + bought } : u)))
}

const LogInFunction = (email : string, pass : string) => {
    for (const user of users) {
        if (email == user.email && pass == user.password){
            localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(user));
			window.location.reload()
            //TODO: Poner errores en base a cosas normales
        }   
    }
    if (email == "" || pass == ""){
        throw new Error('Email y contraseña son requeridos');
    }
}

const LogOutFunction = () => {
    localStorage.removeItem(USER_STORAGE_KEY);
}

const SignInFunction = (name : string, email : string, pass : string) => {
    for (const user of users) {
        if (email == user.email){
            throw new Error("Email ya en uso");
        }
    }
    if (name == "" || email == "" || pass == ""){
        throw new Error("Porfavor, rellena todos los campos");
    }
    else{
        const role: UserRole = "viewer";
        const newuser = {
            "id": users.length,
            "name": name,
            "email": email,
            "password": pass,
            "role": role,
            "coins": 0
        }
        setUsers([...users, newuser])
        console.log(`User ${name} agregado`)
        console.log(users)
    }
}

const GetUser = () => {
    const stored = localStorage.getItem(COUNTER);
    const counter = stored != null ? Number(stored) + 1 : 1;
    console.log(`Iteración ${counter}`)
    localStorage.setItem(COUNTER, JSON.stringify(counter));

    const userJson = localStorage.getItem(USER_STORAGE_KEY);
    console.log(userJson);
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
            const response1 = await fetch("/data/streams.json");
            const data1 = await response1.json();
            setStreams(data1);
            const response2 = await fetch("/data/tags.json");
            const data2 = await response2.json();
            setTags(data2);
            const response3 = await fetch("/data/games.json");
            const data3 = await response3.json();
            setGames(data3);
            const response4 = await fetch("/data/following.json");
            const data4 = await response4.json();
            setFollowing(data4);
            const response5 = await fetch("/data/packs.json");
            const data5 = await response5.json();
            setPacks(data5);
            const response6 = await fetch("/data/users.json");
            const data6 = await response6.json();
            setUsers(data6);
            console.log("Streams loaded:", data1);
            console.log("Tags loaded:", data2);
            console.log("Games loaded:", data3);
            console.log("Following loaded:", data4);
            console.log("Packs loaded:", data5);
            console.log("Users loaded:", data6);
            console.log("User loaded:", user);
        } catch (error) {
            console.error("Error al leer JSON:", error);
        }
    };
    fetchData();
}, []);

return <AppRouter streams={streams} tags={tags} games={games} following={following} packs = {packs} users = {users} user = {user} doPayment={PayingFunction} doFollowing={FollowFunction} doLogIn={LogInFunction} doSignIn={SignInFunction} doLogOut={LogOutFunction} GetUser={GetUser}/>;
};

export default App;