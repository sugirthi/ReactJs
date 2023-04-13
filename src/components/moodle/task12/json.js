import React,{useState,useEffect} from "react";
import './json.css';
import StarRatings from "react-star-ratings";
export function Json(){
         const[data,setData]=useState([]);
    useEffect(()=>{
        fetch('http://localhost:3000/json/data.json')
        .then(data=>data.json())
        .then(da=>setData(da))
    })
    return(
        <>
                <div className="container-fluid dog-bg">
                    <div className="row justify-content-between">
        {
            data.map((value,index)=>
                <>
                        <div class="card col-lg-3 dog-card mx-5 my-3" >
                            <img src={value.dog_img} className="card-img-top dog_img" alt="..." />
                            <div className="card-body">
                            <h5 className="card-title dog_txt">{value.dog_name}</h5>
                            <p className="card-text">{value.des}</p>
                            <h6 className="card-text"><span className="dog_txt">Price: </span>{value.rate}</h6>
                            <StarRatings
                                rating={value.rating}
                                starDimension="15px"
                                starSpacing="1px"
                                starRatedColor="gold"
                            />
                            <a href={value.link} class="btn  dog_but text-center">Know More</a>
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