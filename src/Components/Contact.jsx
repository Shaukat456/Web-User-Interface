import Lefth from './lefthed'

function Contact () {
    return ( 
        <>
        <div className="contact">

        <div className="row   ">
            <div className="col text-light ">
        <Lefth h1='CONTACT' h2='US' />

            </div>


<div className="col">
            <div className="row text-light">
                <div className="col-6">
                    <h2>YOUR NAME </h2>
                    <input type="text" placeholder='John Smith *'/>

                </div>
                <div className="col-6 w-100">
                    <h2>E-MAIL </h2>
                    <input type="email" placeholder='Email' />

                </div>
                
                <div className="col flex-column my-5">

                    <div className="mx-3 ">
                    <h2>Tell Us About Your Project</h2>
                    <input type="text" className='w-100' placeholder='Type something or just leave this area empty' />

                    </div>
                </div>
                
            </div>
</div>
        </div>
        <div className="row">
            <div className="col">

            <h1>RATE US</h1>
            </div>

            <div className="col d-flex">
            <label class="switch ">
  <input type="checkbox"/>
  <span class="slider round"></span>
</label>
        <p className='mx-4 w-50 opacity-25'> By clicking on the button, I accept the terms of the transfer of personal data and agree to the privacy policy</p>
            </div>
        </div>
        </div>
        
        </>
     );
}

export default Contact ;