import Banner from "../Copmonent/Banner";
import CategoryTab from "../Copmonent/CategoryTab";
import Engage from "../Copmonent/ExtraFeatures/Engage";
import Gallery from "../Copmonent/Gallery";
import useTitle from "../Hooks/useTitle";

const Home = () => {
    useTitle('Home');
    return (
        <>
            <Banner></Banner>
            <section>
                <Gallery></Gallery>
            </section>
            <section>
                <CategoryTab></CategoryTab>
            </section>
            <section>
                {/* Extra Features */}
                <Engage></Engage>
            </section>
        </>
    );
};

export default Home;