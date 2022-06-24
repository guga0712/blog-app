import type { NextPage } from 'next'
import AboutUs from '../components/AboutUs'
import Gallery from '../components/Gallery'
import { Header } from '../components/Header'
import { Introduction } from '../components/Introduction'

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <Introduction />
      <Gallery />
      <AboutUs />
    </>
  )
}

export default Home
