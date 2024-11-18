import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Liked from "./components/Liked";
import { LikedListContext, ModalContext } from "./context/MovieContext";

import { useState } from "react";

function App() {
  const [activeTab, setActiveTab] = useState<boolean>(true);
  const [likedList, setLikedList] = useState<number[]>([]);
  const [activeMovieIDModal, setActiveMovieIDModal] = useState<number | null>(
    null
  );

  return (
    <>
      <Header setActiveTab={setActiveTab} activeTab={activeTab} />
      <ModalContext.Provider
        value={{ activeMovieIDModal, setActiveMovieIDModal }}
      >
        <LikedListContext.Provider
          value={{ likedList: likedList, setLikedList: setLikedList }}
        >
          {activeTab ? <Home /> : <Liked />}
        </LikedListContext.Provider>
      </ModalContext.Provider>
    </>
  );
}

export default App;

// TODO: 
// * style Modal 
// * style Liked page 