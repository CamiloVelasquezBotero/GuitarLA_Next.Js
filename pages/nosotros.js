import Layout from '../components/Layout'
import Image from 'next/image'
import styles from '../styles/nosotros.module.css'

function Nosotros() {
  return (
    <Layout
      title={'Nosotros'}
      description={'Sobre nosotros, guitarLa, tienda de musica'}
    > 

      <main className='contenedor'>
        <h2 className='heading'>Nosotros</h2>

        <div className={styles.contenido}>
          <Image src='/img/nosotros.jpg' width={1000} height={800} alt='Imagen sobre nosotros'/>

          <div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin enim massa, laoreet ac risus ut, congue sagittis ligula. Vivamus accumsan sodales placerat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Vivamus metus justo, elementum ac leo rutrum, porta ultricies dolor.</p>
            <p>Aliquam facilisis quam arcu, fringilla tempus ligula semper et. Sed non imperdiet eros. Praesent iaculis neque a risus venenatis venenatis. Etiam et eros a lectus cursus feugiat vel at leo. Suspendisse enim nisi, iaculis sed bibendum et, laoreet quis massa. Sed pulvinar mi blandit nunc bibendum commodo. Suspendisse potenti.</p>
          </div>
        </div>
      </main>
    </Layout>

  )
}

export default Nosotros