import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import iconImg from '../../assets/img/icon.png'
import items from '../../utils/menuItems.json'
import ShoppingCartIcon from '../Icons'

export default function Header (props) {
  const [selectedItem, setSelectedItem] = useState('Home')

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
                    items.map((item, index) => {
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
              <div className='flex items-center justify-between gap-6 md:order-2'>
                <ShoppingCartIcon/>
                <button type='button' className='text-white bg-green-400 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-green-400 shadow-lg'>Login</button>
                <button data-collapse-toggle='navbar-sticky' type='button' className='inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600' aria-controls='navbar-sticky' aria-expanded='false'>
                  <span className='sr-only'>Open main menu</span>
                  <svg className='w-5 h-5' aria-hidden='true' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 17 14'>
                    <path stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M1 1h15M1 7h15M1 13h15'/>
                  </svg>
                </button>
              </div>
            </div>
          </nav>

        </div>
        <div className='right flex items-center'>
          <Link to='/login'>
            <button className='bg-green-400 rounded-lg px-4 h-10 text-white flex items-center justify-center border shadow-md'>
                  Login
            </button>
          </Link>
        </div>
      </div>
    </header>
  )
}
