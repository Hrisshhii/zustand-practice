import {useDeleteProductMutation} from "../app/service/dummyData";

const DeleteProduct = () => {
  const [deleteProduct,{data,isError,isLoading}]=useDeleteProductMutation();

  if(isError){
    return <h1>Error</h1>
  }

  if(isLoading){
    return <h1>Loading</h1>
  }
  return (
    <div>DeleteProduct</div>
  )
}

export default DeleteProduct