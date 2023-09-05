import styles from '@/styles/components/Hero.module.scss'
import Image from 'next/image'

import Link from 'next/link'

import logoUls from '@/img/logo_uls.png'

export default function Hero() {
    return (
        <section name="hero" className={styles.hero}>
            <div className={`container mx-auto`}>
                <Image
                    src={logoUls}
                    width={250}
                    height={100}
                    alt="Logo ULS"
                />

                <div className='flex flex-col items-center'>
                    <h3 className="text-white text-center text-2xl md:text-4xl lg:text-5xl font-bold uppercase mb-4">
                        seminario
                    </h3>

                    <h1 className="text-white text-center text-4xl md:text-8xl lg:text-9xl font-bold uppercase mb-6">
                        innovación tecnológica
                    </h1>

                    <p className="text-white text-center text-2xl md:text-4xl">
                        11 de Octubre 2023 desde las 13:45 - 19:00 hrs.
                    </p>
                    <p className="text-white text-center text-lg md:text-2xl lg:text-4xl my-3">
                        Salón Pentágono, Campus Andrés Bello, Universidad de La Serena
                    </p>
                    <Link target="_blank" href="https://docs.google.com/forms/d/e/1FAIpQLSfAM8MebqqQaPOKYqpB0QpKhq6zaIO8p7UpgOrTgXwflfArzw/viewform" className="bg-[#1f7bfe] hover:bg-blue-700 text-xl text-white font-bold py-2 px-4 rounded-full mt-5" >
                        Inscribirse
                    </Link>
                </div>
            </div>
        </section>
    )
}
