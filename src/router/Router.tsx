import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Main from "../pages/Main";
import CardList from "../pages/CardList";
import Modal from "../components/common/modal/Modal";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Main />} />
          <Route path="/pokemonlist" element={<CardList />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
