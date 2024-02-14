
"use client"

import { ReactDOM } from "react"
import { CartProvider } from "use-shopping-cart"

export default function Provider ({ children }:{ children: React.ReactNode}) {
    return(
       <CartProvider mode="payment" cartMode="client-only"
        stripe={process.env.NEXT_PUBLIC_STRIPE_KEY as string}
        successUrl="http:localhost:3000/success"
        cancelUrl="http:localhost:3000/error"
        currency="USD"
        billingAddressCollection={true}
        shouldPersist={true}
        language="en-US"
       >
        {children}
       </CartProvider>
    )
}