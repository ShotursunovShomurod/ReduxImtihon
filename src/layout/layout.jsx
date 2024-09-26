import Header from "../components/header/Header";
import { Outlet } from "react-router-dom";
import SupHeader from '../components/SupHeader/SupHeader.jsx'
import Footer from "../components/footer/footer";

const Layout = () => {
  return (
    <>
      <SupHeader />
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
