import React from 'react';
import classes from './CardList.module.scss'
import Card from "../card/Card";


const CardList = props => {
    const {monsters} = props;

    return (
        <div className={classes.CardList}>
            {
                monsters.map(m => {
                    return (
                        <Card
                            key={m.id}
                            monster={m}
                        />
                    )
                })
            }
        </div>
    )
};

export default CardList;
