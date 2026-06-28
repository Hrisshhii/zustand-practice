import { useGetAllProductsQuery } from "../app/service/dummyData";

const AllProducts = () => {
  const {data,isError,isLoading}=useGetAllProductsQuery("");

  if(isError){
    return <h1>Error</h1>
  }

  if(isLoading){
    return <h1>Loading</h1>
  }

  return (
    <div>
      {data?.products.map((p:any)=>(
        <h1 key={p.id}>{p.title}</h1>
      ))}
    </div>
  )
}

export default AllProducts