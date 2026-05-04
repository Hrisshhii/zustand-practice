import { useCounter } from "./store"

const OtherComponents=()=>{
  const {increment}=useCounter();
  const {decrement}=useCounter();

  return (
    <div className="flex gap-4 justify-center">
      <button onClick={decrement} className="px-5 py-2 rounded-xl bg-red-500 text-white" >
        {`-`}
      </button>

      <button onClick={increment} className="px-5 py-2 rounded-xl bg-green-500 text-white" >
        {`+`}
      </button>
    </div>
  )
}

export default OtherComponents