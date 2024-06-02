import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import Itemlist from "../ItemListContainer/ItemList"
function Categories(){
    const [items, setItems] = useState([])
    const { id } = useParams()
    useEffect(() => {
        async function pedirDatosAlBackend() {
            try {
                const resp = await fetch("/datos.json")
                const data = await resp.json()
                setItems(data.filter(dato => dato.categoria == id))
            } catch (error) {
                console.log("Error: " + error)
            }
        }
        pedirDatosAlBackend()
    },[id])

    return <Itemlist item={items}/>
    
}
export default Categories