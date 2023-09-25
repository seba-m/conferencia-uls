import Head from 'next/head';
import Script from 'next/script';

export default function CountDown() {
    return <>
        <Script type="text/javascript" src="/static/script.js" async />
        <a href="https://logwork.com/countdown-1i3t" className="countdown-timer" data-timezone="America/Sao_Paulo" data-language="es" data-date="2023-10-11 00:00">Seminario IT - ULS</a>
    </>
}
