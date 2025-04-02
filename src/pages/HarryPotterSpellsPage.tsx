import { useEffect } from "react";
import Spells from "../components/HarryPotter/Spells";

export default function HarryPotterSpellsPage() {
  useEffect(() => {
    document.title = "HP Spells";
  });

  return <Spells />;
}
