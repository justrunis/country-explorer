import { useEffect } from "react";
import WordSearch from "../components/Dictionary/WordSearch";

export default function DictionaryPage() {
  useEffect(() => {
    document.title = "Dictionary";
  }, []);

  return <WordSearch />;
}
