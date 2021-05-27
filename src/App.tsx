import { FC } from "react";
import Header from "./components/Header";
import SideBar from "./components/SideBar";
import { useMediaQuery } from "./hooks/useMediaQuery";
import Home from "./pages/Home";

const App: FC = () => {
  const isBigScreen = useMediaQuery("(min-width: 1024px)");

  return (
    isBigScreen ? <div className="App">
      <Header />
      <SideBar />
      <Home />
    </div> : <div className='flex items-center justify-center p-2 h-screen  flex-col space-x-2'>
      <img src="/logo.svg" alt="logo" className='h-24' />
      <p className="text-lg text-center mt-3 text-gray-light font-mono">This Site Currently Running On Desktop</p>
    </div>
  );
}

export default App;
