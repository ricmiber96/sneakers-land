import React from 'react'
import colletions from '../../utils/collections.json'
import CollectionHero from './CollectionHero'

export default function CollectionsGrid ({ collections }) {
  return (
    <section className='max-w-7xl flex-col h-full flex relative mx-auto gap-10'>
      <CollectionHero/>
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
