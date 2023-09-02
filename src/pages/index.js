import dynamic from 'next/dynamic'

import Hero from '@/components/Hero'
import Schedule from '@/components/Schedule'
import ModuleOne from '@/components/ModuleOne'
import ModuleTwo from '@/components/ModuleTwo'

import Footer from '@/components/Footer'

const CountDown = dynamic(() => import('../components/CountDown'), { ssr: false })

export default function Home() {
  return <>
    <main className={``}
    >
      <Hero />
      <Schedule />
      <ModuleOne />
      <ModuleTwo />

      <CountDown />
      <Footer />
    </main>
  </>
}
