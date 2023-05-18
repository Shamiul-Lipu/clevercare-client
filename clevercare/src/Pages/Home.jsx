import Banner from "../Copmonent/Banner";
import CategoryTab from "../Copmonent/CategoryTab";
import Gallery from "../Copmonent/Gallery";

const Home = () => {
    return (
        <>
            <Banner></Banner>
            <section>
                <Gallery></Gallery>
            </section>
            <CategoryTab></CategoryTab>
        </>
    );
};

export default Home;