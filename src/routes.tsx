import React from "react";
import { Routes, Route } from "react-router-dom";
import { EditPage } from "./pages/EditPage";
import { CreatePage } from "./pages/CreatePage";
import { Main } from "./pages/Main";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/create" element={<CreatePage />} />
      <Route path="/edit/:id" element={<EditPage />} />
    </Routes>
  );
};
