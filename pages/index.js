import Head from "next/head";
import Header from "../components/Header/Header";

export default function Home() {
  return (
    <div className="bg-white dark:bg-gray-800">
      <Head>
        <title>Gerardo Sabetta | Web developer</title>
        <html lang="en" />
        <meta
          property="og:title"
          content="Gerardo Sabetta | Web developer"
          key="title"
        />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <main className="container h-screen w-screen mx-auto px-4 flex justify-center items-center">
        <Header />
      </main>
    </div>
  );
}
