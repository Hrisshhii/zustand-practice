import {useDeleteProductMutation} from "../app/service/dummyData";

const DeleteProduct = ({productId}:any) => {
  const [deleteProduct,{data,isError,isLoading}]=useDeleteProductMutation();

  if(isError){
    return <h1>Error</h1>
  }

  if(isLoading){
    return <h1>Loading</h1>
  }

  const handleDelete=async()=>{
    try{
      await deleteProduct(productId);
    }catch(err){
      console.log(err)
    }
  };

  return (
    <div>
      <button onClick={handleDelete} disabled={isLoading}>Delete Product</button>
    </div>
  )
}

export default DeleteProduct