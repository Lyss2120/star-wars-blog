import React, { useEffect } from 'react';
import { FaRegHeart } from "react-icons/fa";
import { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const CardCharacters = ({ detalles, agregarFavorito, url, image, name, uid }) => {
    const { store, actions } = useContext(Context);
    useEffect(() => {
        actions.detailPeople(url)
    }, [])
    useEffect(() => {
        actions.detailPeople(url)
    }, [url])// si hay un cambio se ejecuta denuevo

    /* const {people} = store.people;
    console.log( people, 'people');//no accede a los valores dentro del obj properties
     */
    return (
        <>
            <div className='container-fluid background mb-3' >
                <div className="card" style={{ width: '18rem' }}>
                    <img src={image} className="card-img-top" alt="..." />
                    <div className="card-body text-start">
                        <h4 className="card-title py-2">{name}</h4>
                        <p className='m-0 '>Gender : {store.character?.properties?.gender}</p>
                        <p className='m-0 '>Hair color : {store.character?.properties?.hair_color}</p>
                        <p className='m-0 '>Eye color : {store.character?.properties?.eye_color}</p>
                        <div className="d-flex justify-content-between pt-3">
                            <Link to={detalles} key={name}>
                                <button href="#" className="btn btn-outline-primary">
                                    Learn more!
                                </button>
                            </Link>
                            <button href="#" className="btn btn-outline-primary "
                                // onClick={() => actions.agregarFavorito(name)}
                                onClick={() => agregarFavorito(name)}
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