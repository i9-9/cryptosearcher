import React, { useState, useEffect } from 'react';
import Head from 'next/head'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import axios from 'axios';
import { useRouter } from 'next/router';


export default function Home() {
  
  const [coins, setCoins] = useState([])
  const [tableCoins, setTableCoins] = useState([]);

  const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false'

  useEffect(() => {
      axios.get(url).then((response) => {
          setCoins(response.data)
          setTableCoins(response.data)
          console.log(response.data)
      }).catch((error) => {
          console.log(error)
      })
  }, [])
  
  return (
    <div>
      <Head>
        <title>CryptoSearcher</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Hero coins={coins} table={tableCoins} />
    </div>
  )
}
