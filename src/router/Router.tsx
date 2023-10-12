import { BrowserRouter, Route, Routes } from "react-router-dom";

import Layout from "./Layout";
import Main from "../pages/Main";
import CardList from "../pages/CardList";
import CardInfo from "../pages/CardInfo";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Main />} />
          <Route path="/pokemonlist" element={<CardList />} />
          <Route path="/pokemoninfo/:value" element={<CardInfo />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
