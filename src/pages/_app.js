import '@/styles/globals.css'

import { Analytics } from '@vercel/analytics/react';

import CustomHead from '@/components/CustomHead'

export default function App({ Component, pageProps }) {
  return (
    <>
      <CustomHead />
      <Component {...pageProps} />
      <Analytics />
    </>
  )
}
