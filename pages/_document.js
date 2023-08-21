import { Html, Head, Main, NextScript } from 'next/document' 

export default function Doument() {
    return (
        <Html>
            <Head> 
                <meta name='description' content='GuitarLa - Venta de guitarras y blog de musica'/>
                    {/* Google Fonts */}
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin={'true'}/>
                <link href="https://fonts.googleapis.com/css2?family=Lato:wght@400;700;900&family=Outfit:wght@400;700;900&display=swap" rel="stylesheet"/>
                    {/* Normalize */}
                <link rel='stylesheet' href='https://necolas.github.io/normalize.css/8.0.1/normalize.css' />
            </Head>

            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}