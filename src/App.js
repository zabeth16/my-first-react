import { mainCSS } from "./css/index.css";
import { listPageCSS } from "./css/listPage.css";
import { BrowserRouter as Router , Route, NavLink } from "react-router-dom";
import { Routes } from "react-router-dom";
import { createRoot } from "react-dom/client";
import React from "react";
import  HomePage  from "./pages/HomePage.jsx"
import  ListPage  from "./pages/ListPage.jsx"

function App(){
    return(
        <div>
        <Router>
         <Routes>
            <Route path="/"  element={<HomePage />} />
            <Route path="/list" element={<ListPage />} />
         </Routes>
        </Router>
        </div>
    )
}

export default App