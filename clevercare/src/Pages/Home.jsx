import Banner from "../Copmonent/Banner";
import CategoryTab from "../Copmonent/CategoryTab";
import Container from "../Copmonent/Container/Container";
import Contact from "../Copmonent/ExtraFeatures/Contact";
import Courses from "../Copmonent/ExtraFeatures/Courses";
import Engage from "../Copmonent/ExtraFeatures/Engage";
import Features from "../Copmonent/ExtraFeatures/Features";
import State from "../Copmonent/ExtraFeatures/State";
import Gallery from "../Copmonent/Gallery";
import useTitle from "../Hooks/useTitle";

const Home = () => {
  useTitle("Home");
  return (
    <>
      <section className="">
        <Container>
          <Banner></Banner>
        </Container>
      </section>
      <section className="bg-indigo-100">
        <State></State>
      </section>
      <Features></Features>
      <section className="bg-indigo-50">
        <Container>
          <Gallery></Gallery>
        </Container>
      </section>
      <section>
        <Container>
          <CategoryTab></CategoryTab>
        </Container>
      </section>
      <section className="bg-indigo-100">
        {/* Extra seteion */}
        <Container>
          <Courses></Courses>
          <Engage></Engage>
          <Contact></Contact>
        </Container>
      </section>
    </>
  );
};

export default Home;
