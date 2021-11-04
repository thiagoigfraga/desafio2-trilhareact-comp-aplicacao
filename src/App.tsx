import { useState } from "react";

import { Content } from "./components/Content";
import { SideBar } from "./components/SideBar";



import "./styles/global.scss";



export function App() {

  const [selectedGenreId, setSelectedGenreId] = useState<number>(1);


  function handleClickButton(id: number) {
    setSelectedGenreId(id);
  }
  return (<div style={{ display: "flex", flexDirection: "row" }}>



    <SideBar sideHandleClickButton={handleClickButton} sideSelectedGenreId={selectedGenreId} />
    <Content selectedGenreId={selectedGenreId} />

  </div >)
}
