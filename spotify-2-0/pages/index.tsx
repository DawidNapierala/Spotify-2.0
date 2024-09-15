import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Sidebar from "../components/Sidebar";
import Center from "../components/Center";
import Player from "../components/Player";
import { getSession, GetSessionParams } from 'next-auth/react';
// const Home: NextPage = () => {
//   return (
//     <div className="bg-black h-screen overflow-hidden">
//       <Head>
//         <title>Spotify 2.0</title>
//         <link rel="icon" href="/favicon.ico" />
//       </Head>

//      <main className=''>
//        <Sidebar />
//        {/*Center */}
//      </main>
//      <div>{/*Player*/}</div>
//     </div>
//   );
// }

// export default Home

export default function Home() {
  return (

 <div className="bg-black h-screen overflow-hidden">
       <Head>
         <title>Spotify 2.0</title>
         <link rel="icon" href="/favicon.ico" />
       </Head>

      <main className="flex">
        <Sidebar />
        <Center />
      </main>
      <div className="sticky bottom-0">
        <Player />
        </div>
     </div>
   );
 }

 export async function getServerSideProps(context: GetSessionParams | undefined) {
  const session = await getSession(context);

  return {
    props: {
      session,
    },
  };
 }