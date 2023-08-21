import Layout from '../components/Layout'
import Guitarra from '../components/Guitarra'
import styles from '../styles/grid.module.css'

function Tienda({guitarras}) { 

  return (
    <Layout
      title={'Tienda Virtual'}
      description={'Tienda virtual, venta de guitarras, instrumentos, GuitarLa'}
    > 

      <main className='contenedor'>
        <h1 className="heading">Nuestra Coleccion</h1>

        <div className={styles.grid}>
          { guitarras?.map( guitarra => (
            <Guitarra
              key={guitarra.id} 
              guitarra={guitarra.attributes}
            />
          ))}
        </div>
      </main>
    </Layout>

  )
}

export async function getServerSideProps() { 
  const respuesta = await fetch(`${process.env.API_URL}/guitarras?populate=imagen`); 
  const { data: guitarras } = await respuesta.json();
  
  return { 
    props: {
      guitarras
    }
  }
}

export default Tienda