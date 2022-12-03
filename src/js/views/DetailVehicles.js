import React, { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import rigo from '../../img/rigo-baby.jpg';
import { Context } from "../store/appContext";
import { useContext } from "react";

const DetailVehicles = () => {

    const { store, actions } = useContext(Context);
    const { name } = useParams()
    useEffect(() => {
        actions.getCharacterByName(name)//byuid? byurl

    }, [name])

    return (
        <>
            <div className='container background pt-3 mt-2 rounded'>
                <div className="d-flex justify-content-around mb-2 container background rounded">
                    <div className='bg-danger col-6'>
                        <img src={props.image} alt="" className='img-fluid' />
                    </div>
                    <div className='col-6 px-3'>
                        <span className='text-danger fs-3 d-flex text-start my-4'>{store.character?.name}</span>
                        <p className='texto'>{store.character?.description}</p>
                    </div>
                </div>
                <div className='py-4 row border-top border-danger'>
                    <div className="col-2 text-center text-danger ">
                        <span> Name: {store.character?.name}</span>
                    </div>
                    <div className="col-2 text-center text-danger ">
                        <span>model: {store.character?.model}</span>
                    </div>
                    <div className="col-2 text-center text-danger ">
                        <span>vehicle_class: {store.character?.vehicle_class}</span>
                    </div>
                    <div className="col-2 text-center text-danger ">
                        <span>passengers: {store.character?.passengers}</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DetailVehicles