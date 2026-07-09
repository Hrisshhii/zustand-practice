import Left from "./components/Left"
import Right from "./components/Right"
import SplitScreen from "./components/SplitScreen"

const App = () => {
  return (
    <>
      <SplitScreen leftWeight={50} rightWeight={50}>
        <Left/>
        <Right/>
      </SplitScreen>
    </>
  )
}

export default App