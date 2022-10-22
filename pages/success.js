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
        <h1>Astro Charts</h1>
        <h2>Horoscope:</h2>
        <img src="test.jpg" />
      </main>

      <Footer />
    </div>
  )
}
