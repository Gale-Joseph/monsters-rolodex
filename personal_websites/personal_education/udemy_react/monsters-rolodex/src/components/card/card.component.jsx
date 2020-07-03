import React from 'react';
import './card.styles.css';

/* What's happening here? 
 1. The <Card/> component is styled with 'card-container'
 2. The function returns a div containing an image and name
 3. In order for the image to work, the <Card/> component  will needs a 
    "monster" attribute attached to prop that is an object and has
    an "id" attribute.
4. In order for the <h1> to work, <Card/> will need to be supplied with 
    a prop attribute called monster that is an object and contains a name

*/
export const Card = (props) => (
    <div className='card-container'>
        <img 
            alt="monster" 
            src={`https://robohash.org/${props.monster.id}?set=set2&size=180x180`}
        />
        <h2>{props.monster.name}</h2>
        <p> {props.monster.email}</p>
    </div>
)