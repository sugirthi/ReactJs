import React from "react";
import { Link } from "react-router-dom";
export function Menu(){
    return(
        <>
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
                    <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                        <h3 className="text-white">My Works</h3>
                        <Link to='/'><li className="nav-link">Hello World</li></Link>
                        <Link to='/Card'><li className="nav-link">Card</li></Link>
                        <Link to='/League'><li className="nav-link">League</li></Link>
                        <Link to='/Socialbuttons'><li className="nav-link">Socialbuttons</li></Link>
                        <Link to='/Notification'><li className="nav-link">Notification</li></Link>
                        <Link to='/Login'><li className="nav-link">Login</li></Link>
                        <Link to='/Techcard'><li className="nav-link">Technology_card</li></Link>
                        <Link to='/Resume'><li className="nav-link">Resume</li></Link>
                        <Link to='/Form'><li className="nav-link">Form</li></Link>
                        <Link to='/Hook'><li className="nav-link">Hook-Task</li></Link>
                        <Link to='/Fruitcounter'><li className="nav-link">Fruit Counter</li></Link>
                        <Link to='/Feedbackapp'><li className="nav-link">Feedback App</li></Link>
                        <Link to='/Datefunction'><li className="nav-link">Date function</li></Link>
                    </ul>
                </div>
            </nav>
        </>
    )
}
