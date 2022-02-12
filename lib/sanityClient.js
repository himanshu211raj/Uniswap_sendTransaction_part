import sanityClient from '@sanity/client'

export const client = sanityClient({
  projectId: 'axn5dixb',
  dataset: 'production',
  apiVersion: 'v1',
  token:
    'skoVIcwOoqBKn0lDTK5C1husQzQiJbOOP2HF4D24HzHyU5v7qi4bNtIKP9nQDGdGXt5CebWPwKewcVrNcaiZliwZrbhjbcauf0DiKVMIQhEPqNqC01DZpKi5aufQM2hQPWmhi6zBLuWtbs00l3AE5yhO95apa3a2pDxoOEuJ2Tr6p2LBA8p5', // or leave blank to be anonymous user
  useCdn: false, // `false` if you want to ensure fresh data
})
