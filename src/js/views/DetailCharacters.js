import React, { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import rigo from '../../img/rigo-baby.jpg';
import { Context } from "../store/appContext";
import { useContext } from "react";

const DetailCharacters = (props) => {
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
                        <p className='texto'> {store.character?.description}</p>
                    </div>
                </div>
                <div className='py-4 row border-top border-danger'>
                    <div className="col-2 text-center text-danger ">
                        <span> Name: {store.character?.name}</span>
                    </div>
                    <div className="col-2 text-center text-danger ">
                        <span>Birth year: {store.character?.properties?.properties?.birth_year}</span>
                    </div>
                    <div className="col-2 text-center text-danger ">
                        <span>Mass: {store.character?.properties?.mass}</span>
                    </div>
                    <div className="col-2 text-center text-danger ">
                        <span>Height: {store.character?.properties?.height}</span>
                    </div>
                    <div className="col-2 text-center text-danger ">
                        <span>Skin color: {store.character?.properties?.skin_color}</span>
                    </div>
                    <div className="col-2 text-center text-danger ">
                        <span>Eye color: {store.character?.properties?.eye_color}</span>
                    </div>



                    {/*                     {store.characters.map((item) => {
							return (
									<div key={item.iid} className="col-2 mx-2 text-center text-danger">
										{item.detalles}
									</div>
							)
						})} esto daría dos divs con los dos detalles de prueba */}
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