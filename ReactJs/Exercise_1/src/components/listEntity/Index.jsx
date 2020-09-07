import React from 'react';

// import { Container } from './styles';
import './style.css'

import Entity from '../Entity/Index'
const listEntity = () => {

    const list = [

        {
            id: 0,
            name: 'Manoel',
            age: 15,
            address: 'Rua dos Alfeneiros, 15'
        },

        {
            id: 1,
            name: 'José',
            age: 20,
            address: 'Rua dos Bandoleiros, 215'
        },

        {
            id: 2,
            name: 'Alfredo',
            age: 18,
            address: 'Rua dos Alfeneiros, 15'
        },

    ]

    return (
        <div className="listEntity">

            <div id="container-list-entity">

                {list.map(person => (
                    <Entity
                        key={person.id}
                        name={person.name}
                        age={person.age}
                        address={person.address}
                    />
                ))}

            </div>

        </div>
    );

};

export default listEntity;
