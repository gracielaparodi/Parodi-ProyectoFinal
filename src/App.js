import "./App.css";
import Navbar from "./Components/Navbar";
import ItemListContainer from "./Components/ItemListContainer";
import Footer from "./Components/Footer";
import BodyApp from "./Components/BodyApp";

export default function App() {

  return (
    <div>
      <Navbar color={"#FE86BC"} />
      <ItemListContainer greeting={"¡Bienvenidas Sailors! ¡Transformación!"} />
      <BodyApp />
      <Footer />
    </div>

  );
}

