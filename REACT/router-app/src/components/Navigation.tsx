import { Routes } from "react-router";
import { BrowserRouter, Link, Route } from "react-router-dom";
import { AddData } from "../view/Add";
import { Home } from "../view/Home";

export const Navigation = () => {
  return (
    <BrowserRouter>
      <header className="App-header">
        <Link to="/home">Home</Link>
        <Link to="/add">Add</Link>
      </header>

      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/add" element={<AddData />} />
        <Route path="*" element={<p>Can't find this page</p>} />
      </Routes>
    </BrowserRouter>
  );
};
