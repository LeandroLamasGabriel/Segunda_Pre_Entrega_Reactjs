import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"

function Item({ item }) {
    return (
        <div className="card" style={{ width: '16rem' }} key={item.id}>
            <img src={item.url} className="card-img-top" style={{ width: '90%', height: '90%' }} alt="..."></img>
            <div className="card-body">
                <h5 className="card-title text-center">{item.nombre}</h5>
                <p className="card-text text-center">{item.categoria}</p>
                <button className="container">
                    <Link to={`/Productos/${item.id}`} className="btn btn-primary container">Ver mas</Link>
                </button>

            </div>
        </div>
    )
}

export default Item