
import Head from 'next/head'
import Header from './Header'
import Footer from './Footer'

function layout({children, title = '', description = ''}) {

  return (
    <>
        <Head>
            <title>{`GuitarLa - ${title}`}</title>
            <meta name='description' content={description} />
        </Head>

        <Header />

        {children}

        <Footer />
    </>
  )
}

export default layout