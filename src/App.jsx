
// import Home from "./pages/home";
import "./index.css";
import "./App.css"

import Router from "./components/router";
import { Routes, Route } from 'react-router-dom';
import About from "./pages/about";
import Trending from "./pages/trending";
import Explore from "./pages/explore";
import Contact from "./pages/contact";
import Index from "./pages/index";
// import Footer from "./components/footer";

function App() {

  return (
    <>
    {/* <Footer/> */}
  <Routes>
        <Route path='/' element={<Router/>}>
        <Route path='/' element={<Index/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/explore' element={<Explore/>}/>
        <Route path='/trending' element={<Trending/>}/>
        <Route path='/contact' element={<Contact/>}/>
        </Route>
       </Routes>
    </>
  )
}

export default App
