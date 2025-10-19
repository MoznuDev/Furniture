import React from 'react'
import Materials from '../Materials'
import Testimonials from './Home/Testimonials'

const Contract = () => {
  return (
    <section className='max-w-screen-2xl mx-auto '>
 <div className="bg-[url(/Contractbg.png)] bg-cover bg-no-repeat bg-center h-screen flex justify-center items-center text-white hover:text-primary">
 <h2 className='text-4xl font-bold'>Contract page</h2>
 </div>
  <Materials/>
  <Testimonials/>
    </section>
  )
}

export default Contract