import { CardProducto } from "./ProductosStyles"

function Producto({nombre, imagen, descripcion, precio}) {
  return (
    <CardProducto>
       <h2>{nombre}</h2>
       <img src={imagen} alt="foto" /> 
       <h3>{descripcion}</h3>
       <span>${precio}</span>
    </CardProducto>
  )
}

export default Producto