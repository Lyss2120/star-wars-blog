import React, { useEffect } from 'react';
import { FaRegHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const Testcard = (detalles, agregarFavorito, url, image, name, gender, hair_color, eye_color, mass) => {

    return (
        <div className="caja1.1 my-3 col-sm-3">
            <div className="card mb-3 bg-dark test">
                <img src='https://lumiere-a.akamaihd.net/v1/images/dee-bradley-baker-bbs2-interview2-featured_3e92ac3b.jpeg?region=0,0,1536,864&width=600' className="card-img-top" alt="card" />
                <div>
                    <div class="accordion accordion-flush caja1.1" id="accordionFlushExample">
                        <div class="accordion-item bg-dark">
                            <h2 class="accordion-header">
                                <button class="accordion-button bg-dark collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                    name
                                </button>
                            </h2>
                            <div id="flush-collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                <div class="accordion-body">
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
    )
}

export default Testcard


Testcard.defaultProps = {
    image: 'https://via.placeholder.com/400x200.png',
    name: 'Lukeeee!!',
    hair_color: 'deep blue!!',
    eye_color: 'blonde!!',
    gender: 'male!!',
};
