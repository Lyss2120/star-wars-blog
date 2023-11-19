import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Context } from "../store/appContext";
import { useContext } from "react";
// import Cargando from '../component/cargando';

const CharHome = (props) => {
    const { store, actions } = useContext(Context);

    // useEffect(() => {
    //     // console.log('se ejecuta useeffect', name);
    //     let aver
    //     store.peoples && store.planets && store.vehicles ?
    //    aver=actions.getCharacters('https://swapi.dev/api/people/7')//poner  caquier nr o setear n random number para probar si haciendo un fetxh individual puedo traerme los random characters
    //     : null
    //     // actions.detailPeople(url)
    // }, [store.peoples])



    return (
        <>
            
            <div className=' container my-3' >
                <div className='mx-3 fs-4 text-uppercase '>Random Five</div>
                <div className="d-flex justify-content-around ">

                    <div className="caja1 col-6 me-3">
                        <div className="bg-clear caja1.1 my-3">
                            <div className="card mb-3 bg-dark test">
                                <img src='https://lumiere-a.akamaihd.net/v1/images/dee-bradley-baker-bbs2-interview2-featured_3e92ac3b.jpeg?region=0,0,1536,864&width=600' className="card-img-top" alt="card" />
                                <div className="card-body">
                                    <h5 className="card-title link-clear">Name</h5>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="caja2 d-flex flex-column justify-content-around">
                        {/* {store.RandomFour?.map((item, index) => {
                            return(
                                index >= 1 ?
                                <RandomFiveCard name={item.name} index={index} />
                                : null
                            )
                         })} */}

                        <div className="card bg-dark bg-clear" style={{ maxWidth: '540px' }}>
                            <div className="row g-0 ">
                                <div className="col-md-4">
                                    <img src='https://lumiere-a.akamaihd.net/v1/images/the-bad-batch-episode-guides-s2-midseason-featured-a_34060fda.jpeg?region=0,0,1536,864&width=320' className="img-fluid rounded-start" alt='img' />
                                </div>
                                <div className="col-md-8 test">
                                    <div className="card-body">
                                        <h5 className="card-title">store.RandomFour[m].name</h5>
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


export default CharHome
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