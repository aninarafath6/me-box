import { FC } from "react";
import Folders from "../components/Folders";
import Header from "../components/Header";
import SideBar from "../components/SideBar";
import { useMediaQuery } from "../hooks/useMediaQuery";

const Home: FC = () => {
    const isBigScreen = useMediaQuery("(min-width: 1024px)");
    return (
        isBigScreen ? <div className="App ">
        <Header />
        <div className='flex fixed'>
          <SideBar />
          <Folders />
          
        </div>
      </div> :
      // if screen size less than 1024
        <div className='flex items-center justify-center p-2 h-screen  flex-col space-y-5 '>
          <img src="/logo.svg" alt="logo" className='h-24' />
          <p className="text-lg text-center  text-gray-light font-mono">This Site Currently Running On Desktop</p>
        </div>
    )
}

export default Home
