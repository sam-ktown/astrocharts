import Head from "next/head";
import Header from "@components/Header";
import Footer from "@components/Footer";
import FeedbackForm from "@components/FeedbackForm";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Astro Charts</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Astro Charts</h1>
        <img src="logo.png" />
        <hr />
        <p className="description">
          Birth Data Entry:
        </p>
        <FeedbackForm />
      </main>
      <Footer />
    </div>
  );
}
