import { Outlet } from "react-router-dom";
import Footer from "../Copmonent/Footer";
import NavBar from "../Copmonent/NavBar";


const Main = () => {
    return (
        <>
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