import React from 'react';
import { Link } from 'react-router-dom';

const search = () => {
  return (
    <div>
        <div className="bg-black flex gap-[500px] items-center">
          <div>
            <p className="text-white text-xl p-4 pl-9 font-bold">TRAVOOO THE EXPLORER</p>
          </div>
          <div className="flex gap-10 p-4">
            <a className="text-md text-white  font-bold cursor-pointer hover:text-orange-400 hover:underline underline-offset-8 hover:font-bold" href="/">HOME</a>
            <a className="text-md text-white font-bold  cursor-pointer hover:text-orange-400 hover:underline underline-offset-8 hover:font-bold" href="/blog">BLOG</a>
            <a className="text-md text-white font-bold  cursor-pointer hover:text-orange-400 hover:underline underline-offset-8 hover:font-bold" href="/contact">CONTACT</a>
            <a className="text-md text-white font-bold  cursor-pointer hover:text-orange-400 hover:underline underline-offset-8 hover:font-bold" href="/search">SEARCH</a>
          </div>
        </div>
      <div className='bg-gray-400 h-screen w-full flex items-center justify-center '>
        <input className='h-[60px] w-[400px] rounded-xl p-2' type="text" placeholder='Search the blog' />
      </div>
    </div>
  )
}

export default search
