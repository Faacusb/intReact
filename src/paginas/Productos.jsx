import {anteojos} from './Productos'
import Producto from './Producto'
import { CardsContainer } from './ProductosStyles';
function Productos() {
  return (
    <CardsContainer>
        {anteojos.map((prod)=> (
        <Producto key={prod.id} nombre={prod.nombre} imagen={prod.imagen} descripcion={prod.descripcion} precio={prod.precio} />
        ))}
    </CardsContainer>
  )
}

export default Productos