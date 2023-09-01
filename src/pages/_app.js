import '@/styles/globals.css'

import Head from 'next/head';

export default function App({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <script type="text/javascript" src="/static/script.js"></script>
      </Head>
      <Component {...pageProps} />
    </div>
  )
}
