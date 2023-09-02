import '@/styles/globals.css'

import CustomHead from '@/components/CustomHead'

export default function App({ Component, pageProps }) {
  return (
    <>
      <CustomHead />
      <Component {...pageProps} />
    </>
  )
}
