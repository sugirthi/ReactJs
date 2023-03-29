import React from "react";
import './socialbuttons.css';
export function Socialbuttons(){
    return(
      <>
      <div className="bg">
        <div className="container-fluid row text-center">
           <div className="col-lg-3"></div>
           <div className="col-lg-6 div1"><h1 className="text-white">Social Buttons</h1>
           <input type = "button" value="Like" className="bg-warning btn"/>
           <input type = "button" value="Comment" className="bg-white btn"/>
           <input type = "button" value="Share" className="bg-primary btn"/></div>
           <div className="col-lg-3"></div>
        </div>
      </div>
      </>
    )
}