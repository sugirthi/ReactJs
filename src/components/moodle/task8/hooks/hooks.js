import React,{useState} from "react";
import './hooks.css';
export function Hook(){
    const[count,setCount]=useState(0);
    function reset(){
        setCount(count*0)
    }
    return(
        <>
        <div className="container-fluid row bg-hook">
        <div className="col-lg-4"></div>
        <div className="hook-div bg-dark col-lg-4 p-5 m-5">
            <h1 className="s-hook1">{count}</h1><br/><br/>
            <input type="button" value="Increment" className="btn b-hook1 bg-success" onClick={()=>{setCount(count+1)}}/><br/><br/>
            <input type="button" value="Decrement" className="btn b-hook1 bg-danger" onClick={()=>{setCount(count-1)}}/><br/><br/>
            <input type="button" value="Reset" className="btn  b-hook1 bg-warning" onClick={reset}/>
        </div>
        <div className="col-lg-4"></div>
        </div>
        </>  
    );
}