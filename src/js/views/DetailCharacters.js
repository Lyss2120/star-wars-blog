import React, { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Context } from "../store/appContext";
import { useContext } from "react";

const DetailCharacters = (props) => {
    const { store, actions } = useContext(Context);
    const { name } = useParams();
    useEffect(() => {
        actions.getCharacterByName(name)//byuid? byurl
        // actions.detailPeople(url)
    },)

    return (
        <>
            <div className='container background pt-3 mt-2 rounded'>
                <div className="d-flex justify-content-around mb-2 container background rounded">
                    <div className='col-6'>
                        <img src={props.image} alt="" className='img-fluid' />
                    </div>
                    <div className='col-6 px-3'>
                        <span className='text-danger characterName d-flex text-start my-4'>{store?.character?.name}</span>
                        <p className='texto fs-4'> {store?.description}</p>
                        <p className='texto fs-4'> {store?.loremDescription}</p>

                    </div>
                </div>
                <div className='py-4 row border-top border-danger'>
                    <div className="col-2 fontDetail text-center text-danger ">
                        <span> Name: </span>
                        <div>{store?.character?.name}</div>
                    </div>
                    <div className="col-2 fontDetail text-center text-danger ">
                        <span>Birth year: </span>
                        <div>{store?.character?.birth_year}</div>
                    </div>
                    <div className="col-2 fontDetail text-center text-danger ">
                        <span>Mass: </span>
                        <div>{store?.character?.mass}</div>

                    </div>
                    <div className="col-2 fontDetail text-center text-danger ">
                        <span>Height: </span>
                        <div>{store?.character?.height}</div>
                    </div>
                    <div className="col-2 fontDetail text-center text-danger ">
                        <span>Skin color: </span>
                        <div>{store?.character?.skin_color}</div>
                    </div>
                    <div className="col-2 fontDetail text-center text-danger ">
                        <span>Eye color: </span>
                        <div>{store?.character?.eye_color}</div>
                    </div>
                </div>
            </div>
        </>
    )
}

DetailCharacters.defaultProps = {
    image: 'https://via.placeholder.com/800x600.png',
    name: 'Lukeeee!!',
    hair_color: 'deep blue!!',
    eye_color: 'blonde!!',
    gender: 'male!!',
    detalles: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur eveniet quod tempora quibusdam dolorum error harum. Ad reprehenderit veniam distinctio dolore autem eius sequi unde ex. Omnis sed ab blanditiis porro aliquam dolore ex consectetur alias perspiciatis molestiae officiis iusto ut, tempore facilis cum iure est similique repellendus eum tenetur beatae, non incidunt voluptates a. Tempore est, cumque earum porro odit quae at, in nemo, hic recusandae possimus ea optio voluptatem iste explicabo suscipit numquam unde praesentium! Nobis, ad voluptate.',
}

export default DetailCharacters