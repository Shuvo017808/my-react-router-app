import { useParams } from "react-router"
import { products } from "../data/products";
export default  function ProductsDetails(){
    const pharms = useParams();
    const FindProduct = products.find((item)=>{return item.id === Number(pharms.id)})
    if(!FindProduct){
        return <h1>Opps....Product not found</h1>
    }

    return (
<div >
     name :{FindProduct.name}
     price:{FindProduct.price} 
</div>
    )
}