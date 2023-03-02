import React, { useState } from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Loading from './Loading'
import ShowSingleProduct from './ShowSingleProduct'

const SingleProduct = () => {
    const {id} = useParams()
    const [product, setProduct] = useState([])
    console.log(product)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        async function getDataId(){
            try{
                const response = await fetch(`https://fakestoreapi.com/products/${id}`)
                const data = await response.json()
                
                setProduct(data)
                setLoading(true)
            }catch(error){
                console.error(error)
            }
        }
        getDataId()
    }, [])
    return (
        <>
        <div className='container pt-10'>
        
                 {loading ? <ShowSingleProduct datas={product} /> : <Loading /> }
                 
            
        </div>
            
        </>
    )
}

export default SingleProduct

