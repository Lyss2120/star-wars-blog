import React, { useEffect } from 'react';
import { FaRegHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const CardCharacters = ({ detalles, agregarFavorito, url, image, name, gender, hair_color, eye_color, mass }) => {

    return (
        <>
            <div className="caja1.1 my-3 col-sm-3">
                <div className="card mb-3 bg-dark test">
                    <img src='https://lumiere-a.akamaihd.net/v1/images/dee-bradley-baker-bbs2-interview2-featured_3e92ac3b.jpeg?region=0,0,1536,864&width=600' className="card-img-top" alt="card" />
                    <div className="">
                        <div className="accordion accordion-flush" id="accordionFlushExample">
                            <div className="accordion-item bg-clear text-light">
                                <h2 className="accordion-header " id="flush-headingOne">
                                    <button className="accordion-button collapsed bg-dark light-underline" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                        <span className='link-clear '>{name}</span>
                                    </button>
                                </h2>
                                <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                    <div className="accordion-body">
                                        <p className='m-0 text-start'>Gender : {gender}</p>
                                        <p className='m-0 text-start'>Hair color : {hair_color}</p>
                                        <p className='m-0 text-start'>Eye color : {eye_color}</p>
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






            {/* <div className='container mb-3 ' >
                <div className="border border-0 card mb-3 bg-dark test" style={{ width: '16rem' }}>
                    <img src={image} className="card-img-top" alt="..." />
                     <div className="card-body text-start">
                        <div class="accordion accordion-flush" id="accordionFlushExample">
                            <div class="accordion-item bg-clear text-light">
                                <h2 class="accordion-header " id="flush-headingOne">
                                    <button class="accordion-button collapsed bg-dark light-underline" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                      <span className='link-clear '>{name}</span>  
                                    </button>
                                </h2>
                                <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                    <div class="accordion-body">
                                        <p className=' link-clear'>Gender : {gender}</p>
                                        <p className=' link-clear'>Hair color : {hair_color}</p>
                                        <p className=' link-clear'>Eye color : {eye_color}</p>
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
            </div> */}

        </>
    )
}


CardCharacters.defaultProps = {
    image: 'https://via.placeholder.com/400x200.png',
    name: 'Lukeeee!!',
    hair_color: 'deep blue!!',
    eye_color: 'blonde!!',
    gender: 'male!!',
};

CardCharacters.propTypes = {
    image: PropTypes.string,
    name: PropTypes.string.isRequired,
    hair_color: PropTypes.string,
    eye_color: PropTypes.string,
    gender: PropTypes.string.isRequired,
};
export default CardCharacters