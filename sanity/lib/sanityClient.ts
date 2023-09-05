import { createClient } from 'next-sanity'
// import { apiVersion, dataset, projectId, useCdn } from '../env'

export const client = createClient({
  apiVersion:"v2023-08-31",
  dataset:"production",
  projectId:process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  token:process.env.SANITY_ACCESS_TOKEN,
  useCdn:true,
})

