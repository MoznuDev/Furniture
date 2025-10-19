import React, { useContext } from 'react';
import { FaSearch } from 'react-icons/fa';
import TooltipButton from '../../Components/Tooltipbutton';
import { BsMoon, BsSun } from 'react-icons/bs';
import { ThemeContext } from '../../context/ThemeContext';

const Hero = () => {
    const {isDarkMode, toggleTheme} = useContext (ThemeContext) 
    return (
        <section className="bg-[url(/Banner.png)] h-screen bg-cover bg-center " >

            <div className='relative md:pt-48 pt-28 px-4 text-center md:w-1/2 mx-auto space-y-8 text-white'>
                <h1 className="text-4xl lg:text-6xl lg:leading-tight leading-snug font-medium">Make your interior more minimalistic & modern</h1>
                <p className='text-xl lg:w-1/2 mx-auto '>Turn your room with panto into a lot more minimalist and modern with ease and speed</p>

                {/* Search field with input and icon */}
                <div className="relative inline-block z-30">
                    <input
                        type="text"
                        placeholder="Search furniture"
                        className="w-full md:w-80 px-6 py-2  bg-white/25 rounded-full border border-gray-300 text-white focus:outline-none"
                    />
                    <div className='absolute right-3 top-1/2 transform -translate-y-1/2 p-2 bg-primary rounded-full cursor-pointer'>
                        <FaSearch className="text-white " />
                    </div>
                </div>
            </div>

            {/* Overlay with small bottom blur effect */}
            <div className="absolute inset-x-0 -mb-2 bottom-0 h-3/4 bg-gradient-to-t from-white via-transparent to-transparent blur-sm"></div>

            {/* hover button for displaying box  */}
            {/* <BasicToolTip/> */}
            <div className='hidden xl:block absolute bottom-40 left-24'>
                <TooltipButton position="bottom" />
            </div>
            <div className='hidden xl:block absolute bottom-52 left-96'>
                <TooltipButton position="bottom" />
            </div>
            <div className='hidden xl:block absolute bottom-24 right-[820px]'>
                <TooltipButton position="bottom" />
            </div>

            {/* dark and light mode */}
             <div className="absolute bottom-16 right-16 z-40">
                <button onClick={toggleTheme} className='fucus:outline-none text-bold p-5 bg-black rounded-full'>
                   {
                    isDarkMode ? <BsSun className='text-yellow-300'/>: <BsMoon  className='text-yellow-300'/>
                   }
                </button>
             </div>
        </section>
    );
}

export default Hero;