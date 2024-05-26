import NavBar from "./components/NavBar/NavBar"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import "./App.css"
import Procesadores from "./components/Categories/Procesadores"
import Memorias_Ram from "./components/Categories/Memorias_Ram"
import Discos from "./components/Categories/Discos"
import Item from "./components/ItemListContainer/Item"
import ItemDetail from "./components/ItemListContainer/ItemDetail"
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";



function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/Productos/:id" element={<ItemDetail />} /> 
        <Route path="/Procesadores" element={<Procesadores />} /> 
        <Route path="/Memorias_Ram" element={<Memorias_Ram />} /> 
        <Route path="/Discos" element={<Discos />} /> 
      </Routes>
    </BrowserRouter>
  )
}

export default App
