import Image from 'next/image'
import uls from '@/img/uls.jpg'

export default function Schedule() {
    return (
        <section name="schedule" className='bg-[#ededed]'>
            <div className="container mx-auto grid grid-cols-12 gap-6">
                <div className="col-span-12 sm:col-span-12 md:col-span-12 lg:col-span-6 xl:col-span-6 2xl:col-span-6 m-2 mb-7">
                    <h2 className="text-[#0e21a0] text-5xl font-bold uppercase my-7">cronograma</h2>
                    <h3 className="text-3xl font-bold uppercase">introducción al seminario</h3>
                    <h4 className="text-[#0ec2d7] text-2xl font-bold mb-7">13:45 - 14:00 hrs.</h4>

                    <p className="text-xl mb-5">
                        El mundo actual está en constante evolución, y la tecnología es un factor clave en este proceso.
                    </p>
                    <p className="text-xl">
                        El Seminario de Innovación Tecnológica es una oportunidad única para nuestra universidad de aprender y explorar cómo la tecnología está transformando los diferentes campos y cómo podemos adaptarnos a los cambios para mantenernos a la vanguardia.
                    </p>
                </div>

                <div className="col-span-12 sm:col-span-12 md:col-span-12 lg:col-span-6 xl:col-span-6 2xl:col-span-6 flex justify-center items-center">
                    <Image
                        src={uls}
                        style={{ width: '25rem', height: '18rem', 'object-fit': 'cover' }}
                        alt="Casa Central ULS"
                    />
                </div>
            </div>
        </section>
    )
}
