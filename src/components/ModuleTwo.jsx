import Image from 'next/image'

import franciscoPhoto from '@/img/francisco.jpg'

export default function ModuleOne() {
    return (
        <section name="module1">
            <div className="container mx-auto flex flex-col items-center px-3">
                <h2 className="text-[#0e21a0] text-4xl font-bold uppercase mt-6">módulo 2</h2>
                <h3 className="text-3xl lg:text-4xl font-bold">Innovación Tecnológica en Educación</h3>
                <p className="text-justify text-xl my-5 max-w-xl lg:max-w-3xl">
                    El mundo avanza junto a la tecnología y la educación no puede quedarse atrás. Podemos ver plasmada la innovación tecnológica en la educación por medio de material tecnológico, didáctico y pedagógico, que tiene por objetivo el mejoramiento de la calidad del proceso de enseñanza-aprendizaje.
                </p>

                <div className="grid grid-cols-2 mt-7 lg:divide-x-4 divide-[#0ec2d7] max-w-4xl pb-8">
                    <div className="px-8 lg:first:pl-0 lg:first:pr-10 lg:last:pl-10 lg:last:pr-0 last:pt-8 lg:last:pt-0 col-span-2 lg:col-span-1 flex flex-col items-center">
                        <h2 className="text-3xl font-bold max-w-xs text-center">&quot;Innovación Tecnológica en la Educación, un poco de historia&quot;</h2>
                        <h4 className="text-[#0ec2d7] text-3xl text-center font-medium mb-3">16:15 - 16:40 hrs.</h4>

                        <h5 className='font-medium text-2xl text-center'>Valentina Mossó K.</h5>
                        <h5 className='text-xl mb-5 text-center'>Estudiante Pedagogía en Biología y Cs. Naturales</h5>

                        <p className="text-justify text-xl max-w-xl lg:max-w-sm">
                            Se realizará un viaje histórico/científico sobre la Innovación Tecnológica en Educación en Chile, teniendo en cuenta las implicancias que significó la pandemia, el cambio de modalidad presencial a virtual y las diversas necesidades que surgieron a raíz del contexto, logrando crear, de esta manera, nuevas opciones y oportunidades que permitieran que el proceso de enseñanza-aprendizaje se diera de igual o mejor manera.
                        </p>
                    </div>

                    <div className="px-8 lg:first:pl-0 lg:first:pr-10 lg:last:pl-10 lg:last:pr-0 last:pt-8 lg:last:pt-0 col-span-2 lg:col-span-1 flex flex-col items-center">
                        <h2 className="text-3xl font-bold max-w-xs text-center">&quot;Tejidos animales en modelos impresos 3D: desde la visión microscópica a la manipulación concreta&quot;</h2>
                        <h4 className="text-[#0ec2d7] text-3xl font-medium mb-3">16:40 - 17:05 hrs.</h4>

                        <h5 className='font-medium text-2xl text-center'>Diego Cortés U. & Valentina Ledezma R.</h5>
                        <h5 className='text-xl mb-5 text-center'>Estudiantes Pedagogía en Biología y Cs. Naturales</h5>

                        <p className="text-justify text-xl max-w-xl lg:max-w-sm">
                            Exploraremos cómo la histología, la rama de la biología que estudia los tejidos biológicos en su estructura microscópica, puede avanzar hacia el mundo tridimensional (3D). Abordaremos cómo esta innovación mejorará el aprendizaje al proporcionar una comprensión más completa de la forma y distribución de los tejidos, beneficiando a estudiantes de carreras del área de la salud y pedagogías.
                        </p>
                    </div>
                </div>
            </div>
            <div className='bg-[#ededed] px-3 py-7'>
                <div className="container mx-auto flex flex-col items-center">
                    <h2 className="text-3xl font-bold max-w-md text-center">&quot;Ciencia y su Aprendizaje: Aplicaciones Móviles con Realidad Aumentada&quot;</h2>
                    <h4 className="text-[#0ec2d7] text-2xl font-medium mb-3 text-center">17:20 - 17:50 hrs.</h4>

                    <div className='grid grid-cols-2 items-center mb-5'>
                        <div className='col-span-2 lg:col-span-1 flex flex-col items-center'>
                            <Image src={franciscoPhoto} alt="Humberto" width={150} height={150} className='rounded-full' />
                            <h5 className='font-medium text-2xl text-center'>Francisco López C.</h5>
                            <h5 className='text-xl mb-5 text-center'>Director Ejecutivo LIITEC</h5>
                        </div>
                        <div className='col-span-2 lg:col-span-1'>
                            <p className="text-justify text-xl max-w-xl lg:max-w-lg">
                                En la charla se expondrá una serie de aplicaciones móviles de realidad aumentada creadas en el Laboratorio de Investigación e Innovación Tecnológica para la Educación en Ciencias de la Universidad de La Serena (LIITEC-ULS), que corresponde a una iniciativa académica que produce Recursos Tecnológicos Educativos (RTE), siendo estos de apropiación pública, además de estar validados científica y pedagógicamente para apoyar a escolares y estudiantes de educación superior. Por medio de estos recursos tecnológicos se genera un aprendizaje significativo, integral y motivador en la educación de las Ciencias, permitiendo el perfeccionamiento de los procesos de enseñanza y aprendizaje, logrando transformar la manera en que los estudiantes adquieren conocimientos y el cómo los educadores facilitan el aprendizaje.
                            </p>
                        </div>
                    </div>

                    <h2 className="text-3xl font-bold max-w-sm text-center">Taller de Realidad Aumentada</h2>
                    <h4 className="text-[#0ec2d7] text-2xl font-medium mb-3 text-center">17:50 - 18:15 hrs.</h4>
                </div>
            </div>
        </section>
    )
}
