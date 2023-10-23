;`use client`

/* eslint-disable tailwindcss/no-custom-classname */
import Image from 'next/image'
import Link from 'next/link'
// import { useEffect } from 'react'
import { motion } from 'framer-motion'
import InfiniteScroll from './InfiniteScroll'

export default function Menu({ isOpen }) {
  // useEffect(() => {
  //   console.log(isOpen)
  // })

  return (
    <>
      {/* {isOpen && ( */}
      <motion.section
        initial={{
          opacity: isOpen ? 1 : 0,
          pointerEvents: isOpen ? 'auto' : 'none',
        }}
        animate={{
          opacity: isOpen ? 1 : 0,
          pointerEvents: isOpen ? 'auto' : 'none',
        }}
        exit={{ opacity: 0 }}
        className='fixed top-0 left-0 z-50 w-screen h-screen bg-primary text-white _dark:bg-gray-900 _bg-white'
      >
        <div className='flex h-full'>
          <MenuLeft />
          <MenuRight />
        </div>
      </motion.section>
      {/* )} */}
    </>
  )
}

function MenuLeft() {
  return (
    <div id='menuLeft' className='basis-[450px] bg-black border-solid border-r-2 border-white _p-12 hidden md:flex flex-col justify-center'>
      {/* <a href='/' className='logo-link flex items-center'>
        {/* <img src='https://flowbite.com/docs/images/logo.svg' className='mr-3 h-6 sm:h-9' alt='Flowbite Logo' /> * /}
        <Image src='/img/logo.svg' className='mr-3 h-6 sm:h-9' alt='Site Logo' height={150} width={150} />
        <span className='sr-only self-center whitespace-nowrap text-xl font-semibold _dark:text-white'>
          go to homepage - jessegansler.com
        </span>
      </a> */}
      <ul>
        <li>LinkedIn</li>
        <li>Github</li>
        <li>Instagram</li>
        <li>X/Twitter</li>
        <li>Leetcode</li>
        <li>Dev.to</li>
      </ul>
    </div>
  )
}
function MenuRight() {
  return (
    <div id='menuRight' className='flex items-center_basis-2/3 bg-black _bg-primary-500 grow px-12'>
      {/* <span className='uppercase'>navigation</span> */}
      <nav className='w-full items-center justify-between lg:order-1 lg:flex lg:w-auto' id='mobile-menu-3'>
        <InfiniteScroll />
      </nav>
    </div>
  )
}

// <ul className='hidden menu-links mt-4 flex flex-col font-medium lg:mt-0 _lg:flex-row _lg:space-x-8 _px-12'>
//   <li className='menu-link'>
//     <a href='#' className='' aria-current='page'>
//       Home
//       <sup>01</sup>
//     </a>
//   </li>
//   <li className='menu-link'>
//     <a href='#' className=''>
//       Products
//     </a>
//   </li>
//   <li className='menu-link'>
//     <a href='#' className=''>
//       Case Studies
//     </a>
//   </li>
//   <li className='menu-link'>
//     <a href='#' className=''>
//       Blog
//     </a>
//   </li>
//   {/* <li className='menu-link'>
//         <a href='#' className=''>
//           Team
//         </a>
//       </li> */}
//   <li className='menu-link'>
//     <a href='#' className=''>
//       Contact
//     </a>
//   </li>
// </ul>
