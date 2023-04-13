import React,{useState,useEffect} from "react";
import { Link } from "react-router-dom";
import './product.css';
import StarRatings from "react-star-ratings";
export function Page(){
         const[data,setData]=useState([]);
    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
        .then(data=>data.json())
        .then(da=>setData(da))
    })
    return(
        <>
                <div className="container-fluid">
                    <div className="row justify-content-between">
        {
            data.map((value,index)=>
                <>
                        <div class="card col-lg-3 fake-card mx-5 my-3" >
                            <img src={value.image} className="card-img-top fake_img" alt="..." />
                            <div className="card-body">
                             <p>{value.title}</p>
                             <p>price:{value.price}</p>
                             <p>Rating:<StarRatings
                                rating={value.rating.count}
                                starDimension="30px"
                                starSpacing="1px"
                                starRatedColor="gold"
                            /></p>
                             <Link to={`/ProductDetails/${value.id}`}><button className="btn btn-dark">View More</button></Link>
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