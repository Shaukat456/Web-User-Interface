import Intro from "../Components/Intro";
import Navbar from "../Components/Navbar";
import {Fade, Slide} from 'react-reveal'




function Home() {
    return ( <>
        <div className="container-fluid ">
            <Navbar/>

            <div className="hcomp  ">
            <Slide left>
                <div className="text-light">

                    <h1>WORK BETTER WITH YOGI TECHNOLOGIES</h1>
                </div>


            </Slide>

            </div>

            <Fade bottom>

            <Intro/>
            </Fade>

        </div>
    
    </> );
}

export default Home;