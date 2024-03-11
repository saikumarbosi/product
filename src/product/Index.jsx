import React, { useEffect, useState } from 'react'
import './Index.css'

const Index = () => {
    const [product, setProduct] = useState([])
    // const [show, setShow] = useState(true)

    const handleProduct = async () => {
        try {
            const response = await fetch("https://fakestoreapi.com/products")
            const data = await response.json()
            setProduct(data)
        }
        catch (e) {
            console.log("Err", e)
        }
    }

    useEffect(() => {
        handleProduct()
    }, [])
    // console.log(product)

    const handleData = (list) => {
        // setShow(show)
        alert(`TITLE: ${list.title} 
        CATEGORY: ${list.category} 
        DESCRIPTION: ${list.description} 
        PRICE: ${list.price}`)
    }

    return (
        <div className='bg'>
            {product.map((item) => {
                return (
                    <div className='container' onClick={() => handleData(item)}>
                        <span>
                            <h1>{item.title}</h1>
                            <p>{item.category}</p>
                            <p className='cat'>{item.description}</p>
                            <p>Rs:{item.price}</p>
                        </span>
                        <img src={item.image} alt='' />
                    </div>
                )
            })}
        </div>
    )
}

export default Index
