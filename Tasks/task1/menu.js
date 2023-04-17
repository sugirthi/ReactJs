import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import {faMagnifyingGlass,faLocationDot} from "@fortawesome/free-solid-svg-icons";
import '../task1.css';
// import img1 from '';
// import img2 from '';
export function Task1(){
    return (
      <>
        <div className="container-fluid task1bg">
            <nav class="navbar navbar-expand-lg navbar-light">
                <a class="navbar-brand" href="#">logo</a>
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
                    <button class="btn my-2 my-sm-0 text-white" type="submit">Login</button>
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
        <div className="col-lg-12">
            <div class="btn-group pt-3">
                <button type="button" class="btn dropdown-toggle task1dropdown" data-toggle="dropdown" aria-expanded="false">
                    Experience
                </button>
                <div class="dropdown-menu">
                    <a class="dropdown-item" href="#">Action</a>
                    <a class="dropdown-item" href="#">Another action</a>
                </div>
                <button type="button" class=" dropdown-toggle task1dropdown" data-toggle="dropdown" aria-expanded="false">
                    HTML/CSS
                </button>
                <div class="dropdown-menu">
                    <a class="dropdown-item" href="#">Action</a>
                    <a class="dropdown-item" href="#">Another action</a>
                </div>
                <button type="button" class="dropdown-toggle task1dropdown" data-toggle="dropdown" aria-expanded="false">
                    Bangalore
                </button>
                <div class="dropdown-menu">
                    <a class="dropdown-item" href="#">Action</a>
                    <a class="dropdown-item" href="#">Another action</a>
                </div>
                <button type="button" class=" dropdown-toggle task1dropdown" data-toggle="dropdown" aria-expanded="false">
                    UI/UX Designer
                </button>
                <div class="dropdown-menu">
                    <a class="dropdown-item" href="#">Action</a>
                    <a class="dropdown-item" href="#">Another action</a>
                </div>
                <button type="button" class="dropdown-toggle task1dropdown" data-toggle="dropdown" aria-expanded="false">
                    Gender
                </button>
                <div class="dropdown-menu">
                    <a class="dropdown-item" href="#">Action</a>
                    <a class="dropdown-item" href="#">Another action</a>
                </div>
                <button type="button" class="dropdown-toggle task1dropdown" data-toggle="dropdown" aria-expanded="false">
                    Age
                </button>
                <div class="dropdown-menu">
                    <a class="dropdown-item" href="#">Action</a>
                    <a class="dropdown-item" href="#">Another action</a>
                </div>
            </div>
        </div>
    
      </>
    );
  }

