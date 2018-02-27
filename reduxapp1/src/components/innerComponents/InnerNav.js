import React from 'react';

import uuid from 'uuid';
//LOGIC IMPORTS
import {InnerNavItems} from './logic/InnerNavLogic';
let menu = [];

export function InnerNav(props){

  const handleClick = e => (  console.log("clicked") );
  menu = InnerNavItems.map( item => {
    return (
      <li key={uuid.v4()}>
        <a href={"#" + item} onClick={handleClick}>
        {item}
        </a>
      </li>
    )
  });
  return menu;

}
