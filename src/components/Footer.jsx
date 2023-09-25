import Image from "next/image";

import logo_cec_ped_bio from "@/img/logo_cec_ped_bio.jpeg";
import logo_ingecomp from "@/img/logo_ingecomp.png";
import Logo_LIITEC from "@/img/Logo LIITEC.png";
import logo_lab_ia from "@/img/logo_lab_ia.png";

export default function Footer() {
    return (
        <footer className="bg-white shadow dark:bg-gray-900">
            <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                <div className="flex flex-col md:flex-row md:justify-between md:items-center mx-7">
                    <div className="flex-1 flex-row mb-4 md:mb-0">
                        <h2 className="uppercase text-white font-bold text-2xl mb-6 lg:mb-4">
                            organiza:
                        </h2>
                        <div className="flex flex-row items-center justify-evenly">
                            <div className="max-w-xs mx-auto">
                                <Image
                                    src={logo_cec_ped_bio}
                                    alt="Logo CEC Pedagogía en Biología"
                                    width={150}
                                    height={150}
                                    className="rounded-full"
                                    sizes="(max-width: 768px) 30vw, (max-width: 1200px) 12vw, 10vw"
                                    style={{ height: "100%", width: "100%" }}
                                />
                            </div>
                            <div className="max-w-xs mx-auto">
                                <Image
                                    src={logo_ingecomp}
                                    alt="Logo INGECOMP"
                                    width={150}
                                    height={150}
                                    className="rounded-full"
                                    sizes="(max-width: 768px) 30vw, (max-width: 1200px) 12vw, 10vw"
                                    style={{ height: "100%", width: "100%" }}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="flex-1 flex-row mb-4 md:mb-0">
                        <h2 className="uppercase text-white font-bold text-2xl :mb-4">
                            patrocina:
                        </h2>
                        <div className="flex flex-row items-center justify-evenly">
                            <div className="relative mx-auto">
                                <Image
                                    src={Logo_LIITEC}
                                    alt="Logo LIITEC"
                                    width={380}
                                    height={150}
                                    sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 22vw"
                                    style={{ height: "100%", width: "100%" }}
                                />
                            </div>
                            <div className="max-w-xs mx-auto">
                                <Image
                                    src={logo_lab_ia}
                                    alt="Logo Laboratorio de Inteligencia Artificial"
                                    width={150}
                                    height={150}
                                    className="rounded-full"
                                    sizes="(max-width: 768px) 30vw, (max-width: 1200px) 14vw, 13vw"
                                    style={{ height: "100%", width: "100%" }}
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                <p className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
                    Diseñado por{" "}
                    <a
                        className="font-medium text-blue-600 underline dark:text-blue-500 no-underline"
                        href="https://github.com/Arlezz"
                    >
                        Antony Rodriguez
                    </a>
                    {" "} y Programado por {" "}
                    <a
                        className="font-medium text-blue-600 underline dark:text-blue-500 no-underline"
                        href="https://www.sebamorgado.com/"
                    >
                        Sebastian Morgado
                    </a>
                </p>
            </div>
        </footer>
    );
}
