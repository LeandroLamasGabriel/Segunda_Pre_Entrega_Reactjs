import "./ItemListContainer.css"
import { useState, useEffect } from "react"
import Itemlist from "./ItemList"
import { useParams } from "react-router-dom"

function ItemListContainer() {
    const [items, setItems] = useState([])
    const { id } = useParams()

    useEffect(() => {
        async function pedirDatosAlBackend() {
            try {
                const resp = await fetch("/datos.json")
                const data = await resp.json()
                setItems(data)
            } catch (error) {
                console.log("Error: " + error)
            }
        }
        pedirDatosAlBackend()
        
    }, [id])
    
    return (
        <Itemlist item={items}/>
    )
}
export default ItemListContainer