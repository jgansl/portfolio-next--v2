;`use client`

/* eslint-disable tailwindcss/no-custom-classname */
import Image from 'next/image'
import Menu from '../menu/Menu'
import { useState } from 'react'

//TODO tailwind const headerLink = {}

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  // $(document).ready(function () {
  //   $('.menu').on('click', function () {
  //     $(this).find('.hambergerIcon').toggleClass('open')
  //   })
  // })
  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <header id='site-header' className='fixed w-[100dvw] left-0 top-2 z-40'>
        <nav className='_dark:bg-gray-800 _border-gray-200 _px-4 _py-2.5 _lg:px-6 w-full _bg-white'>
          <div className='_max-w-screen-xl _px-4 mx-auto flex flex-wrap items-center justify-between rounded-lg _bg-white py-2.5 _dark:bg-gray-800 _lg:px-6'>
            <a href='/' className='logo-link flex items-center relative z-[100]'>
              {/* <img src='https://flowbite.com/docs/images/logo.svg' className='mr-3 h-6 sm:h-9' alt='Flowbite Logo' /> */}
              <Image src='/img/logo.svg' className='_mr-3 _h-6 _sm: h-9' alt='Site Logo' height={150} width={150} />
              <span className='sr-only self-center whitespace-nowrap text-xl font-semibold _dark:text-white'>
                go to homepage - jessegansler.com
              </span>
            </a>
            <div className='flex items-center lg:order-2'>
              {/* <a
              href='#'
              className='mr-2 rounded-lg px-4 py-2 text-sm font-medium text-gray-800 hover:bg-gray-50 focus:outline-none focus:ring-4 focus:ring-gray-300 dark:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-800 lg:px-5 lg:py-2.5'
            >
              Resume
            </a> */}
              <a
                href='#'
                className='hidden mr-2 rounded-full bg-primary-700 px-4 py-2 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 lg:px-5 lg:py-2.5'
              >
                Contact
              </a>
              <div className='_container relative z-[100]'>
                <div className='menu' onClick={toggleMenu}>
                  <div className={`hambergerIcon ${isOpen ? 'open' : ''}`}></div>
                </div>
              </div>
              <Menu isOpen={isOpen} />
              <button
                data-collapse-toggle='mobile-menu-2'
                type='button'
                className='hidden ml-1 inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 lg:hidden'
                aria-controls='mobile-menu-2'
                aria-expanded='false'
              >
                <span className='sr-only'>Open main menu</span>
                <svg className='h-6 w-6' fill='currentColor' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'>
                  <path
                    fillRule='evenodd'
                    d='M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z'
                    clipRule='evenodd'
                  ></path>
                </svg>
                <svg
                  className='hidden h-6 w-6'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    fillRule='evenodd'
                    d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
                    clipRule='evenodd'
                  ></path>
                </svg>
              </button>
            </div>
            <nav
              className='hidden w-full items-center justify-between lg:order-1 _lg:flex lg:w-auto'
              id='mobile-menu-2'
            >
              <ul className='header-links mt-4 flex flex-col font-medium lg:mt-0 lg:flex-row lg:space-x-8'>
                <li className='header-link'>
                  <a href='#' className='' aria-current='page'>
                    Home
                  </a>
                </li>
                <li className='header-link'>
                  <a href='#' className=''>
                    Products
                  </a>
                </li>
                <li className='header-link'>
                  <a href='#' className=''>
                    Case Studies
                  </a>
                </li>
                <li className='header-link'>
                  <a href='#' className=''>
                    Blog
                  </a>
                </li>
                {/* <li className='header-link'>
                <a href='#' className=''>
                  Team
                </a>
              </li> */}
                <li className='header-link'>
                  <a href='#' className=''>
                    Contact
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </nav>
      </header>
    </>
  )
}
