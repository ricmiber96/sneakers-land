import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { AllProducts as product } from '../../utils/data'
import { ShoppingCartIcon, FavouriteIcon } from '../Icons'

export default function ProductDetails (props) {
  const { id } = useParams()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <section className='max-w-7xl flex flex-col mx-auto'>
      <div className='flex items-center justify-center  gap-x-12'>
        {
          product.map((item) => {
            if (item.id === parseInt(id)) {
              return (
                <>
                  <div className='flex flex-col max-w-3xl w-[448px] h-[448px]' key={item.id}>
                    <img
                      className='w-full h-full rounded-md object-cover object-bottom'
                      src={item.img[0]}
                      alt={item.alt}/>
                  </div>
                  <div className='w-1/2 flex flex-col pt-5 pb-20 lg:pb-5 px-6 text-left'>
                    <h2 className='text-md font-bold text-green-400 capitalize'>{item.company}</h2>
                    <h2 className='text-4xl font-bold text-black capitalize'>{item.title}</h2>
                    <p className='text-gray-400 pb-6 lg:py-6 lg:leading-6'>{item.desc}</p>
                    <div className='flex flex-col text-left'>
                      <div className='flex flex-row items-center justify-between w-1/3'>
                        <p className='font-bold text-4xl'>{item.discountPrice}$</p>
                        <div className=' text-green-400 font-bold rounded  h-6 bg-green-100 p-4 flex items-center'>
                          {
                            Math.floor(
                              ((item.price - item.discountPrice) * 100) / item.price
                            )
                          }%
                        </div>
                      </div>
                      <p className='font-bold text-gray-400 line-through mt-4 text-lg'>{item.price}$</p>
                    </div>

                    <div className='flex flex-row mt-8 items-center gap-x-8'>
                      <button className='bg-gray-400 hover:opacity-60 cursor-pointer w-1/4 h-14 rounded-lg px-6 text-shadow-2xl text-white text-xl flex items-center gap-4 justify-center border shadow-md'>
                        <FavouriteIcon/>
                      </button>
                      <button className='bg-green-400 hover:opacity-60 cursor-pointer w-2/3 h-14 rounded-lg px-6 text-shadow-2xl text-white text-xl flex items-center gap-4 justify-center border shadow-md'>
                        <ShoppingCartIcon/>
                        Add to cart
                      </button>
                    </div>
                  </div>
                </>
              )
            }
            return null
          })
        }
      </div>
    </section>
  )
}
