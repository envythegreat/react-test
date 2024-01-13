// React Imports
import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import Navbar from "../component/NavBar";
import img from '../assets/images/bg.png'

const MainLayout: React.FC = () => {
  // States
  const [isMounted, setIsMounted] = useState<boolean>(false);

  useEffect(() => {
    setIsMounted(true);
    return () => setIsMounted(false);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
    <div className="container">
      <Navbar children={<></>} />
      <Outlet />
    </div>
      
    </>
  );
};

export default MainLayout;
