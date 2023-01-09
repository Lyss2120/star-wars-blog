import React, { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Context } from "../store/appContext";
import { useContext } from "react";

const DetailPlanets = () => {

    const { store, actions } = useContext(Context);
    const { name } = useParams()
    useEffect(() => {
        actions.getPlanetByName(name)//byuid? byurl

    }, [name])

    return (

        <>
            {!!store.planet?.name ?
                (
                    <div className='container background pt-3 mt-2 rounded'>
                        <div className="d-flex justify-content-around mb-2 container background rounded">
                            <div className='bg-danger col-6'>
                                <img src={props.image} alt="" className='img-fluid' />
                            </div>
                            <div className='col-6 px-3'>
                                <span className='text-danger fs-3 d-flex text-start my-4'>{store.planet?.name}</span>
                                <p className='texto'>{store.planet?.description}</p>
                            </div>
                        </div>
                        <div className='py-4 row border-top border-danger'>
                            <div className="col-2 text-center text-danger ">
                                <span> Name: {store.planet?.name}</span>
                            </div>
                            <div className="col-2 text-center text-danger ">
                                <span>diameter: {store.planet?.diameter}</span>
                            </div>
                            <div className="col-2 text-center text-danger ">
                                <span>diameter: {store.planet?.climate}</span>
                            </div>
                            <div className="col-2 text-center text-danger ">
                                <span>population: {store.planet?.population}</span>
                            </div>
                            <div className="col-2 text-center text-danger ">
                                <span>terrain: {store.planet?.terrain}</span>
                            </div>
                        </div>
                    </div>
                )
                :
                (
                    <Cargando />
                )
            }
        </>
    )
}

export default DetailPlanets