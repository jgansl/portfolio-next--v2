import { Layout } from '@/components/dom/Layout'
import localFont from 'next/font/local'
import '@/global.css'
import '@/styles/main.scss'

export const metadata = {
  title: 'Jesse Gansler', //'Next.js + Three.js',
  description: 'Professional Portfolio', //'A minimal starter for Nextjs + React-three-fiber and Threejs.',
  icons: {
    icon: '/logo.webp',
  },
}

const themeFont = localFont({
  src: [
    {
      path: '../public/fonts/Satoshi/Fonts/Variable/Satoshi-Variable.ttf',
      style: 'normal',
    },
    {
      path: '../public/fonts/Satoshi/Fonts/Variable/Satoshi-VariableItalic.ttf',
      style: 'italic',
    },
  ],
  display: 'swap',
})

export default function RootLayout({ children }) {
  return (
    <html lang='en' className='antialiased'>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className={themeFont.className}>
        {/* To avoid FOUT with styled-components wrap Layout with StyledComponentsRegistry https://beta.nextjs.org/docs/styling/css-in-js#styled-components */}
        <Layout>{children}</Layout>
      </body>
    </html>
  )
}
