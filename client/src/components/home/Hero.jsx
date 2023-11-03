import React from 'react'
import heroImg from '../../assets/img/hero-sneaker.png'

export default function Hero (props) {
  return (
    <section className='flex flex-col lg:flex-row items-center justify-center gap-12'>
      <div className='max-w-2xl'>
        <h1 className='capitalize font-bold text-6xl pb-5 text-black'>Discover new sneakers</h1>
        <p className='lg:leading-6 py-6 lg:py-7 text-gray-400'>
            With a wide range of quality and affordable sneakers to choose from,
            browse <br/> through our collections for that sneakers you’ve always
            wanted.
        </p>
      </div>
      <div className='order-1 lg:order-2 lg:ml-4 relative'>
        <img src={heroImg} alt=''/>
        <div className='absolute w-full h-full bottom-10  sm:bottom-18 lg:-bottom-14 -z-10 left-28 sm:left-44 lg:left-20'>
          <div className='h-inherit'>
            <svg
              className='w-full scale-[1.4] sm:scale-[1.2] lg:scale-[1.5]  -z-10'
              viewBox='0 0 200 200'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                fill='#d9ffdd'
                d='M40.7,-68.2C48.9,-65.7,49.1,-47.1,54.7,-33.1C60.4,-19,71.3,-9.5,71,-0.2C70.6,9.1,58.8,18.1,50.1,26.8C41.4,35.5,35.8,43.8,27.9,54.9C20.1,66,10,79.9,0.5,79.1C-9.1,78.3,-18.2,62.8,-27.6,52.6C-37,42.4,-46.7,37.5,-57.4,29.6C-68.1,21.7,-79.8,10.9,-83.4,-2.1C-87.1,-15.1,-82.8,-30.2,-71.9,-37.7C-61,-45.3,-43.6,-45.3,-30.5,-45C-17.4,-44.7,-8.7,-44,3.8,-50.5C16.2,-57.1,32.5,-70.7,40.7,-68.2Z'
                transform='translate(100 100)'
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}
