import React from 'react';

const Card = ({ name, email, id }) => {
    return(
        <div className="tc bg-black-30 dib br3 pa4 ma2 grow bw2 shadow-5">
            <img alt='ironman' src={`https://robohash.org/${id}?200x200`} />
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
}

export default Card;

/** JavaScript Expression
 * So that the group of having a brackets is filed with ES6
 * The { name, email, id } is called deconstruction / cleaner code
*/