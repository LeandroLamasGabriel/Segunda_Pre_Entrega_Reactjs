import "./App.css"
import NavBar from "./components/NavBar/NavBar"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import ItemDetailContainer from "./components/ItemListContainer/ItemDetailContainer"
import Categories from "./components/Categories/Categories"

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
        <Route path="/Productos/:id" element={<ItemDetailContainer />} /> 
        <Route path="/Categorias/:id" element={<Categories />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
