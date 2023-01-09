import React, { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Context } from "../store/appContext";
import { useContext } from "react";
import Cargando from '../component/cargando';

const DetailVehicles = (props) => {
    const { store, actions } = useContext(Context);
    const { name } = useParams();
    useEffect(() => {
        // console.log('se ejecuta useeffect', name);
        actions.getVehicleByName(name)//byuid? byurl
        // actions.detailPeople(url)
    },[])

    return (
        <>

            {store.vehicle?.name == name ?
                (<div className='container background pt-3 mt-2 rounded'>
                    <div className="d-flex justify-content-around mb-2 container background rounded">
                        <div className='col-6'>
                            <img src={props.image} alt="" className='img-fluid' />
                        </div>
                        <div className='col-6 px-3'>
                            <span className='text-danger characterName d-flex text-start my-4'>{store?.vehicle?.name}</span>
                            <p className='texto fs-4'> {store?.description}</p>
                            <p className='texto fs-4'> {store?.loremDescription}</p>

                        </div>
                    </div>
                    <div className='py-4 row border-top border-danger'>
                        <div className="col-2 fontDetail text-center text-danger ">
                            <span> Name: </span>
                            <div>{store?.vehicle?.name}</div>
                        </div>
                        <div className="col-2 fontDetail text-center text-danger ">
                            <span>Model: </span>
                            <div>{store?.vehicle?.model}</div>
                        </div>
                        <div className="col-2 fontDetail text-center text-danger ">
                            <span>Passengers: </span>
                            <div>{store?.vehicle?.passengers}</div>

                        </div>
                        <div className="col-2 fontDetail text-center text-danger ">
                            <span>Vehicle_class: </span>
                            <div>{store?.vehicle?.vehicle_class}</div>
                        </div>
                        <div className="col-2 fontDetail text-center text-danger ">
                            <span>Cargo capacity: </span>
                            <div>{store?.vehicle?.cargo_capacity}</div>
                        </div>
                        <div className="col-2 fontDetail text-center text-danger ">
                            <span>Crew: </span>
                            <div>{store?.vehicle?.crew}</div>
                        </div>
                    </div>
                </div>)
                :
                (
                    <Cargando />
                )
            }

        </>
    )
}

DetailVehicles.defaultProps = {
    image: 'https://via.placeholder.com/800x600.png',
    name: 'Sand crawler!!',
    detalles: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur eveniet quod tempora quibusdam dolorum error harum. Ad reprehenderit veniam distinctio dolore autem eius sequi unde ex. Omnis sed ab blanditiis porro aliquam dolore ex consectetur alias perspiciatis molestiae officiis iusto ut, tempore facilis cum iure est similique repellendus eum tenetur beatae, non incidunt voluptates a. Tempore est, cumque earum porro odit quae at, in nemo, hic recusandae possimus ea optio voluptatem iste explicabo suscipit numquam unde praesentium! Nobis, ad voluptate.',
}

export default DetailVehicles