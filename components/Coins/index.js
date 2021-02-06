import React from 'react'
import styles from './Coins.module.css';

const Coins = ({ name, price, symbol, marketcap, volume, image, priceChange, id }) => {
  return (
    <div className={styles.coinContainer}>
      <div className={styles.coinRow}>
        <div className={styles.coin}>
          <img src={image} alt={name} className={styles.coinImg} />
          <h1 className={styles.coinH1}>{name}</h1>
          <p className={styles.coinSymbol}>{symbol}</p>
        </div>
        <div className={styles.coinData}>
          <p className={styles.coinPrice}>${price}</p>
          <p className={styles.coinVolume}>${volume.toLocaleString()}</p>
          {
            priceChange < 0 ?(
              <p className={styles.coinPercent, styles.red}>
                {priceChange.toFixed(2)}%
              </p>
            ) : (
              <p className={styles.coinPercent, styles.green}>
                {priceChange.toFixed(2)}%
              </p>
            )
          }
          <p className={styles.coinMarketcap}>
            Mkt Cap: ${marketcap.toLocaleString()}
          </p>
        </div>
      </div>
    </div>
  )
}

export default Coins
