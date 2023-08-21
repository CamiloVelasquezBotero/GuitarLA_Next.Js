/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: { /* Aqui va la configuracion de las imagenes */
    formats: ['image/avif', 'image/webp'], /* De esta forma podemos establecer en qeu formato poner las imagenes */
    domains: ['res.cloudinary.com'] /* Le agregamos un arreglo de los dominios que puede permitir las imagenes externas */
  }
}

module.exports = nextConfig
