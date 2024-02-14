"use client"
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { ShoppingBag } from 'lucide-react';
import { useShoppingCart } from 'use-shopping-cart';

const links = [
    {
        name: 'Home', href: '/'
    },
    {
        name: 'Men', href: '/Men'
    },
    {
        name: 'Women', href: '/Women'
    },
    {
        name: 'Teens', href: '/Teens'
    },
];




const Navbar = () => {

    const path = usePathname();
    const {handleCartClick} = useShoppingCart();
  return (
    <>
    <header className='flex items-center justify-between mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl'>
       <Link href='/'>
         <h1 className='text-2xl md:text-4xl font-bold'> 
         Next <span className='text-primary'> commerce </span></h1>
       </Link>

    <nav className='hidden gap-12 lg:flex ml-16'>
        {links.map((link, id) => (
            <div key={id}>
                {path === link.href ? (
                    <Link className='text-lg font-semibold text-primary hover:text-primary-600 transform hover:scale-110' href={link.href}>
                     {link.name}
                     </Link>
                ) : (
                    <Link  className="text-lg font-semibold text-gray-700 transition duration-100 hover:text-primary "href={link.href}>
                        {link.name}
                    </Link>

                )
            } 

            </div>
        ))}
    </nav>

    <div className=' flex divide-x border-r sm:border-l'>
        <Button variant={"ghost"}className='flex flex-col gap-y-1.5 h-8 w-8 sm:h-20 sm:w-20 rounded-none'
        onClick={() => handleCartClick()}>
          <ShoppingBag></ShoppingBag>

          <span className='hidden mt-2 font-semibold sm:block'>
            Cart
          </span>
        </Button>
    </div>
     

    </header>
    </>

  )
}

export default Navbar
