function Navbar() {
    return (
         <>

        <div className="row  ">
            <div className="col-12  d-flex ">


            <div className="col bg-light p-3 ">
            <nav className="navbar navbar-light bg-light">
  <a className="navbar-brand" href="#">
    {/* <img src="/docs/4.0/assets/brand/bootstrap-solid.svg" width="30" height="30" class="d-inline-block align-top" alt=""/> */}
    HYPERDEV SOLUTIONS LOGO
  </a>
</nav>
            </div>
            <div className="col text-light bg-light p-3 ">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
  {/* <a class="navbar-brand" href="#">Navbar</a> */}
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active text-capitalize">
        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Konsule Ai</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">YGG PLAtFORM</a>
      </li>
      <li class="nav-item">
        <a class="nav-link disabled" href="#">Disabled</a>
      </li>
    </ul>
  </div>
 {/* <button> */}
 <label class="switch">
  <input type="checkbox"/>
  <span class="slider round"></span>
</label>
 {/* </button> */}
</nav>
            </div>

            </div>

        </div>
    
    </> 
    
    );
}

export default Navbar;