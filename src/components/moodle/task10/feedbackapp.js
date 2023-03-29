import React from "react";
import './feedbackapp.css';


export function Feedbackapp(){
    return(
        <>
            <div className="container-fluid row feeddiv1">
                <div className="col-lg-4"></div>
                <div className="col-lg-4 bg-white feeddiv2">
                    <div>
                        <h3>How satisfied are you with our customer support performance?</h3>
                        <a href=".\feedbacktq"><span className="emoji">&#128512;</span></a> 
                        <a href=".\feedbacktq"> <span className="emoji">&#128528;</span></a> 
                        <a href=".\feedbacktq"> <span className="emoji">&#128546;</span></a>         
                    </div>
                </div>
                <div className="col-lg-4"></div>
            </div>
        </>
    );
}