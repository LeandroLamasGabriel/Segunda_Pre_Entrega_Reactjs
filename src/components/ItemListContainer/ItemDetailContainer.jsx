import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';

function ItemDetailContainer() {
    const [items, setItems] = useState([])
    const { id } = useParams()

    useEffect(() => {
        async function pedirDatosAlBackend() {
            try {
                const resp = await fetch("/datos.json")
                const data = await resp.json()
                setItems(data.find(dato => dato.id == id))
            } catch (error) {
                console.log("Error: " + error)
            }
        }
        pedirDatosAlBackend()
        
    }, [id])

    return (
        <ItemDetail item={items}/>
    )
}

export default ItemDetailContainer;