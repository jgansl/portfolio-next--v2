'use client'

import Link from 'next/link'
//https://github.com/theMisfitWhale/react_gsap_sandbox/blob/Infinite_Scroll/src/pages/InfiniteScroll.jsx
// REVERSE SCROLL
// links
// responsive
//

import React, { useEffect } from 'react'

function InfiniteScroll() {
  useEffect(() => {
    let scrollHeight = 0,
      scrollPos = 0,
      clonesHeight = 0,
      disableScroll = false,
      clones = []
    const context = document.querySelector('.loop')
    const items = document.querySelectorAll('.loop_item')
    Array.from(items, (item) => {
      const clone = item.cloneNode(true)
      context.appendChild(clone)
      clone.classList.add('clone_item')
    })

    const getScrollPos = () => {
      return (context.pageYOffset || context.scrollTop) - (context.clientTop || 0)
    }

    const setScrollPos = (pos) => {
      context.scrollTop = pos
    }

    const getClonesHeight = () => {
      clonesHeight = 0
      Array.from(clones, (clone) => {
        clonesHeight = clonesHeight + clone.offsetHeight
      })
      return clonesHeight
    }

    const reCalc = () => {
      console.log('recalc')
      scrollPos = getScrollPos()
      scrollHeight = context.scrollHeight
      clonesHeight = getClonesHeight()

      if (scrollPos <= 0) {
        setScrollPos(1) // Scroll 1 pixel to allow upwards scrolling
      }
    }

    const scrollUpdate = () => {
      if (!disableScroll) {
        scrollPos = getScrollPos()
        console.log('scrollupdate')

        if (clonesHeight + scrollPos >= scrollHeight) {
          if (clonesHeight)
            // Scroll to the top when you’ve reached the bottom
            setScrollPos(1) // Scroll down 1 pixel to allow upwards scrolling
          // console.log('reach bottom')
          disableScroll = true
          console.log('disabled bottom')
        } else if (scrollPos <= 0) {
          // Scroll to the bottom when you reach the top
          setScrollPos(scrollHeight - clonesHeight)
          disableScroll = true
          console.log('disabled top')
          // console.log('reach top')
        }
      }
      if (disableScroll) {
        // Disable scroll-jumping for a short time to avoid flickering
        window.setTimeout(function () {
          disableScroll = false
          console.log('enabled')
        }, 40)
      }
    }

    clones = context.querySelectorAll('.clone_item')

    reCalc()

    context.addEventListener(
      'scroll',
      () => {
        window.requestAnimationFrame(scrollUpdate)
      },
      false,
    )
    window.addEventListener(
      'resize',
      () => {
        window.requestAnimationFrame(reCalc)
      },
      false,
    )
    return () => {
      context.removeEventListener(
        'scroll',
        () => {
          window.requestAnimationFrame(scrollUpdate)
        },
        false,
      )
      window.removeEventListener(
        'resize',
        () => {
          window.requestAnimationFrame(reCalc)
        },
        false,
      )
    }
  }, [])

  const menuItem = [
    { id: 1, name: 'Home', link: '/' },
    { id: 2, name: 'About', link: '/about' },
    { id: 3, name: 'Services', link: '/services' },
    { id: 4, name: 'Resume', link: '/resume' },
    { id: 5, name: 'Projects', link: '/projects' },
    { id: 6, name: 'Portfolio', link: '/portfolio' },
    { id: 7, name: 'Contact', link: '/contact' },
    { id: 8, name: 'Experience', link: '/experience' },
    { id: 9, name: 'Blog', link: '/blog' },
    { id: 10, name: 'Resources', link: '/resources' },
    // { id: 11, name: 'Home', link: '/' },
    // { id: 12, name: 'Home', link: '/' },
    // { id: 13, name: 'Home', link: '/' },
    // { id: 14, name: 'Home', link: '/' },
  ]

  return (
    <div
      className={`no-scrollbar loop  h-screen relative overflow-auto flex flex-col _items-end _text-right select-none`}
    >
      {menuItem.map((el) => (
        <div
          key={el.id}
          className='loop_item relative p-2 mr-16 flex transition-transform  _hover:translate-x-4 _hover:italic _hover:text-green'
        >
          {/* <a data-href={el.link} className='text-[2vh] cursor-pointer relative p-2 block'>({el.id})</a> */}
          {/* <a data-href={el.link} className='text-[7vh] cursor-pointer relative  block'>{el.name}</a> */}
          <Link href={el.link} className='cursor-pointer relative flex items-start'>
            <span className='text-[7vh] '>{el.name}</span>
            <span className='text-[2vh] '>{el.id}</span>
          </Link>
        </div>
      ))}
    </div>
  )
}

export default InfiniteScroll
