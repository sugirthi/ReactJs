
import React,{useState,useEffect} from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import {faMagnifyingGlass,faLocationDot} from "@fortawesome/free-solid-svg-icons";
import '../task1.css';
// import img1 from '';
// import img2 from '';
export function Task1(){
    const[data,setData]=useState([]);
    useEffect(()=>{
        fetch('/task1_json/task1.json')
        .then(data=>data.json())
        .then(da=>setData(da))
    })
    return (
      <>
        <div className="container-fluid task1bg">
            <nav class="navbar navbar-expand-lg navbar-light">
                <a class="navbar-brand" href="#"><h1 className="text-light">S</h1></a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
                    <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                    <li class="nav-item active">
                    <button class="btn task1button my-2 my-sm-0" type="submit">Find Candidates</button>
                    </li>
                    <li class="nav-item">
                    <button class="btn my-2 my-sm-0 text-white" type="submit">Find Jobs</button>
                    </li>
                    <li class="nav-item">
                    <button class="btn my-2 my-sm-0 text-white" type="submit">Find Company</button>
                    </li>
                    </ul>
                    <form class="form-inline my-2 my-lg-0">
                    <FontAwesomeIcon icon={faBell} className="text-white"/>
                    <button class="btn my-2 my-sm-0 text-white task1login" type="submit">Login</button>
                    <button class="btn btn- my-2 my-sm-0 task1button" type="submit">Register</button>
                    </form>
                </div>
            </nav>
            <div className="p-5 text-center">
                <h1 className="task1h1 p-3">Find the candidates as per your requirements</h1>
                <div className="searchbg">
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                    <input type="search" placeholder="Job Title/Keyword" className="task1search"/>
                    <FontAwesomeIcon icon={faLocationDot} />
                    <input type="search" placeholder="Add country/city" className="task1search"/>
                    <button class="btn btn- my-2 my-sm-0 task1button w-25" type="submit">Search</button>
                </div>
            </div>
        </div>
        <div className="container-fluid">
            <div className="row justify-content-around py-4">
            <div class="dropdown">
                <button class="btn btn-outline task1dropdown dropdown-toggle px-lg-5" type="button" data-toggle="dropdown" aria-expanded="false">Experience</button>
                <div class="dropdown-menu">
                    <a class="dropdown-item" href="#">Action</a>
                    <a class="dropdown-item" href="#">Another action</a>
                    <a class="dropdown-item" href="#">Something else here</a>
                </div>
            </div>
            <div class="dropdown">
                <button class="btn btn-outline task1dropdown dropdown-toggle px-lg-5" type="button" data-toggle="dropdown" aria-expanded="false">HTML/CSS</button>
                <div class="dropdown-menu">
                    <a class="dropdown-item" href="#">Action</a>
                    <a class="dropdown-item" href="#">Another action</a>
                    <a class="dropdown-item" href="#">Something else here</a>
                </div>
            </div>
            <div class="dropdown">
                <button class="btn btn-outline task1dropdown dropdown-toggle px-lg-5" type="button" data-toggle="dropdown" aria-expanded="false">Bangalore</button>
                <div class="dropdown-menu">
                    <a class="dropdown-item" href="#">Action</a>
                    <a class="dropdown-item" href="#">Another action</a>
                    <a class="dropdown-item" href="#">Something else here</a>
                </div>
            </div>
            <div class="dropdown">
                <button class="btn btn-outline task1dropdown dropdown-toggle px-lg-5" type="button" data-toggle="dropdown" aria-expanded="false">UI/UX Designer</button>
                <div class="dropdown-menu">
                    <a class="dropdown-item" href="#">Action</a>
                    <a class="dropdown-item" href="#">Another action</a>
                    <a class="dropdown-item" href="#">Something else here</a>
                </div>
            </div>
            <div class="dropdown">
                <button class="btn btn-outline task1dropdown dropdown-toggle px-lg-5" type="button" data-toggle="dropdown" aria-expanded="false">Gender</button>
                <div class="dropdown-menu">
                    <a class="dropdown-item" href="#">Action</a>
                    <a class="dropdown-item" href="#">Another action</a>
                    <a class="dropdown-item" href="#">Something else here</a>
                </div>
            </div>
            <div class="dropdown">
                <button class="btn btn-outline task1dropdown dropdown-toggle px-lg-5" type="button" data-toggle="dropdown" aria-expanded="false">Age</button>
                <div class="dropdown-menu">
                    <a class="dropdown-item" href="#">Action</a>
                    <a class="dropdown-item" href="#">Another action</a>
                    <a class="dropdown-item" href="#">Something else here</a>
                </div>
            </div>
            </div>
            </div>
        
        <div className="container-fluid">
                    <div className="row justify-content-between">
        {
            data.map((value,index)=>
                <>
                        <div class="card col-lg-2 mx-5 my-3 task1card" >
                            <img src={value.img} className="card-img-top" alt="..." />
                            <div className="card-body text-center">
                            <h4 className="card-title">{value.name}</h4>
                            <h5 className="card-text">{value.des}</h5>
                            <button className="btn task1button">View</button>
                            </div>
                        </div> 
                               
                </>
            )
        }
        </div>
    </div>
    
      </>
    );
  }

