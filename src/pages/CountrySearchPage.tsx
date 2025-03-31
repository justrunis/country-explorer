import CountrySearch from "../components/Countries/CountrySearch";
import { useEffect } from "react";

export default function CountrySearchPage() {
  useEffect(() => {
    document.title = "Country";
  }, []);

  return <CountrySearch />;
}
