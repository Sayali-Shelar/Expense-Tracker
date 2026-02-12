import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    
    <header class="bg-white">
         <nav aria-label="Global" class="mx-auto flex max-w-0xl items-center justify-around p-3  bg-gray-100 shadow-sm lg:shadow-lg">
            <div class="flex lg:flex-1">
                <a href="" class="-m-1.5 p-1.5">
                    <span class="sr-only">Your Company</span>
                    <img src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600" alt="" class="h-8 w-auto" />
                </a>
            </div>
    
            

             <div class="flex lg:flex-1 lg:justify-end">    
                <Link to="/registration" class="-m-2.5 inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-blue-400">Get Started</Link>
            </div>

         
        </nav>
    </header>
  )
}
