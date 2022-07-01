import type { NextPage } from 'next'
import Head from 'next/head'
import AboutUs from '../components/AboutUs'
import Footer from '../components/Footer'
import Gallery from '../components/Gallery'
import { Header } from '../components/Header'
import { Introduction } from '../components/Introduction'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Our blog</title>
        <link rel="icon" type="image/png" href="/blog.png" />
      </Head>
      <Header />
      <Introduction />
      <Gallery />
      <AboutUs />
      <Footer />
    </>
  )
}

export default Home
