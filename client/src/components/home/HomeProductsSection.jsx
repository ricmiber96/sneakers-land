import React from 'react'
import { AllProducts as products } from '../../utils/data.js'
import ProductItem from '../products/ProductItem.jsx'
import { Link } from 'react-router-dom'

export default function HomeProductsSection (props) {
  return (
    <section className='bg-gray-100 flex flex-col items-center mt-28'>
      <div className='lg:px-0 xl:px-3 lg:mx-20 xl:mx-28 2xl:mx-36 3xl:mx-auto max-w-3xl mx-auto lg:max-w-7xl lg:pb-16 lg:mt-7'>
        <h2 className='font-bold text-2xl sm:text-4xl text-center w-full mx-auto py-6 mb-6'>Products</h2>
        <div className='max-w-7xl mx-auto px-4'>
          <div className='grid grid-cols-1 gap-y-12 sm:y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8'>
            {
              products.slice(0, 4).map((product, index) => {
                return (
                  <ProductItem key={index} product={product} />
                )
              })

            }

          </div>
          <div className='mx-8 mt-20 text-center'>
            <Link to={'/products'}>
              <button className='border rounded-lg text-green-500 border-green-500 hover:text-white hover:bg-green-500 px-8 py-4 bg-green-100 shadow-[inset_0_0_0_0_#21C461] hover:shadow-[inset_0_-4rem_0_0_#21C461] transition-all duration-300'>
                    Explore More
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
