import Books from "../components/HarryPotter/Books";
import { useEffect } from "react";

export default function HarryPotterBooksPage() {
  useEffect(() => {
    document.title = "HP Books";
  }, []);

  return <Books />;
}
