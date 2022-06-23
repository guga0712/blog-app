import type { NextPage } from 'next'
import Gallery from '../components/Gallery'
import { Header } from '../components/Header'
import { Introduction } from '../components/Introduction'

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <Introduction />
      <Gallery />
    </>
  )
}

export default Home
