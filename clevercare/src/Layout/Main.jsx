import { Outlet } from "react-router-dom";
import Footer from "../Copmonent/Footer";
import NavBar from "../Copmonent/NavBar";
import Container from "../Copmonent/Container/Container";

const Main = () => {
  return (
    <>
      <header>
        <NavBar></NavBar>
      </header>
      <main>
        <Outlet></Outlet>
      </main>
      <footer className="bg-indigo-200">
        <Container>
          <Footer></Footer>
        </Container>
      </footer>
    </>
  );
};

export default Main;
