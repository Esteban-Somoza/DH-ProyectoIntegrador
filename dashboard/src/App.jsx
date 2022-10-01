import { useState , useContext } from 'react'

import Home from "./pages/Home";
import ProductsOverview from "./pages/ProductsOverview";
import Error from "./pages/Error";
import PublicLogin from "./pages/PublicLogin";
import User from "./pages/User";
import ProductDetail from "./pages/ProductDetail"

import { Routes, Route, Link } from "react-router-dom";
import { userContext } from "./context/UserContext";
 import "./App.css"

function App() {
  // const [count, setCount] = useState(0)
  const {user, userSet} = useContext(userContext)
  
  let loggedIn = user

  return (
    <div className="App">
      {/* <Link to="/">Home</Link> */}
      <Routes>
        {/* <Route exact path="/" element={<PublicLogin />}/> */}
        {/* <Route exact path="/" element={!loggedIn ? <PublicLogin /> : <Home />}/> */}
        <Route exact path="/" element={<Home />}/>
        <Route exact path="/products/:category" element={<ProductsOverview />}/>
        {/* <Route path="/" element={<PublicLogin />}></Route> */}
        <Route path="/usuarios" element={ <User/> } />
        <Route path="*" element={<Error />}></Route>
        <Route exact path="/products/detail/:id" element={<ProductDetail />}/>
      </Routes>
      
    </div>
  )
}

export default App
