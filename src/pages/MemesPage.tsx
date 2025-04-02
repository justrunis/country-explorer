import { useEffect } from "react";
import Memes from "../components/Meme/Memes";

export default function MemesPage() {
  useEffect(() => {
    document.title = "Memes";
  }, []);
  return <Memes />;
}
