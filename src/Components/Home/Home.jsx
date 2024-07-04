import Banner from "./Banner";
import Contact from "./Contact";
import Education from "./Education";
import Experienced from "./Experienced";
import Projects from "./Projects";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Experienced></Experienced>
            <Projects></Projects>
            <Education></Education>
            <Contact></Contact>
        </div>
    );
};

export default Home;
