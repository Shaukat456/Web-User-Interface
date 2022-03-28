import Intro from "../Components/Intro";
import Navbar from "../Components/Navbar";
import {Fade, Slide} from 'react-reveal'
import '../index.css'
import KonsulAi from "../Components/KonsulAi";
import Footer from "../Components/Footer";
import Team from "../Components/Team";
import Contact from "../Components/Contact";
import Button from "../Components/Button";


function Home() {
    return ( <>
        <div className="container-fluid ">
            <Navbar/>

            <div className="hcomp  py-5">
            <Slide left>

                
                <div className="div heroh text-light">
                <span className="d-flex">
                  <h1>WORK</h1>
                     <h1 className="offset-1 white_stroke"> BETTER </h1>
                     {/* <figure > */}
                         {/* <img src="https://uploads-ssl.webflow.com/61221299a58304224ec08ab2/61268f6d4076c165dce4c16f_green.svg" alt="" className="offset-3" /> */}
                     {/* </figure> */}

                    {/* <div className="col">
                        
                    </div> */}
                    
                    </span> 
                    
                <span className="d-flex col ">
                  <h1>WITH</h1>
                  <figure>
                      <img src="https://uploads-ssl.webflow.com/61221299a58304224ec08ab2/61222041ae7b92522ff44f99_arrow%20top%20offer.svg" className="mx-3" alt="" />
                  </figure>
                     <h1 className="col  mx-5" >YGGY</h1>
                    
                    </span> 

<span className="d-flex col offset-4  justify-content-flex-end "  >

                  <h1 className="  col offset-2">TECHNOLOGIES</h1>

                    
                    </span> 

                    
                    
                </div>



                {/* <div className="text-light d-lg-flex py-5"> */}
                    {/* <div className="col-6 d-lg-flex "> */}
                    


                    {/* <h1 className="heroh " id='work'>WORK   </h1>
                    <h1 className="heroh white_stroke mx-5 w-100 " id='better'> BETTER  </h1> */}
                    
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
                     

                    {/* </div> */}
                    {/* <hr /> */}

                    {/* <div className="col ygg my-5 py-5">
                    <h1 className="heroh bg-none my-5"  id='yg'>YGGY TECHNOLOGIES  </h1>
                    </div> */}
                        
                {/* </div> */}


            </Slide>
            </div>

            <div className="hcomp py-5 ">
            <Button/>

            </div>  
      
            <Intro/>
            <KonsulAi/>
            
            <Team/>
            

        </div>
    </> 
    
    
    );
}


export default Home;