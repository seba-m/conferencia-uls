import Image from "next/image"

import logo_cec_ped_bio from '@/img/logo_cec_ped_bio.jpeg'
import logo_ingecomp from '@/img/logo_ingecomp.png'
import Logo_LIITEC from '@/img/Logo LIITEC.png'
import logo_lab_ia from '@/img/logo_lab_ia.png'

export default function Footer() {
    return (
        <footer class="bg-white shadow dark:bg-gray-900">
            <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                <div>
                    <div class="flex flex-col md:flex-row md:justify-between md:items-center">
                        <div class="flex flex-col mb-4 md:mb-0">
                            <h2 className="uppercase text-white font-bold">organiza:</h2>
                            <div class="flex flex-row items-center">
                                <Image src={logo_cec_ped_bio} alt="Logo CEC Pedagogía en Biología" width={150} height={150} className='rounded-full' />
                                <Image src={logo_ingecomp} alt="Logo INGECOMP" width={150} height={150} className='rounded-full' />
                            </div>
                        </div>
                        <div class="flex flex-col mb-4 md:mb-0">
                            <h2 className="uppercase text-white font-bold">auspicia:</h2>
                            <div class="flex flex-row items-center">
                                <Image src={Logo_LIITEC} alt="Logo LIITEC" width={150} height={150} className='rounded-full' />
                                <Image src={logo_lab_ia} alt="Logo Laboratorio de Inteligencia Artificial" width={150} height={150} className='rounded-full' />
                            </div>
                        </div>
                    </div>
                </div>

                <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                <p class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
                    Diseñado por <a className="font-medium text-blue-600 underline dark:text-blue-500 no-underline" href="https://github.com/Arlezz">Antony Rodriguez </a>
                    y Programado por <a className="font-medium text-blue-600 underline dark:text-blue-500 no-underline" href="https://www.sebamorgado.com/">Sebastian Morgado</a> 
                </p>
            </div>
        </footer>


    )
}
