import { Link } from "react-router"
import { products } from "../data/products"
export default function Products (){
    return (
        <>
        {products.map((product)=> { return  <li  key={product.id}> <div> Name :{product.name}</div>
        <div>
           price : {product.price}
        </div>
        <Link to = {`/products/${product.id}`}> ProductsDetails</Link>
         </li>})}
        
        </>
    )
}