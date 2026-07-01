import { useUpdateProductMutation } from "../app/service/dummyData";

const UpdateProduct = ({productId}:any) => {
  const [updateProduct,{data,isError,isLoading}]=useUpdateProductMutation();

  if(isError){
    return <h1>Error</h1>
  }

  if(isLoading){
    return <h1>Loading</h1>
  }

  const handleUpdateProduct=async()=>{
    try{
      const updatedProductData={
        title:"Updated DATA"
      };
      await updateProduct({
        id:productId,
        updatedProduct:updatedProductData,
      });
    }catch(err){
      console.log(err)
    }
  }

  return (
    <div>
      <h1>{data?.id}</h1>
      <h1>{data?.title}</h1>
      <button onClick={handleUpdateProduct} disabled={isLoading}>Update Product</button>
    </div>
  )
}

export default UpdateProduct