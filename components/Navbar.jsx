import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
  return (
    <Link href='/' scroll={true}>
    <div className='bg-[#A6A5B7] drop-shadow-lg w-screen fixed top-0'>
        <div className='flex items-center py-2 px-20 neumorph2'>
            <p className='text-3xl font-bold mr-2 uppercase'>CryptoSearcher</p>
              <Image src="/world.png" alt="world"  width={30} height={30} className='loguito'/>
        </div>
    </div> 
    </Link>
  )
}

export default Navbar