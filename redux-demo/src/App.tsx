import type { RootState } from "./app/store";
import { useDispatch, useSelector } from "react-redux";
import {increment,decrement} from "./app/features/counter/counterSlice.ts";
// useSelector allows us to read data from redux store. 
// // useDispatch allows us to change the state in your Redux store from react component.

const App = () => {
  const count = useSelector((state:RootState)=>state.counter.value);
  const dispatch = useDispatch();

  return (
    <>
      <h1>{count}</h1>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
    </>
  );
};

export default App;