import Head from "next/head";
import Banner from "@/components/banner/banner";
import Header from "@/components/haeder/header";
import NavSection from "@/components/navSection/navSection";
import Logo2 from "../../public/img/Logo2.svg"

export default function Home() {
  return (
    <>
      <Head>
        <title>Moglix Business App</title>
        <meta name="description" content="Moglix Business App" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="https://www.moglix.com/" />
        <meta
          property="og:image"
          content={
            Logo2
          }
        />
      </Head>
      <Header />
      <Banner />
      <NavSection />
    </>
  );
}
