import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Layout = () => {
    return (
        <div>
            <div className="container mx-auto">
                <Header></Header>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
            <ToastContainer />
        </div>
    );
};

export default Layout;