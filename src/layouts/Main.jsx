import { Outlet } from "react-router-dom";
import Navbar from "../components/header/Navbar";

const Main = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
};

export default Main;
