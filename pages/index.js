import Layout from '../components/Layout'
import SearchBar from '../components/SearchBar'
import CoinList from '../components/CoinList'

export default function Home({filteredCoins}) {
  return (
    <Layout>
      <div className='coinApp'>
        <SearchBar type="text" />
        <CoinList filteredCoins={filteredCoins} />
      </div>
    </Layout>
  )
}

export const getServerSideProps = async () => {
  const res = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false')
  
  const filteredCoins = await res.json()

  return {
    props: {
      filteredCoins
    }
  }
}
