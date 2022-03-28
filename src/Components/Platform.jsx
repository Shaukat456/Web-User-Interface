import Contact from "./Contact";

function  Platform() {
    return (  <>
    <div className="row text-light tec">
     
     <div className="col text-light d-flex teamm">

         <h1 className=" ">YGGY  </h1>
       <h1 className="white_stroke mx-2 plaf ">PLATFORM</h1>
     </div>

     <div className="col col-6 teamm">
    
     <p className="heads py-5 para pr-5 mr-5"></p>
     
     </div>
     <div className="col col-6 teamm">
    
     <h3     className="heads ygg para py-5 para pr-5 mr-5">
YGGY Platform is an intelligent platform based on state-of-the-art Machine Learning technologies, which converts piles of unstructured text data into business value.

The Platform is production-ready, scalable and can be modified to cope with custom tasks</h3>
     
<div className="col-5 pb-5 mb-5">
    <h3>We use and improve advanced technologies and frameworks in order to create our solutions — both back and frontend, as well as the intelligent part.</h3>
</div>
     </div>
     
     <div className="col">

   <Contact/>
     
     
     </div>
   
   </div>


    
    </>
    );
}

export default Platform ;