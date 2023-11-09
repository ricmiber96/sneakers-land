import React, { useContext } from 'react'
import { motion } from 'framer-motion'
import { CartContext } from '../../context/CartContext'
import useCart from '../../hooks/useCart'
import { TrashIcon } from '../Icons'

export default function Cart ({ isOpen }) {
  const { cart, totalPay, removeFromCart } = useCart()
  console.log(cart)

  const variants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: '150%' }
  }
  const itemVariants = {
    open: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 300, damping: 24 }
    },
    closed: { opacity: 0, y: 20, transition: { duration: 0.3 } }
  }

  return (
    <motion.div
      className={`${isOpen ? 'absolute' : 'hidden'} top-28  bottom-40 inset-x-2 lg:left-auto xl:right-24 lg:-mr-2 p-5 max-w-xl lg:max-w-sm lg:w-full mx-auto min-h-xs h-fit flex flex-col bg-white z-20 shadow-xl rounded-lg overflow-w-hidden `}
      initial={{ opacity: 0 }}
      variants={variants}
      animate={isOpen ? 'open' : 'closed' }>
      <div className='mb-4'>
        <h3 className='font-bold pb-5 text-lg'>Cart</h3>
        <hr className='text-grayish-blue -mx-5' />
      </div>
      {
        cart.length > 0
          ? <>
            <motion.ul
              className='flex flex-col flex-1 items-center justify-start pt-4 mb-6'
              variants={{
                open: {
                  clipPath: 'inset(0% 0% 0% 0% round 10px)',
                  transition: {
                    type: 'spring',
                    bounce: 0,
                    duration: 0.8,
                    delayChildren: 0.3,
                    staggerChildren: 0.05
                  }
                },
                closed: {
                  clipPath: 'inset(10% 50% 90% 50% round 10px)',
                  transition: {
                    type: 'spring',
                    bounce: 0,
                    duration: 0.3
                  }
                }
              }}
              style={{ pointerEvents: isOpen ? 'auto' : 'none' }}
            >

              {cart.map((item) => {
                return (
                  <motion.li
                    className='w-full flex items-center justify-between pb-4'
                    variants={itemVariants} key={item.id}>
                    <img className='w-14 h-14 rounded-md object-cover object-bottom' src={item.img[0]} alt={item.alt}/>
                    <div className='px-4 flex-1'>
                      <div className='flex justify-between'>
                        <p className='text-md font-bold text-black capitalize'>{item.title}</p>
                        <button onClick={() => removeFromCart(item.id)}>
                          <TrashIcon/>
                        </button>
                      </div>
                      <div className='flex justify-between mt-2'>
                        <p className='text-md font-bold text-gray-400 capitalize'>{item.discountPrice}$ X {item.quantity}</p>
                        <p className='font-bold text-md'>{parseInt(item.discountPrice) * parseInt(item.quantity)}$</p>
                      </div>
                    </div>
                  </motion.li>
                )
              })
              }

            </motion.ul>
            <div>
              <hr className='text-grayish-blue -mx-5' />
              <div className='flex flex-row items-center justify-between mt-6'>
                <p className='font-bold text-md'>Total</p>
                <p className='font-bold text-md'>{totalPay}$</p>
              </div>
              <button className='bg-green-400 hover:opacity-60 cursor-pointer w-full h-14 rounded-lg px-6 text-shadow-2xl text-white text-xl flex items-center gap-4 justify-center border shadow-md mt-6'>
              Checkout
              </button>
            </div>
          </>
          : <p className='text-center text-gray-400'>Your cart is empty</p>

      }
    </motion.div>
  )
}
