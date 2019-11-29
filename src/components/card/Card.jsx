import React from 'react';
import classes from './Card.module.scss'

const Card = props => {
    const {monster} = props;
    return (
        <div className={classes.Card}>
            <img src={`https://robohash.org/${monster.id}?set=set2&size=180x180`} alt="monster"/>
            <h2>{monster.name}</h2>
            <p><strong>{monster.email}</strong></p>
        </div>
    )
};

export default Card;
