import React, { useState, useEffect } from 'react' 
import axios from 'axios' 

export const getStaticPaths = async () => {
  const res = await fetch('https://api.coingecko.com/api/v3/coins/');
  const data = await res.json();

  const paths = data.map(coin =>{
    return {
      params: {id: coin.id.toString()}
    }
  })

  return {
    paths,
    fallback: false
  }
}

export const getStaticProps = async ( context ) => {
  const id = context.params.id;
  const res = await fetch('https://api.coingecko.com/api/v3/coins/' + id);
  const data = await res.json()

  return {
    props : { coin: data }
  }
}

const coin = ({ coin }) => {
  return (
    <div>
      <h1>{coin.name}</h1>
      <p>{ coin.symbol }</p>
    </div>
  )
}

export default coin