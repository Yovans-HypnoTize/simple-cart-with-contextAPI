import ContextProvider from "../components/ContextProvider";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <ContextProvider>
      <Header />
      <Outlet />
    </ContextProvider>
  );
};

export default AppLayout;
