import React, { useState, useEffect } from 'react'

export default function Home() {
    const [products, setProducts] = useState([])


    const fetchData = () => {
        fetch("http://localhost:5000/products/allproducts")
            .then(response => response.json())
            .then(data => setProducts(data))
            .catch((error) => console.log(error));

    }

    useEffect(() => {
        fetchData();
    }, [])


    return (
        <div className='container row m-2'>
            {
                products.length > 0 ? products.map((product, key) => {
                    return (
                        <div key={key} className="card m-2 p-2">
                            <h5 className='text-center'> {product.name}</h5>
                            <img src={product.image} alt="" style={{ width: "150px", height: "150px" }} />
                            <a className='text-center' href={`/products/${product._id}`}>Ürün Detayları</a>
                        </div>
                    )
                }) : <h1>Yükleniyor ..... </h1>
            }
        </div>
    )
}
