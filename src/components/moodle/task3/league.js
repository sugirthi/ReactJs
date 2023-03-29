import React from "react";
import './league.css';
import img1 from './rcb-img.png';
import img2 from './csk-img.png';
export function League(){
    return(
      <>
      <div className="div container-fluid bg-dark row ">
        <div className="col-lg-3"></div>
        <div className="col-lg-6 text-center p-5">
            <h1 className="text-light">Super Over league</h1>
            <img src={img1} width="250px"/>
            <img src={img2} width="250px"/>
        </div>
        <div className="col-lg-3"></div>
      </div>
      </>
    )
}