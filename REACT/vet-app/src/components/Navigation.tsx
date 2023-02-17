import { Route, Routes } from "react-router";
import { BrowserRouter, Link } from "react-router-dom";

export const Navigation = () => {
  return (
    <BrowserRouter>
      <header className="App-header">
        <Link to="/pets">Pets</Link>
        <Link to="/medications">Medications</Link>
      </header>

      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/add" element={<AddData />} />
        <Route path="*" element={<p>Can't find this page</p>} />
      </Routes>
    </BrowserRouter>
  );
};
