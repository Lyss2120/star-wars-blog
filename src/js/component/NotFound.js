import React from 'react';
import notfound from '../../img/404.webp'

const NotFound = () => {
    return (
        <div className="notfound">
            {/* <img src={notfound} alt="notfound" /> */}
            <span className='px-5 notfound fw-bold text-white'>404</span>
            <span className='texto2 fw-bold text-white'>NOT FOUND!!</span>
            <div className='mt-2 px-5 text-white'>This is not the page that you're looking for...</div>
            {/* <h1 className='d-flex justify-content-center'>MOVE ALONG...</h1>
            <h1 className='d-flex justify-content-center'>MOVE ALONG...</h1> */}
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