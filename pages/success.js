import Head from 'next/head'
import Link from 'next/link'

import Header from "@components/Header";
import Footer from '@components/Footer'

export default function Success() {
  var nameValue = '';
  if (typeof window !== 'undefined') {
    nameValue = document.feedback.name.value;
  }

  return (
    <div className="container">
      <Head>
        <title>Astro Charts</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Astro Charts" />

        <h2>{nameValue} Horoscope:</h2>
        <img src="test.jpg" />
      </main>

      <Footer />
    </div>
  )
}
