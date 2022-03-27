import Intro from "../Components/Intro";
import Navbar from "../Components/Navbar";
import {Fade, Slide} from 'react-reveal'
import '../index.css'
import KonsulAi from "../Components/KonsulAi";
import Footer from "../Components/Footer";
import Team from "../Components/Team";
import Contact from "../Components/Contact";




function Home() {
    return ( <>
        <div className="container-fluid ">
            <Navbar/>

            <div className="hcomp  py-5">
            <Slide left>
                <div className="text-light d-lg-flex py-5">
                    <div className="col-6 d-lg-flex ">
                    
                    <h1 className="heroh " id='work'>WORK   </h1>
                    <h1 className="heroh white_stroke mx-5 w-100 " id='better'> BETTER  </h1>
                    
                    {/* {
                        window.addEventListener("scroll",()=>{
                            const better = document.querySelector("#better")
                            const work = document.querySelector("#work")
                            const yg = document.querySelector("#yg")
                            let scrollPosition = window.pageYOffset;

             better.style.transform = `translateX(${scrollPosition * -0.5}px)`
             work.style.transform = `translateX(${scrollPosition * -0.5}px)`
             yg.style.transform = `translateX(${scrollPosition * 0.5}px)`

                        })
                    } */}
                    
                    {/* <h1 className="heroh ">WITH    */}
                {/* Arrow here for parallax */}
                     {/* </h1> */}
                     

                    </div>
                    {/* <hr /> */}
                    <div className="col ygg my-5 py-5">
                    <h1 className="heroh bg-none my-5"  id='yg'>YGGY TECHNOLOGIES  </h1>
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
      
            <Intro/>
            <KonsulAi/>
            
            <Team/>
            

        </div>
    </> 
    
    
    );
}

export default Home;