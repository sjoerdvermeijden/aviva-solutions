import Head from "next/head";

import Layout from '../components/Layout/Layout'
import Panorama from '../components/Panorama/Panorama'
import Items from '../components/Items/Items'

import localFont from 'next/font/local'

const inter = localFont({
  src: [
    {
      path: '../../public/fonts/Inter/static/Inter_18pt-ExtraLight.ttf',
      weight: '300'
    },
    {
      path: '../../public/fonts/Inter/static/Inter_18pt-Light.ttf',
      weight: '400'
    },
    {
      path: '../../public/fonts/Inter/static/Inter_18pt-SemiBold.ttf',
      weight: '700'
    }
  ],
})

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={inter.className}>
        <Layout>
          <Panorama />
          <Items />
        </Layout>
      </main>
    </>
  );
}
