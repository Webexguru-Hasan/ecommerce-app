import React from 'react'
import {AiFillStar} from 'react-icons/ai'
import { NavLink } from 'react-router-dom'

const ShowSingleProduct = ({datas}) => {
    return (
        <div>
            <div className='row justify-content-between align-items-center'>
            <div className="col-lg-6" style={{border: '1px solid #eee', borderRadius: '8px'}}>
                <div className='d-flex justify-content-center py-5'>
                <img src={datas.image} alt="" height='400px' width='400px' />

                </div>
                
            </div>

            <div className='col-lg-6'>
                <div className='ps-5'>
                <h5 className="text-uppercase text-secondary">{datas.category}</h5>
                <h1 className='mt-4 text-3xl'>{datas.title}</h1>
                <div className='d-flex align-items-center'>
                <p className='lead fw-bold text-xl mt-3 text-secondary'>Rating :</p>
                <span className='text-black fw-bold ms-2 mt-1 text-xl'>{datas.rating && datas.rating.rate}</span>
                <AiFillStar size={'24px'} className="text-warning ms-1"/>
                </div>
                <h3 className='display-6 fw-bold text-black'>
                    ${datas.price}
                </h3>
                <p className='fw-regular mt-2 text-success-50'>{datas.description}</p>
                <button className='btn btn-dark mt-3'>Add to cart</button>
                <NavLink to='/cart' className='btn btn-success mt-3 ms-4'>Go to Cart</NavLink>

                </div>
                
            </div>

            </div>
            
            
        </div>
    )
}

export default ShowSingleProduct
