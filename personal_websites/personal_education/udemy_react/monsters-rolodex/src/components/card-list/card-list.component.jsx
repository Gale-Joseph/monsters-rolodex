import React from 'react'
import './card-list.styles.css'
import { Card } from '../card/card.component'

/* Here's how this function works: 
1. The CardList function will return a div styled with 'card-list' class
    when <CardList/> is called somewhere else
2. Within that div returned by <CardList/>, we will run some JavaScript
3. That JavaScript will add a property called "monsters" to the prop object
    of <CardList/>
4. It will then be the responsibility of whatever calls <CardList/> 
    to provide a "monsters" variable, in this case a list, to the 
    prop object of <CardList/>
5. This CardList fx will take the list provided and map it or loop through it
6. For each item in the monster list, the <Card/> component is called
    6a. The <Card/> component blueprint is in card/card.componenet.jsx
    6b. <Card/> is designed to accept a "monster"" value and then to print the 
        .name property of the monster value
*/
export const CardList = (props) => (
    <div className ='card-list'>
        {props.monsters.map(each=>(
            <Card key={each.id} monster={each}/>
        ))}
    </div>
    //for children: return <div className='card-list'>{props.children}</div>
);

