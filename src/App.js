import React from "react";
import { Route, Routes } from "react-router-dom";
import FormPage from "./pages/FormPage";
import FormTable from "./pages/FormTable";
import { ToastContainer } from "react-toastify";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<FormPage />} />
        <Route path="/table" element={<FormTable />} />
      </Routes>
    </>
  );
};

export default App;
