import { Outlet } from "react-router-dom";
import Header from "../Components/Elements/Header/Header";

const RootLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default RootLayout;
