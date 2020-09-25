import React from 'react';
import Card from './Card';

const CardList = ({ robots }) => {
    return (
        <div>
            {
                robots.map((user, i) => {
                    return (
                        <Card
                        key = {i}
                        id = {robots[i].id}
                        name = {robots[i].name}
                        email = {robots[i].email}
                        />
                    );
                })
            }
        </div>
    );
}
// You should Review this code. Be with 9-24-2020
export default CardList;

/** Pure Component
 *  const CardList = ({robots}) => {}
 * PROPS are simply things that come out of STATE
*/