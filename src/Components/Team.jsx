import secH from "./SecH";
import Members from "./Members";

function Team() {

    return (

        <>

        <div className="row text-light tec">
        <h1 className="display-1">our team</h1>
          <div className="col text-light">
          </div>
          <div className="col-6 ">
         
          <Members
          img='https://uploads-ssl.webflow.com/61221299a58304715ac08aef/614b46d0ff249572b3c3681b_grigory-p-500.jpeg'
          name='Grigory Gubarev'
          des='СHIEF EXECUTIVE OFFICER'
          bio='Grigory has over 8 years of experience managing teams that create Data Science-based software. Previously, he was in charge of an internal startup and a university research department, where he was responsible for business development, finance planning and sales support.'
          />
          <Members
          
          />
          <Members/>
          <Members/>





          </div>
        </div>


        </>
      );
}

export default Team;