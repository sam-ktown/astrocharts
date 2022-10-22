import Head from "next/head";
import Header from "@components/Header";
import Footer from "@components/Footer";
import FeedbackForm from "@components/FeedbackForm";
import DateInputForm from "@components/DateInputForm";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Astro Charts</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Astro Charts" />
        <img src="logo.png" />
        <hr />
        <p className="description">
          Birth Data Entry:
        </p>
        <DateInputForm />
      </main>
      <Footer />
    </div>
  );
}
