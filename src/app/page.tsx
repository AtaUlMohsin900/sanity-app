import {client} from "../../sanity/lib/sanityClient"

export const getProductData = async()=>{
  const res = await client.fetch(`*[_type=="products"]`)
}

export default async function Home() {
  const data = await getProductData()
  console.log(data)
  return (
    <div>
  
    </div>
    
  )
}
