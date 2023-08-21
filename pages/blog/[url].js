import Image from 'next/image'
import Layout from '../../components/Layout'
import { formatearFecha } from '../../helpers'
import styles from '../../styles/blog.module.css'

function Post({post}) { 
    const { titulo, contenido, imagen, publishedAt } = post[0].attributes
  return (
    <Layout
        title={titulo}
    >
        <article className={`${styles.post} ${styles['mt-3']}`}> 
            <Image src={imagen.data.attributes.url} width={1000} height={400} alt={`Imagen blog: ${titulo}`} />

            <div className={styles.contenido}>
                <h3>{titulo}</h3>
                <p className={styles.fecha}>{formatearFecha(publishedAt)}</p>
                <p className={styles.resumen}>{contenido}</p>
            </div>
        </article>
    </Layout>
  )
}

export async function getServerSideProps({query: {url}}) { 
    const respuesta = await fetch(`${process.env.API_URL}/posts?filters[url]=${url}&populate=imagen`)
    const { data: post } = await respuesta.json();

    return { 
        props: {
            post
        }
    }
}

export default Post