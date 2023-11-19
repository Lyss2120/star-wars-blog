import React from 'react';
import { FaRegHeart } from "react-icons/fa";
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';


const CardPlanets = ({  detalles, agregarFavorito, url, name, population, terrain, climate, image }) => {
    return (
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
                                        <p className='m-0 text-start'>Population: {population}</p>
                                        <p className='m-0 text-start'>Terrain: {terrain}</p>
                                        <p className='m-0 text-start'>Climate : {climate}</p>
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
    )
}

CardPlanets.defaultProps = {
    image: 'https://via.placeholder.com/400x200.png',
    name: 'Tatoine!!',
    population: '2000!!',
    terrain: 'grasslands!!',
};

CardPlanets.propTypes = {
    image: PropTypes.string,
    name: PropTypes.string.isRequired,
    population: PropTypes.string,
    terrain: PropTypes.string,
};

export default CardPlanets