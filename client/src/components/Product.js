import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function Product() {

    const productID = useParams();
    const [product, setProduct] = useState({});
    const ratePoint = []


    console.log(ratePoint)

    const fetchData = () => {
        fetch(`http://localhost:5000/products/${productID.id}`)
            .then((response) => response.json())
            .then((data) => setProduct(data[0]))
            .catch((error) => console.log(error));
    }

    useEffect(() => {
        fetchData()
    }, [])

    console.log(product)


    return (
        <div className='container'>
            {
                Object.keys(product).length > 0 ?

                    <div>
                        <div className='row mt-5'>
                            <img className='col-4 ' src={product.image} alt="" style={{ height: "300px" }} />
                            <div className='col-8 mt-5'>
                                <h1> {product.name}</h1>
                                <h4>Fiyatı : {product.price} TL</h4>
                                <p>{product.description}</p>
                                <div>
                                    <span className='mr-3'>{product.starpoint}</span>
                                    <span className="fa fa-star checked"></span>
                                    <span className="fa fa-star checked"></span>
                                    <span className="fa fa-star checked"></span>
                                    <span className="fa fa-star"></span>
                                    <span className="fa fa-star"></span>
                                </div>


                                <button className="btn btn-outline-dark my-2">Sepete Ekle</button>
                                <button className="btn btn-outline-secondary my-2 ml-3">Hemen Satın Al</button>


                            </div>

                        </div>
                        <h3 className='my-5'>Yorumlar</h3>
                        {
                            product.rating.map(rating => {
                                return (<div className='m-auto card'>
                                    <h5>{rating.name}</h5>
                                    <p>{rating.comment}</p>
                                    <span>{rating.rate}</span>
                                </div>)
                            })
                        }
                    </div>

                    : <h1>Yükleniyor ..... </h1>
            }
        </div>
    )
}
