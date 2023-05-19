import { Outlet } from "react-router-dom";
import Footer from "../Copmonent/Footer";
import NavBar from "../Copmonent/NavBar";
import { Toaster } from 'react-hot-toast';

const Main = () => {
    return (
        <>
            <Toaster></Toaster>
            <header>
                <NavBar></NavBar>
            </header>
            <main>
                <Outlet></Outlet>
            </main>
            <Footer></Footer>

        </>
    );
};

export default Main;