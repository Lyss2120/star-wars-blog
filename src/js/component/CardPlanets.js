import React from 'react';
import { FaRegHeart } from "react-icons/fa";
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';


const CardPlanets = ({  detalles, agregarFavorito, url, name, population, terrain, image }) => {
    return (
        <div className='container-fluid background mb-3' >
            <div className="card" style={{ width: '18rem' }}>
                <img src={image} className="card-img-top" alt="..." />
                <div className="card-body text-start">
                    <h4 className="card-title py-2">{name}</h4>
                    <p className='m-0 '>Population: {population}</p>
                    <p className='m-0 '>Terrain: {terrain}</p>
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