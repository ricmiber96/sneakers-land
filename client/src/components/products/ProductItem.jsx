import React from 'react'
import { Link } from 'react-router-dom'

export default function ProductItem ({ product }) {
  return (
    <div className='flex flex-col cursor-pointer'>
      <Link to={`/products/${product.id}`} className='cursor-pointer'>
        <div className='w-full min-h-80 aspect-w-1 aspect-h-1 rounded-md overflow-hidden  lg:h-80 lg:aspect-none shadow-lg'>
          <img
            className='w-full h-full object-center object-cover sm:h-80 lg:w-full lg:h-full shadow-lg'
            src={product.img[0]}
            alt={product.alt}/>
        </div>
        <div>
          <div>
            <p className='text-green-500 font-bold pb-2 pt-4 capitalize'>{product.company}</p>
            <h3 className='text-gray-500 capitalize text-lg font-bold pb-4 h-12'>{product.title}</h3>
          </div>
          <div className='flex justify-between items-center text-sm'>
            <div className='font-bold'>
                ${product.discountPrice}
            </div>
            <div className='line-through font-bold text-gray-500'>
            ${product.price}
            </div>
            <div className=' text-green-400 font-bold px-2 rounded mx-5 h-6'>
              {
                Math.floor(
                  ((product.price - product.discountPrice) * 100) / product.price
                )
              }%
            </div>
          </div>
        </div>
      </Link>
    </div>
  )
}
