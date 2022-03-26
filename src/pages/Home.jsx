import Intro from "../Components/Intro";
import Navbar from "../Components/Navbar";
import {Fade, Slide} from 'react-reveal'
import '../index.css'
import KonsulAi from "../Components/KonsulAi";
import Footer from "../Components/Footer";
import Team from "../Components/Team";




function Home() {
    return ( <>
        <div className="container-fluid ">
            <Navbar/>

            <div className="hcomp  py-5">
            <Slide left>
                <div className="text-light d-flex py-5">
                    <div className="col-6">
                    
                    <h1 className="heroh">WORK BETTER  </h1>
                    <h1 className="heroh">WITH  
                {/* Arrow here for parallax */}
                     </h1>
                     

                    </div>
                    {/* <hr /> */}
                    <div className="col-6 tec">
                    <h1 className="heroh">YGGY TECHNOLOGIES  </h1>
                    </div>
                        
                </div>


            </Slide>
            </div>

            <div className="hcomp py-5 ">

            <label class="switch">
  <input type="checkbox"/>
  <span class="slider round"></span>

</label>

            </div>  
            <Fade bottom>

            <Intro/>
            <KonsulAi/>
            </Fade>

            <Team/>

            <Footer/>

        </div>
    
    </> 
    
    
    );
}

export default Home;