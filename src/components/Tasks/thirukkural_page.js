import React, { useState, useEffect } from "react";
import './thirukkural.css';
import thiruvalluvar from './thiruvalluvar.jpg'
export function Thirukkural_Page() {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('http://localhost:3000/thirukkural.json')
            .then(data => data.json())
            .then(da => setData(da))
    })
    return (
        <>
            <div className="thirukkural_bg">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-4"></div>
                        <div className="col-lg-4">
                            <img src={thiruvalluvar} className="thiruvalluvar_img" />
                            <h1 className="text-center thirukkural-title">THIRUKKURAL</h1>
                        </div>
                        <div className="col-lg-4"></div>
                    </div>
                </div>
                <div className="container-fluid">
                    <div className="row justify-content-between">
                        {
                            data.map((value, index) =>
                                <>
                                    <div class="card thirukkural-card" >
                                        <div className="card-body">
                                            <h2 className="card-text">{value.Line1}</h2>
                                            <h2 className="card-text">{value.Line2}</h2>
                                            <h4 className="card-text">{value.explanation}</h4>
                                        </div>
                                    </div>
                                </>
                            )
                        }
                    </div>
                </div>
            </div>
        </>
    );
}