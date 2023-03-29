import React from "react";
import './notification.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCircleInfo} from "@fortawesome/free-solid-svg-icons";
export function Notification(){
    return(
        <>
        <h1 className="text-center">Notifications</h1>
        <div className="container fluid mt-4">
            <div className="row">
                <div className="col-lg-4"></div>
                <div className="col-lg-4">
                <p className="notification text-white m-4 bg-primary p-3"><FontAwesomeIcon icon={faCircleInfo}/>Information messages</p>
                <p className="notification text-white m-4 bg-success p-3"><FontAwesomeIcon icon={faCircleInfo}/>Success messages</p>
                <p className="notification text-white m-4 bg-warning p-3"><FontAwesomeIcon icon={faCircleInfo}/>Warning messages</p>
                <p className="notification text-white m-4 bg-danger p-3"><FontAwesomeIcon icon={faCircleInfo}/>Error messages</p>
                </div>
                <div className="col-lg-4"></div>
            </div>
        </div>
        </>
    )
}