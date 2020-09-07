import React from 'react';

// import { Container } from './styles';
import './style.css'

const Entity = (props) => {

    const { name, age, address } = props

    return (

        <div className="container-entity">
            <div id="data">
                <h1>Name: {name}</h1>
                <h2>Age: {age}</h2>
                <h3>Address: {address}</h3>
            </div>
        </div>
    )
};

export default Entity;
