import Left from "./components/Left"
import Right from "./components/Right"
import SplitScreen from "./components/SplitScreen"

const App = () => {
  return (
    <>
      <SplitScreen leftWeight={10} rightWeight={90}>
        <Left/>
        <Right/>
      </SplitScreen>
    </>
  )
}

export default App