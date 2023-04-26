import Navbar from "./Components/Navbar";
import ItemListContainer from "./Components/Items/ItemListContainer";
import Footer from "./Components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetailContainer from "./Components/Items/ItemDetailContainer"
import Header from "./Components/Header";
import HomePage from "./Components/Pages/HomePage";
import Cart from "./Components/Cart/Cart"
import Login from "./Components/Pages/Login"
import Register from "./Components/Pages/Register"



export default function App() {

  return (
    
    <div >
        <BrowserRouter>

      <Navbar color={"#eea0b4"} />
      <Header/>

      <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/item/:iditem" element={<ItemDetailContainer />} />
          <Route path="/category/:idcategory" element={<ItemListContainer />} />
          <Route path="/category/Cart" element={<Cart />} />
          <Route path="/category/Login" element={<Login />} />
          <Route path="/category/Register" element={<Register />} />

                </Routes>
      <Footer />

      </BrowserRouter>
      </div>
 
   
  );
}

