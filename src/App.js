import Navbar from "./Components/Navbar";
import ItemListContainer from "./Components/ItemListContainer";
import Footer from "./Components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Carrito from "./Components/Carrito";
import ItemDetailContainer from "./Components/ItemDetailContainer"
import Anime from "./Components/Pages/Anime"
import Manga from "./Components/Pages/Manga"
import Merch from "./Components/Pages/Merch"
import Header from "./Components/Header";
import HomePage from "./Components/Pages/HomePage";


export default function App() {

  return (
    
    <div >
        <BrowserRouter>

      <Navbar color={"#eea0b4"} />
      <Header/>

      <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Anime" element={<Anime />} />
          <Route path="/Manga" element={<Manga />} />
          <Route path="/Merch" element={<Merch />} />
          <Route path="/item/:iditem" element={<ItemDetailContainer />} />
          <Route path="/category/:idcategory" element={<ItemListContainer />} />
          <Route path="/category/Carrito" element={<Carrito />} />
        </Routes>
      <Footer />

      </BrowserRouter>
      </div>
 
   
  );
}

