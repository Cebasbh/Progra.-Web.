import { useEffect, useState } from "react";
import AppRouter from "./routes/AppRouter";
import "./App.css";
import type { Stream } from "./components/GlobalObjects/Objects_DataTypes";
import type { Tag } from "./components/GlobalObjects/Objects_DataTypes";
import type { Game } from "./components/GlobalObjects/Objects_DataTypes";
const App = () => {
  const [streams, setStreams] = useState<Stream[]>([]);
  const [tags, setTags] = useState<Tag[]>([]);
  const [games, setGames] = useState<Game[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response1 = await fetch("/data/streams.json");
        const data1 = await response1.json();
        setStreams(data1);
        const response2 = await fetch("/data/tags.json");
        const data2 = await response2.json();
        setTags(data2);
        const response3 = await fetch("/data/games.json");
        const data3 = await response3.json();
        setGames(data3);
        console.log("Streams loaded:", data1);
        console.log("Tags loaded:", data2);
        console.log("Games loaded:", data3);
      } catch (error) {
        console.error("❌ Error al leer JSON:", error);
      }
    };
    fetchData();
  }, []);

  return <AppRouter streams={streams} tags={tags} games={games}/>;
};

export default App;