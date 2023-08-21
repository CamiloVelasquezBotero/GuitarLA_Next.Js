
import Layout from '../components/Layout'
import Link from 'next/link'

function Pagina404() {
  return (
    <Layout
        title={'Pagina no encontrada'}
    >
        <p className='error'>Pagina no encontrada</p>
        <Link className='errorEnlace' href='/'>
            Ir a inicio
        </Link>
    </Layout>
  )
}

export default Pagina404