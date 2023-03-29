import React from "react";
import './feedbacktq.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons"


export function Feedbacktq(){
    return(
        <>
            <div className="container-fluid row feeddiv1">
                <div className="col-lg-4"></div>
                <div className="col-lg-4 bg-white feeddiv2">
                    <div>
                        <a href="./feedbackapp"><FontAwesomeIcon icon={faHeart} className="text-danger hrt"/>
                        <h2>Thank You!</h2></a>
                        <p>We will use your Feedback to improve our customer support performance</p>  
                    </div>
                </div>
                <div className="col-lg-4"></div>
            </div>
        </>
    );

}