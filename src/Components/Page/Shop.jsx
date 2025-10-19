import React from 'react'
import Products from './Shop/Products'

const Shop = () => {
  return (
<>
<section className='bg-[url(/Banner.png)] bg-cover bg-no-repeat bg-center h-screen text-white'>
<div className=" flex justify-center items-center h-full min-h-screen w-full">  
  <h1 className='text-4xl font-bold p-6'>Shop our product</h1>
</div>
</section>
{/* Product section  */}
<div className="">
    <Products headline={"What's your choise"}/>
</div>
</>
  )
}

export default Shop