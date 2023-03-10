import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import Loading from './Loading'
import ShowProduct from './ShowProduct'




const ProductData = () => {
    const [data, setData] = useState([])
    const [filter, setFilter] = useState()
    const [loading, setLoading] = useState(false)
    
    
    useEffect(() => {
        async function getData(){
            
            try{
                
                const response = await fetch('https://fakestoreapi.com/products')
                const data = await response.json()
                setData(data)
                setLoading(true)
                setFilter(data) 
            }catch(error){
                console.error(error)
            }
        }
        getData()
        
        }, [])

        
    
    
    return (
        <>
        <div className='container'>
        
            
            <div className='row justify-content-center'>
                 {loading ? <ShowProduct datas={data} /> : <Loading /> }
                 
            </div>
        </div>
            
        </>
    )
}

export default ProductData
