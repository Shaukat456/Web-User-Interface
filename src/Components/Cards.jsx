function Cards(props) {
    return (  <>
            <div className="d-flex flex-column mx-2 p-4 card">
                    <figure>
                        <img src={props.img} alt="img" />
                        
                    </figure>
                        <h4>{props.h}</h4>
                        <span> 
                          <span> 
                              {/* check here */}
                                <h5 className="my-4"> {props.checks1} </h5>
                              </span> 
                          <span>
                                {/* check here */}
                                <h5 className="my-4"> {props.checks2} </h5>
                              </span> 
                          <span>
                                {/* check here */}
                                <h5 className="my-4"> {props.checks3} </h5>
                              </span> 
                             
                            
                            </span>
            </div>
    
    
    </>);
}

export default Cards;