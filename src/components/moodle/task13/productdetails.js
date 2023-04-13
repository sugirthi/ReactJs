import React,{useState,useEffect} from "react";
import { useParams } from "react-router-dom";
export function Details(){
    const[product,setProduct]=useState([]);
    const{id}=useParams();
    useEffect(()=>{
        fetch('https://fakestoreapi.com/products/'+id)
        .then(data=>data.json())
        .then(da=>setProduct(da))
    })
     
    return(
     
                <>
                        <div className="container-fluid m-5">
                            <div className="row">
                                <div className="col-lg-2"></div>
                                <div className="col-lg-4">
                                <img src={product.image} className="col-lg-8 ml-3 bg-dark p-4" alt="..." height="300px;" />
                                </div>
                                <div className="col-lg-4 bg-dark text-white">
                                <p className="">{product.title}</p>
                                <p className="">{product.category}</p>
                                <p className="">{product.description}</p>
                               
                                {/* <p>Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday</p>
                                <p>category:men's clothing</p>
                                <p>price:109.95</p>
                                <p>Rating:120</p>
                                <a href="" class="btn bg-primary text-white text-center">Add cart</a> */}
                                
                                </div>
                                <div className="col-lg-2"></div>
                            </div>
                        </div>
                               
                </>
            )
}