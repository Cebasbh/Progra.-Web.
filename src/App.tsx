import { useEffect, useState } from "react";
import AppRouter from "./routes/AppRouter";
import "./App.css";
import type { Stream } from "./components/GlobalObjects/Objects_DataTypes";

const App = () => {
  const [streams, setStreams] = useState<Stream[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/data/streams.json");
        const data = await response.json();
        setStreams(data);
        console.log("✅ Streams cargados:", data);
      } catch (error) {
        console.error("❌ Error al leer JSON:", error);
      }
    };

    fetchData();
  }, []);

  return <AppRouter streams={streams} />;
};

export default App;