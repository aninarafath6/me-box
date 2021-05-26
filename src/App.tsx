import { FC } from "react";
import Header from "./components/Header";
import SideBar from "./components/SideBar";
import Home from "./pages/Home";

const App: FC = () => {
  return (
    <div className="App">
      <Header />
      <SideBar />
      <Home />
    </div>
  );
}

export default App;
