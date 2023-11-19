import React from 'react';
import { FaRegHeart } from "react-icons/fa";
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';


const CardVehicles = ({ detalles, agregarFavorito, url, name, model, passengers, vehicle_class, image }) => {
    return (
        <>
            <div className='caja1.1 my-3 col-sm-3' >
                <div className="card mb-3 bg-dark test">
                <img src={image} className="card-img-top" alt="..." />
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
                                        <p className='m-0 text-start'>Model: {model}</p>
                                        <p className='m-0 text-start'>Passengers: {passengers}</p>
                                        <p className='m-0 text-start'>Vehicle_class: {vehicle_class}</p>
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

        </>
    )
};

CardVehicles.defaultProps = {
    image: 'https://via.placeholder.com/400x200.png',
    name: 'Digger Crawler!!',
    model: 'modelo cualquiera!!',
    passengers: 'unos ctos pasajeros!!',
    vehicle_class: 'con ruedas!!',
  };

  CardVehicles.propTypes = {
    image: PropTypes.string,
    name: PropTypes.string.isRequired,
    model: PropTypes.string,
    passengers: PropTypes.string,
    vehicle_class: PropTypes.string
  };

export default CardVehicles