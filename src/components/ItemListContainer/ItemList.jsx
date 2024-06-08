import Item from "./Item"

function Itemlist({item, categorie}) {
    return (
        <div className="row" style={{ padding: '1rem' }}>
            {item.map(item => ( <Item item={item} categorie={categorie} key={item.id}/> ))}
        </div>
    )
}

export default Itemlist