import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
// import { useEffect } from 'react/cjs/react.production.min';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [color, setColor] = useState('transparent');
  const [textColor, setTextColor] = useState('white');

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 90) {
        setColor('#ffffff')
        setTextColor('#000000')
      } else {
        setColor('transparent')
        setTextColor('#ffffff')
      }
    };
    window.addEventListener('scroll', changeColor);
  }, []);

  return (
    <div style={{ backgroundColor: `${color}` }} className="fixed left-0 top-0 w-full z-10 ease-in duration-300">
      <div className="max-w-[1240px] m-auto flex items-center justify-between">
        <Link href="/">
          <h1 style={{ color: `${textColor}` }} className='font-bold text-4xl'>Logo</h1>
        </Link>
        <ul style={{ color: `${textColor}` }} className='hidden sm:flex'>
          <li className='p-4'>
            <Link href="/">Home</Link>
          </li>
          <li className='p-4'>
            <Link href="/about">About</Link>
          </li>
          <li className='p-4'>
            <Link href="/projects">Projects</Link>
          </li>
          <li className='p-4'>
            <Link href="/donations">Donations</Link>
          </li>
          <li className='p-4'>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>

        {/* Mobile Button */}
        <div onClick={handleNav} className='block sm:hidden cursor-pointer z-10'>
          {nav ? <AiOutlineClose size={20} style={{ color: "black" }} /> : <AiOutlineMenu size={20} style={{ color: `${textColor}` }} />}
        </div>
        {/* Mobile Menu */}
        <div className={
          nav
            ? 'sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-white text-center ease-in duration-300'
            : 'sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-white text-center ease-in duration-300'
        }
        >
          <ul>
            <li className='p-4 text-4xl hover:text-blue-400'>
              <Link href="/">Home</Link>
            </li>
            <li className='p-4 text-4xl hover:text-blue-400'>
              <Link href="/about">About</Link>
            </li>
            <li className='p-4 text-4xl hover:text-blue-400'>
              <Link href="/projects">Projects</Link>
            </li>
            <li className='p-4 text-4xl hover:text-blue-400'>
              <Link href="/donations">Donations</Link>
            </li>
            <li className='p-4 text-4xl hover:text-blue-400'>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar
