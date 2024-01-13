// React Imports
import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";

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
      <Outlet />
    </>
  );
};

export default MainLayout;
