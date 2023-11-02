import React from 'react'
import items from '../../utils/menuItems.json'
import { Link } from 'react-router-dom'

export default function Header (props) {
  return (
    <header className='flex flex-col justify-center items-center z-10'>
      <div className='max-w-screen-xl flexflex flex-wrap items-center justify-between mx-auto p-4'>
        <div className='left flex items-center'>
          <nav className='menu pt-20 lg:border-b border-grayish-blue'>
            <ul className='flex font-bold text-center pt-2'>
              {
                items.map((item, index) => {
                  return (
                    <li className='relative h-12 lg:h-inherit' key={index}>
                      <Link to={item.link} className='absolute inset-0 mb-5 pt-[2.5px] lg:pt-0 lg:mb-0 lg:mx-4 lg:h-inherit lg:flex lg:items-center cursor-pointer lg:relative'>
                        {item.label}
                      </Link>
                    </li>
                  )
                })
              }
            </ul>
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
