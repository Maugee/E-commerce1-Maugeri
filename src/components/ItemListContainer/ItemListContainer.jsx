import "./ItemListContainer.css"
import { useEffect, useState } from "react"
import { obtenerProductos } from '../../data/data.js'
import ItemList from "./ItemList.jsx"

const ItemListContainer = ({ texto }) => {
  const [productos, setProductos] = useState([])

  useEffect(()=>{
    obtenerProductos()
    .then((respuesta)=>{
      setProductos(respuesta)
    })
    .catch((error)=>{
      console.log(error)
    })
    .finally(()=>{
      console.log("Se resolvio la promesa")
    })
  }, [])

  return (
    <div className="div-body" >
      <p className='p-List'> {texto} </p>
      <ItemList productos = {productos}/>
    </div>
  )
}

export default ItemListContainer