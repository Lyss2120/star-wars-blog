import React, { useEffect } from 'react';
import { FaRegHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const CardCharacters = ({ detalles, agregarFavorito, url, image, name, gender, hair_color, eye_color, mass }) => {

    return (
        <>
            <div className='container-fluid  mb-3 test' >
                <div className="card border border-0" style={{ width: '16rem' }}>
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

            </div>

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