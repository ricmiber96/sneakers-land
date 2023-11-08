import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { AllProducts as productDefault } from '../../utils/data.js'
import CollectionHero from '../collections/CollectionHero.jsx'
import ProductItem from './ProductItem.jsx'

export default function ProductsGrid (props) {
  const location = useLocation()
  const gender = location.pathname.split('/')[2]
  const [productsFiltered, setProductsFiltered] = useState([])
  let productsFilteredByGender = productDefault.filter((product) => (product.category[0].gender.includes(gender)))
  console.log(productsFilteredByGender)

  useEffect(() => {
    setProductsFiltered([])
    productsFilteredByGender = productDefault.filter((product) => (product.category[0].gender.includes(gender)))
    setProductsFiltered(productsFilteredByGender)
    console.log(productsFilteredByGender, gender)
  }, [gender])

  return (
    <section className='max-w-7xl flex-col h-full flex relative mx-auto gap-10 mb-28'>
      <CollectionHero collections={gender}/>
      <div className='max-w-7xl'>
        <div className='grid grid-cols-3 gap-y-8 gap-x-6'>

          {
            productsFiltered.map((product) => {
              return (
                <ProductItem key={product.id} product={product}/>
              )
            })
          }

        </div>

      </div>

    </section>
  )
}
