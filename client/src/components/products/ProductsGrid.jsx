import React from 'react'
import collectionImg from '../../assets/img/collectionHeader.jpg'
import { AllProducts as productDefault } from '../../utils/data.js'
import ProductItem from './ProductItem.jsx'

export default function ProductsGrid (props) {
  return (
    <section className='max-w-7xl flex-col h-full flex relative mx-auto gap-10 mb-28'>
      <div className='h-52 flex items-center justify-center'>
        <h2 className='capitalize font-bold bg-gradient-to-r from-lime-400 to-lime-700 bg-clip-text text-transparent z-10 relative  text-3xl sm:text-4xl sm:leading-none pb-16 px-8'>
            Collections
        </h2>
        <div className='absolute top-0 left-0 -z-0 w-full h-52 rounded-md overflow-hidden'>
          <img
            src={collectionImg}
            alt='Sneaker collection'
            className='opacity-40 h-full w-full object-cover'/>
        </div>
      </div>
      <div className='max-w-7xl'>
        <div className='grid grid-cols-3 gap-y-8 gap-x-6'>
          {
            productDefault.map((product) => {
              return (
                <ProductItem key={product._id} product={product}/>
              )
            })
          }

        </div>

      </div>

    </section>
  )
}
