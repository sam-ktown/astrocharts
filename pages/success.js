import Head from 'next/head'
import Link from 'next/link'

import Footer from '@components/Footer'

export default function Success() {
  return (
    <div className="container">
      <Head>
        <title>Astro Charts</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Horoscope:</h1>
        <img src="test.jpg">
      </main>

      <Footer />
    </div>
  )
}
