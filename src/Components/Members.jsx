import {Fade, Slide} from 'react-reveal'


function Members(props) {
    return ( 
<>
<Fade bottom>

<div className=" member d-flex">

          <div className="col">

          <figure>
            <img src={props.img} alt="" className="mimg" />
          </figure>
        </div>

        <div className="d-flex flex-column mx-3">

        <h2 className="head1 nam ">{props.name}  
        
         </h2>
        <h2 className="head2 des my-3">{props.des}</h2>
        <hr />

        <div className="bio">
         {props.bio}
        </div>
        </div>

          </div>
</Fade>

</>

     );
}

export default Members;