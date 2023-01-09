import React from 'react'

const Cargando = () => {
  return (
    <div className="cargando py-5">
      <span className='mt-5 texto2 fw-bold text-white py-5 m-5 '>
        Loading . . .
      </span>
      <div className="spinner-border text-light " role="status">
        <span className="visually-hidden">Loading...</span>
      </div>

    </div>
  )
}

export default Cargando