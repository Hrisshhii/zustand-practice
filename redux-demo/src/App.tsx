import type { RootState } from "./app/store";
import { useDispatch, useSelector } from "react-redux";
import {increment,decrement} from "./app/features/counter/counterSlice.ts";
// useSelector allows us to read data from redux store. 
// // useDispatch allows us to change the state in your Redux store from react component.

const App = () => {
  const count = useSelector((state:RootState)=>state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-4">{count}</h1>
      <div className="flex space-x-4">
        <button 
          onClick={() => dispatch(increment())}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          +
        </button>
        <button 
          onClick={() => dispatch(decrement())}
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
        >
          -
        </button>
      </div>
    </div>
  );
};

export default App;