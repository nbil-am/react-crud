import { Outlet } from "react-router";
import Header from "../components/Header";
import Footer from "../components/Footer";

const MainLayout = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-200">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;
