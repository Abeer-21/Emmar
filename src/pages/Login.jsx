import React from 'react'
import LogPage from '../assets/LogPage.jpg'
import Client from './Client'


export default function Login() {

  return (
    <div style={{backgroundColor:'white'}}>
    <div className= 'text-black'>
    <div className='w-full h-screen flex'>
        <div className='grid grid-cols-1 md:grid-cols-2 m-auto h-[550px] shadow-lg shadow-gray-600 sm:max-w-[900px]'>
            <div className='w-full h-[550px] hidden md:block'>
                <img className='w-full h-full' src={LogPage} alt="/" />
            </div>
            <div className='p-4 flex flex-col justify-around'>
                <form>
                    <h2 className='text-4xl font-bold text-center mb-8'>Emar</h2>
                    <div>
                        <input className='border p-2 mr-2' type="text" placeholder='Username' />
                        <input className='border p-2' type="password" placeholder='Password' />
                    </div>
                    
                    <a href='/Client'> <button className='w-full py-2 my-4 bg-orange-600 hover:bg-orange-700'> Log In</button></a>
                    
                    <p className='text-center'>Forgot Username or Password?</p>
                </form>
                
            </div>
        </div>
    </div>
    </div>
    </div>
    
  )
}