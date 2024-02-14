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



export default function AddToBag({currency, image, price, name, price_ID} : ProductCart){
    const{addItem} = useShoppingCart();
 
    const product = {
        name: name,
        price: price,
        currency: currency,
        image: urlFor(image).url(),
        price_ID: price_ID,
        sku: name
    }


  return (
  <Button onClick={()=>{addItem(product)}} > Add to Cart</Button>)
}
