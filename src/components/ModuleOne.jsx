import Image from 'next/image'

import humbertoPhoto from '@/img/humberto.jpg'

export default function ModuleOne() {
    return (
        <section name="module1">
            <div className={`container mx-auto flex flex-col items-center`}>
                <h2 className="text-[#0e21a0] text-4xl font-bold uppercase mt-7">módulo 1</h2>
                <h3 className="text-4xl font-bold">Revolución de la Inteligencia Artificial</h3>
                <p className="text-justify text-xl my-5 max-w-3xl">
                    La Inteligencia Artificial es una tecnología disruptiva que está dando forma a nuevos paradigmas en nuestra sociedad. El presente módulo se propone explorar en profundidad el impacto y las posibilidades de estas nuevas tecnologías que están moldeando nuestro futuro.
                </p>

                <div className="grid grid-cols-2 mt-7 lg:divide-x-4 divide-[#0ec2d7] max-w-4xl pb-8">
                    <div className="col-span-1 md:col-span-2 lg:col-span-1 px-8 mb-5 flex flex-col items-center">
                        <h2 className="text-3xl font-bold max-w-xs text-center">"Inteligencia Artificial, una Nueva Era"</h2>
                        <h4 className="text-[#0ec2d7] text-3xl text-center font-medium mb-3">13:45 - 14:00 hrs.</h4>

                        <h5 className='font-medium text-2xl text-center'>Martín Pizarro C.</h5>
                        <h5 className='text-xl mb-5 text-center'>Estudiante Ingeniería en Computación</h5>

                        <p className="text-justify text-xl max-w-sm">
                            Hoy por hoy, es imposible no encontrarse con el término “Inteligencia Artificial”. Grandes empresas como Google, Meta, OpenAI, Tesla, han impulsado su desarrollo, elaborando modelos de lenguaje que imitan a un locutor humano (como ChatGPT), Inteligencias Artificiales que hacen arte: música, dibujo, escritura; que posibilitan la detección temprana de cáncer (Sybil, MIT), y un largo etcétera. Durante los últimos años, se ha notado un desarrollo masivo de la Inteligencia Artificial, la cual nos está cambiando como sociedad de cierta manera.
                        </p>
                    </div>

                    <div className="col-span-1 md:col-span-2 lg:col-span-1 px-8 flex flex-col items-center">
                        <h2 className="text-3xl font-bold max-w-xs text-center">"Inteligencia Artificial y Ética"</h2>
                        <h4 className="text-[#0ec2d7] text-3xl font-medium mb-3">14:25 - 14:50 hrs.</h4>

                        <h5 className='font-medium text-2xl '>Bairon Tapia M.</h5>
                        <h5 className='text-xl mb-5 text-center'>Estudiante Ingeniería en Computación</h5>

                        <p className="text-justify text-xl max-w-sm">
                            Los avances en el campo de la Inteligencia Artificial podrían tener importantes repercusiones en el desarrollo de la humanidad. Sin embargo, el basto poder y potencial de estas tecnologías se ha visto atenuado últimamente por la preocupación sobre los riesgos que entrañan su uso. La presente charla se centrará en los dilemas éticos fundamentales de la IA, cuyas respuestas no son fácilmente discernibles.
                        </p>
                    </div>
                </div>
            </div>
            <div className='bg-[#ededed]'>
                <div className="container mx-auto flex flex-col items-center p-8">
                    <h2 className="text-3xl font-bold max-w-md text-center">"Inteligencia Artificial: Mitos y Realidades"</h2>
                    <h4 className="text-[#0ec2d7] text-2xl font-medium mb-3 text-center">15:05 - 15:35 hrs.</h4>

                    <div className='grid grid-cols-2 items-center mb-5'>
                        <div className='flex flex-col items-center'>
                            <Image src={humbertoPhoto} alt="Humberto" width={150} height={150} className='rounded-full' />
                            <h5 className='font-medium text-2xl text-center'>Dr. Humberto Farías A.</h5>
                            <h5 className='text-xl mb-5 text-center'>Dr. Ingeniería Informática</h5>
                        </div>
                        <div>
                            <p className="text-justify text-xl max-w-lg">
                                Frente a la Inteligencia Artificial, diferentes mitos han surgido debido a la ignorancia sobre el tema. La charla propone desmentir los mitos que existen, así como también afirmar realidades que se van dando a lo largo de la evolución de este campo.
                            </p>
                        </div>
                    </div>

                    <h2 className="text-3xl font-bold max-w-sm text-center">Taller de Inteligencia Artificial</h2>
                    <h4 className="text-[#0ec2d7] text-2xl font-medium mb-3 text-center">15:35 - 16:00 hrs.</h4>
                </div>
            </div>
        </section>
    )
}