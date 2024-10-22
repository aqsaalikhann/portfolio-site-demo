
import Link from 'next/link';
import React from 'react'

const Header = () => {
  return (
    <header className="bg-zinc-200">
        <div>
         <h1 className="text-4xl text-center font-bold">Welcome to my portfolio-site</h1>
          <nav>
            <ul className="text-center flex space-x-4 ">
               <li><Link href ="/">Home</Link></li>
                <li><Link href ="about">About</Link></li>
                <li><Link href ="contact">Contact</Link></li>
            </ul>
            </nav>         
        </div>
    </header>
  )
};

export default Header;