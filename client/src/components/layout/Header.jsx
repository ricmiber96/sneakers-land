import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import iconImg from '../../assets/img/icon.png'
import items from '../../utils/menuItems.json'
import { ShoppingCartIcon } from '../Icons'
import Cart from './Cart'
import { CartContext } from '../../context/CartContext'

export default function Header (props) {
  const [selectedItem, setSelectedItem] = useState('Home')
  const [isOpen, setIsOpen] = useState(false)
  const { state } = useContext(CartContext)

  const handleItemSelected = (item) => {
    setSelectedItem(item)
  }
  return (
    <header className='flex flex-col justify-center items-center z-10'>
      <div className='max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4'>
        <div className='left flex items-center'>
          <nav className='bg-white fixed w-full z-20 top-0 left-0 border-b'>
            <div className='max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4'>
              <Link to='/' className='flex items-center' onClick={() => handleItemSelected('Home')}>
                <img src={iconImg} className='h-20 mr-3' alt='Flowbite Logo'/>
              </Link>
              <div className='items-center justify-between  w-full md:flex md:w-auto md:order-1' id='navbar-sticky'>
                <ul className='flex flex-col p-6 md:p-0 mt-14 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white'>

                  {
                    items.slice(0, 5).map((item, index) => {
                      return (
                        <li key={index}>
                          <Link to={item.link} className={`block py-2 pl-3 pr-4 font-bold  ${selectedItem === item.label ? 'text-green-400' : 'text-black'} md:p-0`} onClick={() => handleItemSelected(item.label)}>
                            {item.label}
                          </Link>
                        </li>
                      )
                    })
                  }

                </ul>
              </div>
              <div className='flex items-center align-middle justify-between gap-12 md:order-2'>
                <div className='mx-3 relative'>
                  <div className='absolute -top-2'>
                    <div className='z-10 px-2 absolute rounded-full text-sm text-white -right-1/3 lg:-right-2/3 -top-3 bg-green-400'>
                      {state.items.length}
                    </div>

                    <button className={`${isOpen ? 'text-black' : 'text-gray-400'}`} onClick={() => setIsOpen(!isOpen)}>
                      <ShoppingCartIcon/>
                    </button>
                  </div>
                </div>
                <button type='button'
                  className='text-white bg-green-400 hover:bg-green-100 border border-green-400 hover:text-green-400 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-green-400 shadow-md'>
                  Login
                </button>
              </div>
            </div>
          </nav>
          <Cart isOpen={isOpen}/>
        </div>
        <div className='right flex items-center'>
          <Link to='/login'>
            <button className='bg-red-400 rounded-lg px-4 h-10 text-white flex items-center justify-center border shadow-md'>
                  Loginn
            </button>
          </Link>
        </div>
      </div>
    </header>
  )
}
