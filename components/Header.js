import Image from 'next/image' 
import Link from 'next/link'
import { useRouter } from 'next/router'
import styles from '../styles/header.module.css'

function Header() {

  const router = useRouter(); 

  return (
    <header className={styles.header}> 
        <div className={`contenedor ${styles.barra}`}>
            <Link href='/'>
              <Image src='/img/logo.svg' width={300} height={40} alt='imagen logotipo' />
            </Link>

            <nav className={styles.navegacion}>
              <Link className={ router.pathname === '/' ? styles.active : ''} href='/'>
                Inicio
              </Link>
              <Link className={ router.pathname === '/nosotros' ? styles.active : ''} href='/nosotros'>
                Nosotros
              </Link>
              <Link className={ router.pathname === '/tienda' ? styles.active : ''} href='/tienda'>
                Tienda
              </Link>
              <Link className={ router.pathname === '/blog' ? styles.active : ''} href='/blog'>
                Blog
              </Link>
              <Link className={ router.pathname === '/carrito' ? styles.active : ''} href='/carrito'>
                <Image width={30} height={25} src='/img/carrito.png' alt='Imagen carrito' /> 
              </Link>
            </nav>
        </div>
    </header>
  )
}

export default Header