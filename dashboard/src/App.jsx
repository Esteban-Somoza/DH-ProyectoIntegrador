import { useState, useContext } from 'react'
import { Navigate } from 'react-router-dom'

import Home from "./pages/Home";
import PublicLogin from "./pages/PublicLogin";
import ProductsOverview from "./pages/ProductsOverview";
import Error from "./pages/Error";

import UserPanel from "./pages/UserPanel";
import ProductDetail from "./pages/ProductDetail"

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { userContext } from "./context/UserContext";
import "./App.css"

function App() {
  const { user, setUser } = useContext(userContext)

  return (
    <div className="App">
      <Routes>
        <Route exact path="/login" element={<PublicLogin />} />
        <Route exact path="/" element={<Home />} />
        <Route path="/usuarios" element={<UserPanel />} />
        <Route path="/usuarios/:id" element={<UserPanel />} />
        <Route exact path="/products/:category" element={<ProductsOverview />} />
        <Route exact path="/products/detail/:id" element={<ProductDetail />} />
        <Route path="*" element={<Error />}></Route>
      </Routes>

    </div >
  )
}

export default App
