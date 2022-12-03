import React from 'react';
import notfound from '../../img/404.webp'

const NotFound = () => {
    return (
        <div className="notfound">
            <h1 className='mt-2 texto2 fw-bold text-white p-5 m-5'>NOT FOUND!!</h1>
            <h3 className='mt-2 px-5 m-5'>This is not the page that you're looking for...</h3>
            <h1 className='d-flex justify-content-center'>MOVE ALONG...</h1>
            <h1 className='d-flex justify-content-center'>MOVE ALONG...</h1>

        </div>

    )
}

export default NotFound


{/*        <div className='background p-2'>
            <span className='texto fs-1 fst-italic d-flex text-center'>The greatest teacher, failure is. -That is the true burden of all masters. – Yoda</span>
            <div className='d-flex justify-content-center  my-1'> 
            <img src={notfound} alt="yoda" className='img-fluid ' />
         </div>
        <img src={notfound} alt="yoda" className='img-fluid' />

        </div> */}