import axios from "axios";
import React, { useEffect, useState } from "react";

import "./Axios.css"

function Axios() {
    let [products, setproducts] = useState([])
    useEffect(() => {
        axios.get("http://dummyjson.com/products")
            .then((response) => {
                console.log(response.data.products)
                setproducts(response.data.products)
            })

    }, [])
    return (
        <>
            <div className="iphone">
                {
                    products.map((product) => {
                        return (
                            <div className="wrap">
                                <img src={product.thumbnail}></img>
                                <h1>{product.title}</h1>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}

export default Axios