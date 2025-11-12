import { useState } from "react";
import "./App.css";
import MainPage from "./pages/MainPage/MainPage";
import Header from "./components/Header/Header";
import MoviesPage from "./pages/MoviesPage/MoviesPage";

function App() {
  return (
    <>
      <Header />
      {/* <MainPage /> */}
      <MoviesPage />
    </>
  );
}

export default App;
