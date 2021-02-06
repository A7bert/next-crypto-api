import React from 'react'

const Coins = ({ name, price, symbol, marketcap, volume, image, priceChange, id }) => {
  return (
    <div className='coinContainer'>
      <div className='coinRow'>
        <div className='coin'>
          <img src={image} alt={name} className='coinImg' />
          <h1 className='coinH1'>{name}</h1>
          <p className='coinSymbol'>{symbol}</p>
        </div>
        <div className='coinData'>
          <p className='coinPrice'>${price}</p>
          <p className='coinVolume'>${volume.toLocaleString()}</p>
          {
            priceChange < 0 ?(
              <p className='coinPercent red'>
                {priceChange.toFixed(2)}%
              </p>
            ) : (
              <p className='coinPercent green'>
                {priceChange.toFixed(2)}%
              </p>
            )
          }
        </div>
      </div>
    </div>
  )
}

export default Coins
