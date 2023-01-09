import React from 'react'

const Cargando = () => {
  return (
    <>

      <div className=" cargando">
        <span className=' mt-2 texto2 fw-bold text-white p-5 '>
          Loading . . .  
        </span>
        
        <div className="spinner-border text-light " role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>

      {/* <div className="container-md p-3 background rounded">
        <img src="https://miro.medium.com/max/720/1*q3DOBkt1K9ElahTMReum8Q.webp" alt="loading" />
      </div> */}
    </>
  )
}

export default Cargando