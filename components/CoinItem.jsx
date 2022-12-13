import React from 'react'
import Image from 'next/image'

const CoinItem = (props) => {
  return (
    <div className='container neumorph flex flex-row align-middle rounded-lg font-bold my-8 mx-4 py-3 px-4 space-x-40 items-center hover:scale-105  hover:transition ease-in-out delay-150 hover:cursor-pointer '>
        <p>{props.coins.market_cap_rank}</p>
        <div className='img-symbol uppercase flex-row flex items-center space-x-3'>
            <Image src={props.coins.image} alt='' width={40} height={40} className='' />
            <p>{props.coins.symbol}</p>
        </div>
        <p>${props.coins.current_price.toLocaleString()}</p>
        <p className='flex flex-row'>{props.coins.price_change_percentage_24h.toFixed(2)}%</p>
        <p className='hidden md:flex'>${props.coins.total_volume.toLocaleString()}</p>
        <p className='hidden md:flex flex-row'>${props.coins.market_cap.toLocaleString()}</p>
    </div>
  ) 
}

export default CoinItem