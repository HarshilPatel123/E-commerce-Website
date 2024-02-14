"use client"



import { Button } from "@/components/ui/button";
import { useShoppingCart } from "use-shopping-cart";
import { urlFor } from "../lib/sanity";

export interface ProductCart {
    name: string;
    currency: string;
    price: number;
    image: any;
    price_ID: string;
}



export default function CheckOut({currency, image, price, name, price_ID} : ProductCart){
    const{checkoutSingleItem} = useShoppingCart();
    function buyNow (price_ID: string){
        checkoutSingleItem(price_ID)
    }
   


  return (
  <Button onClick={()=>{buyNow(price_ID)}} > Add to Cart</Button>)
}
