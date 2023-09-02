import dynamic from 'next/dynamic'
import Head from 'next/head';

export default function CountDown() {
    return <>
        <Head>
            <script type="text/javascript" src="/static/script.js"></script>
        </Head>

        <a href="https://logwork.com/countdown-1i3t" className="countdown-timer" data-timezone="America/Sao_Paulo" data-language="es" data-date="2023-10-11 00:00">Conferencia - ULS</a>
    </>
}
