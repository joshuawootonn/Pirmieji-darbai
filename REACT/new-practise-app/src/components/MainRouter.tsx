import { Route, Routes } from "react-router";
import { BrowserRouter, Link, useLocation } from "react-router-dom";
import { VisitCount } from "./VisitCount";

//pasiklaust
export const MainRouter = (props: any) => {
  return (
    <BrowserRouter>
      <header className="App-header">
        <Link to="/">Home</Link>
        <Link to="/asdasd">Something</Link>
      </header>

      {props.children}

      <VisitCount />

      <Routes>
        <Route path="/" element={<p>Sveiki atvykę</p>} />
        <Route path="*" element={<p>Puslapis nerastas</p>} />
      </Routes>
    </BrowserRouter>
  );
};
