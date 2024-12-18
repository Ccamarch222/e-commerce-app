'use client'

import { Button } from "./ui/button";

import { urlFor } from "@/sanity/lib/image";

import { useShoppingCart } from "use-shopping-cart";
import { ProductCart } from "./AddToBag";



export default function CheckoutNow({currency,description,price, name, image,price_id}:ProductCart) {
    const {checkoutSingleItem} = useShoppingCart();
    function buyNow(priceId:string) {
        checkoutSingleItem(priceId)
    }
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
            buyNow(product.price_id)
        }}>
            Add To Cart
        </Button>
    )
 }


