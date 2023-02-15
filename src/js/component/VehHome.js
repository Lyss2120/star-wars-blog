import React, { useEffect } from 'react';
import { FaRegHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import rigo from "../../img/rigo-baby.jpg"

const VehHome = ({ detalles, agregarFavorito, url, image, name, gender, hair_color, eye_color, mass }) => {

    return (
        <>
            <div className=' container-sm my-3' >
                <div className='mx-3 fs-4 text-uppercase '>VehHome</div>
                <div className="container-sm d-flex justify-content-around flex-row-reverse">

                    <div className="caja1 col-6">
                        <div className="bg-clear caja1.1 my-3">
                            <div className="card mb-3 bg-dark test">
                                <img src='https://lumiere-a.akamaihd.net/v1/images/dee-bradley-baker-bbs2-interview2-featured_3e92ac3b.jpeg?region=0,0,1536,864&width=600' className="card-img-top" alt="card" />
                                <div className="card-body ">
                                    <div class="accordion accordion-flush" id="accordionFlushExample">
                                        <div class="accordion-item bg-clear text-light">
                                            <h2 class="accordion-header " id="flush-headingOne">
                                                <button class="accordion-button collapsed bg-dark light-underline" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                                    <span className='link-clear '>name</span>
                                                </button>
                                            </h2>
                                            <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                                <div class="accordion-body">
                                                    <p className=' link-clear'>Gender :</p>
                                                    <p className=' link-clear'>Hair color : </p>
                                                    <p className=' link-clear'>Eye color : </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="d-flex justify-content-between ">
                                        <Link to={detalles} key={name}>
                                            <button href="#" className="btn btn-sm btn-dark">
                                                Learn more!
                                            </button>
                                        </Link>
                                        <button href="#" className="btn btn-sm btn-dark"
                                            onClick={() => agregarFavorito(name, url)}
                                        >
                                            <FaRegHeart />
                                        </button>
                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="caja2 d-flex flex-column justify-content-around">
                        <div className="card bg-dark bg-clear" style={{ maxWidth: '540px' }}>
                            <div className="row g-0 test">
                                <div className="col-md-4">
                                    <img src='https://lumiere-a.akamaihd.net/v1/images/the-bad-batch-episode-guides-s2-midseason-featured-a_34060fda.jpeg?region=0,0,1536,864&width=320' className="img-fluid rounded-start" alt='img' />
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h5 className="card-title">Name</h5>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="card bg-dark bg-clear " style={{ maxWidth: '540px' }}>
                            <div className="row g-0 test">
                                <div className="col-md-4">
                                    <img src='https://lumiere-a.akamaihd.net/v1/images/katee-sackhoff-bo-katan-tall_6c4aa004.jpeg?region=0,0,1536,864&width=320' className="img-fluid rounded-start" alt='img' />
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h5 className="card-title">Name</h5>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="card bg-dark bg-clear " style={{ maxWidth: '540px' }}>
                            <div className="row g-0 test">
                                <div className="col-md-4">
                                    <img src='https://lumiere-a.akamaihd.net/v1/images/swce23-featured-celebrity-guests_e3e087f4.jpeg?region=0,0,1536,864&width=320' className="img-fluid rounded-start" alt='img' />
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h5 className="card-title">Name</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </>
    )
}


export default VehHome
/*                <div className="card border border-0" style={{ width: '16rem' }}>
                    <img src={image} className="card-img-top" alt="..." />
                    <div className="card-body bg-dark text-start">
                        <h4 className="card-title py-2">{name}</h4>
                        <p className='m-0 '>Gender : {gender}</p>
                        <p className='m-0 '>Hair color : {hair_color}</p>
                        <p className='m-0 '>Eye color : {eye_color}</p>
                        <div className="d-flex justify-content-between pt-3">
                            <Link to={detalles} key={name}>
                                <button href="#" className="btn btn-outline-primary">
                                    Learn more!
                                </button>
                            </Link>
                            <button href="#" className="btn btn-outline-warning "
                                onClick={() => agregarFavorito(name, url)}
                            >
                                <FaRegHeart />
                            </button>
                        </div>
                    </div>
                </div>
*/ 