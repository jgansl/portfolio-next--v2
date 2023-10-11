'use client'

import { useRef } from 'react'
import dynamic from 'next/dynamic'
import Header from '../header/Header'
import Footer from '../footer/Footer'
const Scene = dynamic(() => import('@/components/canvas/Scene'), { ssr: false })

const Layout = ({ children }) => {
  const ref = useRef()

  return (
    <>
      <Header />
      <main id='site-main' ref={ref}>
        {children}
        <Scene
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            pointerEvents: 'none',
          }}
          eventSource={ref}
          eventPrefix='client'
        />
      </main>
      <Footer />
    </>
  )
}

export { Layout }
