import React from "react";
import './card.css';
import 'bootstrap/dist/css/bootstrap.css';
import img1 from './congrats-card-profile-img.png';
import img2 from './congrats-card-watch-img.png';
export function Card(){
    return (
      <>
        <div className="container-fluid bgimg">
          <h1 className="text-center">congratulations</h1>
          <div className="row p-4">
              <div className="col-lg-4"></div>
              <div className="div col-lg-4 text-center p-3">
                  <img src={img1}/>
                  <h2>Aravind</h2>
                  <p>A watch is a portable timepiece intended to be carried or worn by a person. It is designed to keep a consistent movement despite the motions caused by the person's activities.</p>
                  <img src={img2}/>
              </div>
              <div className="col-lg-4"></div>  
          </div>
        </div>
      </>
    );
  }