function Members(props) {
    return ( 
<>

<div className="  d-flex">

          <div className="col">

          <figure>
            <img src={props.img} alt="" className="mimg" />
          </figure>
        </div>

        <div className="d-flex flex-column mx-3">

        <h2 className="head1 ">{props.name}</h2>
        <h2 className="head2">{props.des}</h2>
        <hr />

        <div className="bio">
         {props.bio}
        </div>
        </div>

          </div>

</>

     );
}

export default Members;