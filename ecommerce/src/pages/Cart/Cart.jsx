import { useContext } from "react";
import { CartContext } from "../../index";
import { ProductCard } from "../../components/ProductCard";


export const Cart = ()=>{
    const {cart, removeFromCart} = useContext(CartContext)
    return(
        <div>
            {
                cart.map((item)=>(
                    <div>
                        <ProductCard {...item} noDetail/>
                        <button onClick={()=>removeFromCart(item)}>Remove</button>
                    </div>
                ))
            }
            <h2>Total Amount : {cart.reduce((acc, currentItem)=>acc + (currentItem.price),0)}</h2>
        </div>
        
    )
}