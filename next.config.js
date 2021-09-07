module.exports = {
  reactStrictMode: true,
  images:{
    domains:['links.papareact.com','image.tmdb.org','press.hulu.com']
  },
  serverRuntimeConfig: {
    // Will only be available on the server side
    mySecret: 'secret',
    secondSecret: process.env.API_KEY, // Pass through env variables
  },
  publicRuntimeConfig: {
    // Will be available on both server and client
    staticFolder: '/static',
  },
}
