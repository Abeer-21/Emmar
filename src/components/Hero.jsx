import React from 'react';
import Typed from 'react-typed';


const Hero = () => {
  return (
    <div className='text-white'>
      <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
        <p className='text-orange-600 font-bold p-2'>
          FACILITATING THE PROCESS OF SELLING  
        </p>
        <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>
          Grow your business.
        </h1>
        <div className='flex justify-center items-center'>
          <p className='md:text-4xl sm:text-3xl text-xl font-bold py-4'>
            Fast, flexible and easy for
          </p>
          <Typed
          className='md:text-2xl sm:text-1xl text-xl  md:pl-4 pl-2'
            strings={['MANAGER', 'ACCOUNTANT', 'CLIENT']}
            typeSpeed={100}
            backSpeed={140}
            loop
          />
        </div>
        <p className='md:text-20px text-10px font-bold text-gray-500'>Monitor your business to increase flexibility for managers, clients, and accountant</p>
        <div className='flexDirection:row justifyContent:space-between'>
        <a href='/Client'> <button className=' bg-orange-600  hover:bg-orange-700 w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black'>Get Started</button></a>
        <a href='/Login'> <button className=' bg-orange-600  hover:bg-orange-700 w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black'>Login</button></a>
        </div>
        
      </div>
    </div>
  );
};

export default Hero;