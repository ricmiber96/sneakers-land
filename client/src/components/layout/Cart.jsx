import React, { useContext } from 'react'
import { motion } from 'framer-motion'
import { CartContext } from '../../context/CartContext'

export default function Cart ({ isOpen }) {
  const { state, dispatch } = useContext(CartContext)
  console.log(state)

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
      className='absolute top-28  bottom-40 inset-x-2 lg:left-auto xl:right-24 lg:-mr-2 p-5 max-w-xl lg:max-w-sm lg:w-full mx-auto min-h-xs h-fit flex flex-col bg-white z-20 shadow-xl rounded-lg'
      initial={{ opacity: 0 }}
      variants={variants}
      animate={isOpen ? 'open' : 'closed' }>
      <div className='mb-4'>
        <h3 className='font-bold pb-5 text-lg'>Cart</h3>
        <hr className='text-grayish-blue -mx-5' />
      </div>
      <motion.ul
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
        {
          state.items.map((item) => {
            return (
              <motion.li variants={itemVariants} key={item.id}>
                <div className='flex flex-col items-center justify-between mb-6'>
                  <div className='flex flex-row items-center gap-x-2'>
                    <img className='w-14 h-14 rounded-md object-cover object-bottom' src={item.img[0]} alt={item.alt}/>
                    <div className='flex flex-col text-left'>
                      <p className='text-md font-bold text-black capitalize'>{item.title}</p>
                      <p className='font-bold text-md'>{item.discountPrice}$</p>
                    </div>
                  </div>
                </div>
              </motion.li>
            )
          })
        }
        <div>
          <hr className='text-grayish-blue -mx-5' />
          <div className='flex flex-row items-center justify-between mt-6'>
            <p className='font-bold text-md'>Total</p>
            <p className='font-bold text-md'>{state.items.length}</p>
          </div>
          <button className='bg-green-400 hover:opacity-60 cursor-pointer w-full h-14 rounded-lg px-6 text-shadow-2xl text-white text-xl flex items-center gap-4 justify-center border shadow-md mt-6'>
            Checkout
          </button>
        </div>
      </motion.ul>
    </motion.div>
  )
}
