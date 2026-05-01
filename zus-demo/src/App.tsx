import { useCounter } from "./store"

function App() {
  const {count,increment,decrement}=useCounter(state=>state);
  //const count=useCounter(state=>state.count);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-gray-900/70 rounded-2xl p-10 text-center">
        
        <h1 className="text-5xl font-extrabold text-white mb-6">
          Counter
        </h1>

        <p className="text-3xl font-semibold text-blue-400 mb-8">
          {count}
        </p>

        <div className="flex gap-4 justify-center">
          <button
            onClick={decrement}
            className="px-5 py-2 rounded-xl bg-red-500 text-white"
          >
            −
          </button>

          <button
            onClick={increment}
            className="px-5 py-2 rounded-xl bg-green-500 text-white"
          >
            +
          </button>
        </div>

      </div>
    </div>
  )
}

export default App
