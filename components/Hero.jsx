import React, { useState } from 'react';
import CoinItem from './CoinItem';
import Link from 'next/link';
import { useRouter } from 'next/router';
import coin from '../pages/coins/[coin].js';

const Hero = ( props ) => {
  
    const [name, setName] = useState('')

    function handleChange(e) {
        var lowerCase = e.target.value.toLowerCase();
        setName(lowerCase);
    }

    function handleSubmit(e) {
        e.preventDefault();
        onSubmit(name)
        setName("")
    }
  
    const router = useRouter();

    return (
    <div className='h-screen bg-[#A6A5B7] max-w-5xl mx-auto mt-20'>
        <form onSubmit={handleSubmit} className='flex justify-center p-10'>
            <input type="text"
            id="crypto-search"
            className="neumorph mr-2 form-control block w-full px-3 py-1.5 text-base font-normal bg-white bg-clip-padding text-white rounded transition ease-in-out m-0
            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            name="text"
            autoComplete='off'
            value={name}
            onChange={handleChange}
            />
            <button type="submit" className='neumorph px-6 py-2.5 bg-[#A6A5B7] text-gray-900 text-xs leading-tight uppercase rounded shadow-lg hover:bg-[#CCCCD8] hover:shadow-lg focus:bg-[#84849C] focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out font-bold hover:text-gray-800'>
            Search
            </button>
        </form>
            <div className='flex justify-center px-10 pb-10 '>
                <div>
                    <div className='neumorph flex flex-row justify-between align-middle rounded-lg font-bold my-8 mx-4 py-3 px-4 space-x-32 text-center shadow-md'>
                        <p>#</p>
                        <p className=''>Coin</p>
                        <p>Price</p>
                        <p>24h</p>
                        <p className='hidden sm:flex'>Volume</p>
                        <p className='hidden sm:flex'>Mkt Cap</p>

                    </div>
                    {props.coins.map(coins => {
                        return(
                            <Link href={`/coins/${coins.id}`} key={coins.id}>
                                <CoinItem coins={coins} />
                            </Link>
                        )
                    })}
                </div>
            </div>

    </div>
  )
}

export default Hero