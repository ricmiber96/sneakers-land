import React from 'react'
import { Link } from 'react-router-dom'
import items from '../../utils/menuItems.json'
import iconImg from '../../assets/img/icon.png'

export default function Footer (props) {
  return (
    <footer className='text-white bg-gray-700 w-full'>
      <div className='py-12 max-w-xl mx-auto lg:max-w-7xl flex flex-col md:flex-row justify-center lg:justify-between items-center md:items-start"'>
        <div className='my-10'>
          <div>
            <Link to='/' className='cursor-pointer' aria-label='homepage'>
              <img src={iconImg} alt='' className='w-32'/>
            </Link>
          </div>
          <div className='social flex justify-between items-center mt-4'>
            <Link to='#' aria-label='facebook'>
              <i className='text-2xl hover:text-orange fab fa-facebook-square'></i>
            </Link>
            <Link to='#' aria-label='youtube'>
              <i className='text-2xl hover:text-orange fab fa-youtube'></i>
            </Link>
            <Link to='#' aria-label='twitter'>
              <i className='text-2xl hover:text-orange fab fa-twitter'></i>
            </Link>
            <Link to='#' aria-label='instagram'>
              <i className='text-2xl hover:text-orange fab fa-instagram'></i>
            </Link>
          </div>
        </div>
        <nav className='flex flex-col'>
          <ul className='grid grid-cols-2 grid-rows-3 gap-2'>
            {
              items.map((item, index) => {
                return (
                  <li className='font-bold' key={index}>
                    <a href={item.link}>
                      {item.label}
                    </a>
                  </li>

                )
              })
            }
          </ul>
        </nav>
      </div>
      <div className='w-full text-center pb-10'>
        © Copyright 2022{' '}
        <a
          href='https://hikmah-yousuph.vercel.app/'
          className='border-bottom rounded-sm shadow-[inset_0_-1px_0_0_#fff] hover:shadow-[inset_0_-4rem_0_0_#ff7d1a] hover:text-very-dark-blue py-1 transition-all duration-300'
        >
            Hikmah Yousuph.
        </a>{' '}
          All rights reserved.
      </div>
    </footer>
  )
}
