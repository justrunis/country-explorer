import { useEffect } from "react";
import Characters from "../components/HarryPotter/Characters";

export default function HarryPotterCharactersPage() {
  useEffect(() => {
    document.title = "HP Characters";
  });

  return <Characters />;
}
