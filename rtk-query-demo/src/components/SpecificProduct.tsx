import {useGetProductByIdQuery} from '../app/service/dummyData';

const SpecificProduct = () => {
  const {data,isLoading,isError}=useGetProductByIdQuery(2);
  console.log(data);

  if(isError){
    return <h1>Error</h1>
  }

  if(isLoading){
    return <h1>Loading</h1>
  }

  return (
    <div>
      <p>{data.id} : {data.title}</p>
      <p>{data.description}</p>
      <img src={data.images}/>
    </div>
  )
}

export default SpecificProduct