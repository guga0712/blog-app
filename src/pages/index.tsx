import type { NextPage } from 'next'
import Head from 'next/head'
import AboutUs from '../components/AboutUs'
import Gallery from '../components/Gallery'
import { Header } from '../components/Header'
import { Introduction } from '../components/Introduction'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Our blog</title>
      </Head>
      <Header />
      <Introduction />
      <Gallery />
      <AboutUs />
    </>
  )
}

export default Home
