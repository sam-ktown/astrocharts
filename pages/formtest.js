import Head from 'next/head'
import Link from 'next/link'

import Header from "@components/Header";
import Footer from '@components/Footer'

export default function Formtest(req, res) {

  // Get data submitted in request's body.
  const body = req.body

  // Optional logging to see the responses
  // in the command line where next.js app is running.
  console.log('body: ', body)
  
  return (
    <div className="container">
      <Head>
        <title>Astro Charts</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Form Test - Astro Charts" />

        <h2>{nameValue} Horoscope:</h2>
        <img src="test.jpg" />
      </main>

      <Footer />
    </div>
  )
}
