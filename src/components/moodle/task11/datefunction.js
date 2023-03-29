import React from "react";
import { Link } from "react-router-dom";
export function Datefunction(){
    function date(){
        const d=document.getElementById("dob").value;
        const date1=new Date(d);
        date1.setDate(date1.getDate()+90);
    }
    return(
     <>
        <input type="date" id="dob"/>
        <input type="button" value="Get date" onclick={date}/>
        <div>{date1}</div>
     </>
    );
}

    
  


