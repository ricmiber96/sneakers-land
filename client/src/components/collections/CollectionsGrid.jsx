import React from 'react'
import collectionImg from '../../assets/img/collectionHeader.jpg'
import colletions from '../../utils/collections.json'

export default function CollectionsGrid (props) {
  return (
    <section className='max-w-7xl flex-col h-full flex relative mx-auto gap-10'>
      <div className='h-52 flex items-center justify-center'>
        <h2 className='capitalize font-bold bg-gradient-to-r from-lime-400 to-lime-700 bg-clip-text text-transparent z-10 relative  text-3xl sm:text-4xl sm:leading-none pb-16 px-8'>Collections</h2>
        <div className='absolute top-0 left-0 -z-0 w-full h-52 rounded-md overflow-hidden'>
          <img
            src={collectionImg}
            alt='Sneaker collection'
            className='opacity-40 h-full w-full object-cover'/>
        </div>
      </div>
      {/* <div className='grid grid-cols-3 grid-rows-2 gap-10 justify-center items-center content-center'> */}
      <div className='flex items-center justify-center'>
        <div className='grid grid-cols-3 gap-16 content-center'>
          {
            colletions.map((colletion, i) => {
              return (
                <div key={colletion.id} className='w-64 h-60 flex items-center justify-center bg-green-300 rounded-md'>
                  <picture className='mx-auto'>
                    <img className='p-8' src={colletion.imagePath}/>
                  </picture>
                </div>
              )
            })
          }
        </div>
      </div>

    </section>
  )
}
