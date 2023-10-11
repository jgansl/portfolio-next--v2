'use client'

import Hero from '@/components/hero/Hero'
import dynamic from 'next/dynamic'
import { Suspense } from 'react'

const Logo = dynamic(() => import('@/components/canvas/Examples').then((mod) => mod.Logo), { ssr: false })
const Dog = dynamic(() => import('@/components/canvas/Examples').then((mod) => mod.Dog), { ssr: false })
const Duck = dynamic(() => import('@/components/canvas/Examples').then((mod) => mod.Duck), { ssr: false })
const View = dynamic(() => import('@/components/canvas/View').then((mod) => mod.View), {
  ssr: false,
  loading: () => (
    <div className='flex h-96 w-full flex-col items-center justify-center'>
      <svg className='-ml-1 mr-3 h-5 w-5 animate-spin text-black' fill='none' viewBox='0 0 24 24'>
        <circle className='opacity-25' cx='12' cy='12' r='10' stroke='currentColor' strokeWidth='4' />
        <path
          className='opacity-75'
          fill='currentColor'
          d='M4 12a8 8 0 0 1 8-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 0 1 4 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
        />
      </svg>
    </div>
  ),
})
const Common = dynamic(() => import('@/components/canvas/View').then((mod) => mod.Common), { ssr: false })

export default function Page() {
  return (
    <>
      <Hero />
      <div className='_lg:w-4/5  mx-auto flex hidden w-full flex-col flex-wrap items-center md:flex-row-reverse'>
        {/* jumbo */}
        <div className='flex w-full flex-col items-start justify-center p-12 text-center md:w-2/4 md:text-left'>
          <p className='w-full uppercase'>Next + React Three Fiber</p>
          <h1 className='_my-4 _text-5xl _font-bold _leading-tight'>Next 3D Starter</h1>
          <p className='mb-8 text-2xl leading-normal'>A minimalist starter for React, React-three-fiber and Threejs.</p>
        </div>

        <div className='w-full text-center md:w-2/4'>
          <View className='flex h-96 w-full flex-col items-center justify-center'>
            <Suspense fallback={null}>
              <Logo route='/blob' scale={0.6} position={[0, 0, 0]} />
              <Common />
            </Suspense>
          </View>
        </div>
      </div>

      {/* <div className='_lg:w-4/5 mx-auto flex w-full flex-col flex-wrap items-center p-12 md:flex-row'>
        {/* first row * /}
        <div className='relative h-48 w-full py-6 sm:w-1/2 md:my-12 md:mb-40'>
          <h2 className='_mb-3 _text-3xl _font-bold _leading-none text-gray-800'>Events are propagated</h2>
          <p className='mb-8 text-gray-600'>Drag, scroll, pinch, and rotate the canvas to explore the 3D scene.</p>
        </div>
        <div className='relative my-12 h-48 w-full py-6 sm:w-1/2 md:mb-40'>
          <View orbit className='relative h-full  sm:h-48 sm:w-full'>
            <Suspense fallback={null}>
              <Dog scale={2} position={[0, -1.6, 0]} rotation={[0.0, -0.3, 0]} />
              <Common color={'lightpink'} />
            </Suspense>
          </View>
        </div>
        {/* second row * /}
        <div className='relative my-12 h-48 w-full py-6 sm:w-1/2 md:mb-40'>
          <View orbit className='relative h-full animate-bounce sm:h-48 sm:w-full'>
            <Suspense fallback={null}>
              <Duck route='/blob' scale={2} position={[0, -1.6, 0]} />
              <Common color={'lightblue'} />
            </Suspense>
          </View>
        </div>
        <div className='w-full p-6 sm:w-1/2'>
          <h2 className='_text-3xl _mb-3 _font-bold _leading-none text-gray-800'>Dom and 3D are synchronized</h2>
          <p className='mb-8 text-gray-600'>
            3D Divs are renderer through the View component. It uses gl.scissor to cut the viewport into segments. You
            tie a view to a tracking div which then controls the position and bounds of the viewport. This allows you to
            have multiple views with a single, performant canvas. These views will follow their tracking elements,
            scroll along, resize, etc.
          </p>
        </div>
      </div> */}

      <section className='container-2400 hidden bg-red-300'>
        <h2>Does This Sound Familiar...</h2>
      </section>

      <section className='container-2400 grid hidden gap-3 xl:grid-cols-3'>
        <div className='col-span-1'>
          <h2 className='xl:!mt-[-0.25em]'>Be the best you with EQ</h2>
        </div>
        <div className='col-span-2 grid hidden gap-3 sm:grid-cols-2'>
          <div className='col-span-1 '>
            <p>Not having your own emotions</p>
          </div>
          <div className='col-span-1'>
            <p>Not having your own emotions</p>
          </div>
        </div>
      </section>

      <section className='container-2400 hidden bg-blue-400 text-center'>
        <p className='pre-heading'>Built out of frustration</p>
        <h2 className='mt-0'>Does This Sound Familiar...</h2>
        <p>
          Personalized pocket coach that provides bite-sized, science-driven tools to boost emotional intelligence.
          <br />
          Think of it as a pocket cheerleader towards a better, more fulfilling you.
        </p>
      </section>

      <section className='container-2400'>
        <h2 className='h1 max-w-[8em]'>Let's work together</h2>
        <p>Whilte I currently not looking for new job opportunities</p>

        <strong>
          <a href='info@email.com'>info@email.com</a>
        </strong>

        <address className='!font-normal'>Seattle, WA</address>
        <em>( Considering Relocation to PNW )</em>
        <div className='flex justify-between'>
          <a href='/privacy'>Privacy Policy</a>
        </div>
      </section>
    </>
  )
}
