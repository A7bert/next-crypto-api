import styles from './Search.module.css'

const SearchBar = (...rest) => {
  return (
    <div className={styles.coinSearch}>
      <input className={styles.coinInput} {...rest} placeholder="Search" />
    </div>
  )
}

export default SearchBar;
