import { useEffect } from "react";
import Characters from "../components/HarryPotterCharacters/Characters";

export default function HarryPotterCharactersPage() {
  useEffect(() => {
    document.title = "Harry Potter Characters";
  });

  return <Characters />;
}
