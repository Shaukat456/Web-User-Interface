import Intro from "../Components/Intro";
import Navbar from "../Components/Navbar";





function Home() {
    return ( <>
        <div className="container-fluid ">
            <Navbar/>
            <div className="hcomp">
                <div className="">
                    <h1>WORK BETTER WITH YOGI TECHNOLOGIES</h1>
                </div>



            </div>

            <Intro/>
        </div>
    
    </> );
}

export default Home;