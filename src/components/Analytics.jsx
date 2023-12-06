// eslint-disable-next-line no-unused-vars
import React from 'react';
import Laptop from '../assets/laptop.jpg';

const Analytics = () => {
  return (
    <div className='w-full bg-white py-16 px-4'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
        <img className='w-[500px] mx-auto my-4' src={Laptop} alt='/' />
        <div className='flex flex-col justify-center'>
          <p className='text-[#219ee6] font-bold '>DATA SAVE</p>
          <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Good and affordable place to store your data</h1>
          <p>
          example
          </p>
          <button className='bg-black text-[#219ee6] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3'>Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
