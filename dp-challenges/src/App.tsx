import Content from "./components/Content"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Sidebar from "./components/Sidebar"
import SplitScreen from "./components/SplitScreen"

const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
    <Header />

    <div className="flex-1 flex">
      <SplitScreen LeftWeight={1} RightWeight={3}>
        <Sidebar />
        <Content />
      </SplitScreen>
    </div>

    <Footer />
  </div>
  );
};

export default App