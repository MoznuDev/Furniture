import React from 'react'
import Hero from '../Layout/Hero'
import WhyChoose from '../WhyChoose'
import Products from './Shop/Products'
import Exprence from '../Exprence'
import Materials from '../Materials'
import Testimonials from './Home/Testimonials'






const Home = () => {
  return (
   <div className="">
    <Hero/>
    <WhyChoose/>
    <Products headline="Best sealing Products"/>
    <Exprence/>
    <Materials/>
    <Testimonials/>
   </div>
  )
}

export default Home