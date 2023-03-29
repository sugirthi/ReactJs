import React,{useState} from "react";
import './fruitcounter.css';
import img from './mango.gif';
import img1 from './img2.gif';

export function Fruitcounter(){
    const[count1,setCount1]=useState(0);
    const[count2,setCount2]=useState(0);

    return(
       <>
       <div className="bg-fc">
       <div className="centerdiv">
            <div className="col-lg-12">
                <h1 className="fc-head">Sugi ate <span className="text-warning">{count1}</span> Mangoes and <span  className="text-warning">{count2}</span> Bananas</h1>
            </div>
            <div className="container row">
            <div className="col-lg-6 col-md-12 fcdiv">
                <img src={img} className="col-lg-12"/><br/>
                <input type="button" value="Eat Mango" className="btn b-fc bg-warning text-white" onClick={()=>{setCount1(count1+1)}}/><br/><br/>
            </div>
            <div className="col-lg-6 col-md-12 fcdiv">
                <img src={img1} className="col-lg-12 "/>
                <input type="button" value="Eat banana" className="btn b-fc bg-warning text-white" onClick={()=>{setCount2(count2+1)}}/><br/><br/>
            </div>
            </div>             
       </div>
       </div>
       </>

    );
}