// Home
import {Button} from '@/components/ui/button'
import Head from 'next/head';
import MarketingPage from './[marketing]/page';

export default function Home() {
  return (
    <>
    <Head>
      <link rel="icon" href="/collab-logo.svg" />
    </Head>
    <div className='px-4'>
      <MarketingPage/>
    </div>
    </>
  )
}
