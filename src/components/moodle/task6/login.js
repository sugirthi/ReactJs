import React from "react";
import './login.css';
import img from './comp.jpg';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope} from "@fortawesome/free-regular-svg-icons";
import { faLock , faArrowRight} from "@fortawesome/free-solid-svg-icons";


export function Login(){
    return(
      <>
       <div className="bg-color">
            <div className="container-fluid row centerdiv">
              <div className="col-lg-6 center">
                <img src={img} className="col-lg-7"/>
              </div>
              <div className="col-lg-6 text-center mt-5 p-4">
                 <h3>Member Login</h3><br/>
                 <span className="lo_inp1 p-2">
                 <FontAwesomeIcon icon={faEnvelope}/>
                 <input type="Email" placeholder="Email" size="22" className="lo_inp p-1"/>
                 </span><br/><br/>

                 <span className="lo_inp1 p-2">
                 <FontAwesomeIcon icon={faLock}/>
                 <input type="password" placeholder="password" size="22" className="lo_inp p-1"/>
                 </span><br/><br/>
                 
                 <input type= "button" value = "Login"  size="25" className="lo_but p-2 bg-success text-white"/><br/><br/>
                 <p>Forget <span className="text-success">User Name / Password ?</span></p>
                 <p className="text-success">Create your Account<FontAwesomeIcon icon={faArrowRight} /></p>
              </div>   
            </div>
       </div>
      </>
    );
}
