import React from 'react';
import { FaRegHeart } from "react-icons/fa";
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';


const CardVehicles = ({ detalles, agregarFavorito, url, name, model, passengers, vehicle_class, image }) => {
    return (
        <>
            <div className='container-fluid  mb-3' >
                <div className="card border border-0" style={{ width: '18rem' }}>
                    <img src={image} className="card-img-top " alt="..." />
                    <div className="card-body bg-dark text-start">
                        <h5 className="card-title py-2">{name}</h5>
                        <p className="m-0 ">Model: {model}</p>
                        <p className="m-0 ">Passengers: {passengers}</p>
                        <p className="m-0 ">Vehicle_class: {vehicle_class}</p>
                        <div className="d-flex justify-content-between pt-3">
                            <Link to={detalles} key={name}>
                                <button href="#" className="btn btn-outline-primary">
                                    Learn more!
                                </button>
                            </Link>
                            <button href="#" className="btn btn-outline-warning "
                                // onClick={() => actions.agregarFavorito(name)}
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