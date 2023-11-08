import React from 'react'
import collectionImg from '../../assets/img/collectionHeader.jpg'

export default function CollectionHero ({ collections }) {
  return (
    <div className='h-52 flex items-center justify-center'>
      <h2 className='capitalize font-bold bg-gradient-to-r from-lime-400 to-lime-700 bg-clip-text text-transparent z-10 relative  text-3xl sm:text-4xl sm:leading-none pb-16 px-8'>
        {collections || 'Collections'}
      </h2>
      <div className='absolute top-0 left-0 -z-0 w-full h-52 rounded-md overflow-hidden'>
        <img
          src={collectionImg}
          alt='Sneaker collection'
          className='opacity-40 h-full w-full object-cover'/>
      </div>
    </div>
  )
}
