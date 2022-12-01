import Yaaroub from "./components/yaaroub/Yaaroub";
import Yaman from "./components/yaman/Yaman";
import Header from "./components/header/Header";
import "./App.css";
function App() {
  return (
    <>
      <Header />
      <div className="App">
        <Yaaroub />
        <Yaman />
      </div>
    </>
  );
}

export default App;
