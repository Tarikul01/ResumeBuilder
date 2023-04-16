import React from 'react'
import { plansData } from '../data/plansData'
import Card from './Card'

const CardGrid = () => {
  return (
    <>
      <div className="h-full  px-6 py-12 lg:flex lg:justify-center lg:items-center">
      <div className="grid lg:grid-cols-3 gap-12 lg:gap-0">
      {
        plansData.map(plan=> (
          <div className={`w-full max-w-md mx-auto ${
            plan.featured ? 'order-first lg:order-none lg:scale-110 lg:transform lg:z-10':'lg:transform lg:scale-90'
          }`}>
          <Card{...plan}  />
          </div>
        ))
      }
      
       </div>

       
    </div>
    </>
  )
}

export default CardGrid
