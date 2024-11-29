'use client'

import { Button } from "./ui/button";

import { urlFor } from "@/sanity/lib/image";
import { Any } from "next-sanity";
import { useShoppingCart } from "use-shopping-cart";

export interface ProductCart{
    name:string;
    description:string;
    price:number;
    currency:string;
    image:Any
    price_id:string
}

export default function AddToCart({currency,description,price, name, image,price_id}:ProductCart) {
    const {addItem, handleCartClick} = useShoppingCart();
    const product ={
        name: name,
        description: description,
        price: price,
        currency: currency,
        image: urlFor(image).url(),
        price_id: price_id
    };
    return(
         <Button 
        onClick={() => {
            addItem(product); handleCartClick()
        }}>
            Add To Cart
        </Button>
    )
 }


