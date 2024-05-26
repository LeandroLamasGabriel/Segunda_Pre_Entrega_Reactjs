import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
function ItemDetail() {
    const [item, setItems] = useState([])
    const { id } = useParams()

    useEffect(() => {
        async function pedirDatosAlBackend() {
            try {
                const resp = await fetch("/datos.json")
                const data = await resp.json()
                setItems(data.find(dato => dato.id == id))
            } catch (error) {
                console.log("error: " + error)
            }
        }
        pedirDatosAlBackend()



    }, [id])
    console.log(item)
    return (
        <div className="card" style={{ width: '16rem' }} key={item.id}>
            <img src={item.url} className="card-img-top" style={{ width: '90%', height: '90%' }} alt="..."></img>
            <div className="card-body">
                <h5 className="card-title text-center">{item.nombre}</h5>
                <p className="card-text text-center">{item.categoria}</p>
                <button className="container">
                    <Link  className="btn btn-primary container">Agregar</Link>
                </button>

            </div>
        </div>
    )
}

export default ItemDetail