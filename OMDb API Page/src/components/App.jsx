import { useState } from "react";

import Header from "./header.jsx";
import Body from "./body.jsx";

export default function App() {
  const [movieData, setMovieData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <>
      <Header
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        setMovieData={setMovieData}
      />
      <Body movieData={movieData} />
    </>
  );
}
