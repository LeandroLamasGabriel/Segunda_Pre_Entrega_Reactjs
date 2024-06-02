import { useParams } from "react-router-dom"
import Item from "./Item"

function Itemlist({item}) {
    const { id } = useParams()
    return (
        <div className="row" style={{ padding: '1rem' }}>
            {item.map(item => ( <Item item={item} key={item.id}/> ))}
        </div>
    )
}

export default Itemlist