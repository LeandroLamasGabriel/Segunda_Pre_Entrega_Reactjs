import { Link } from "react-router-dom"
import ItemCount from "./ItemCount"
function ItemDetail({item}) {
    return (
        <div className="card" style={{ width: '16rem' }} key={item.id}>
            <img src={item.url} className="card-img-top" style={{ width: '90%', height: '90%' }} alt="..."></img>
            <div className="card-body">
                <h5 className="card-title text-center">{item.nombre}</h5>
                <p className="card-text text-center">Precio: ${item.precio}</p>
                <button className="text-center" style={{ display: 'flex' }}>
                    <Link to={`/Productos/${item.id}`} className="btn btn-primary container" style={{  marginRight:'10px' }}>Agregar</Link>
                    <ItemCount initial={1} stock={item.stock} />
                </button>
            </div>
        </div>
    )
}

export default ItemDetail