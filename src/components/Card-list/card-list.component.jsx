import React from 'react';
import { Card } from '../Card/Card.component';
import './card-list.styles.css';


export const CardList = props => (
    <div className='card-list'> 
        {props.monsters.map(monster => (
            <Card key={monster.id} monster={monster}/>
        ))} 
    </div>
);

export const CardListArrowPropsFunction = props => {
    console.log(props);
    return (
        <div className='card-list'> 
            {props.monsters.map(monster => (
                <h1 key={monster.id}> {monster.name} </h1>
            ))} 
        </div>
    );
};


export const CardListArrowFunction = (props) => {
    console.log(props);
    return (
        <div className='card-list'> 
            {props.monsters.map(monster => (
                <h1 key={monster.id}> {monster.name} </h1>
            ))} 
        </div>
    );
}

export function CardListFunction(props) {
    console.log(props);
    return (<div className='card-list'>{props.children}</div>);
};