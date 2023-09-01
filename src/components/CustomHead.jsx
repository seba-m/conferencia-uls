import Head from 'next/head';

export default function CustomHead() {
    return (
        <Head>
            <title>Conferencia - ULS</title>
            <meta name="description" content="Conferencia de la Universidad de La Serena" />
            <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
            <link rel="shortcut icon" href="/favicon.ico" />
            <meta name="theme-color" content="#2a2a2a" />
        </Head>
    )
}
