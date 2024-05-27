import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MainProjects from "./components/MainProjects";
import SideProjects from "./components/SideProjects";


export default function App() 
{
    return (
        <div className="App">
            <Header/>

            <MainProjects/>
            
            <div className="container-xl">
                <hr className="my-5"/>
            </div>

            <SideProjects/>

            <div className="container-xl">
                <hr className="my-5"/>
            </div>

            <Contact/>
            
            <Footer/>
        </div>
    );
}
