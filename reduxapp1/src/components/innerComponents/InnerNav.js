import React from "react";

import uuid from "uuid";
//LOGIC IMPORTS
import { InnerNavItems } from "./logic/InnerNavLogic";
import {changeView} from '../../redux/actions';
import store from '../../redux/store';
let menu = [];

/*export class InnerNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = { id: "" };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
  }
  render() {
    menu = InnerNavItems.map(item => {
      return (
        <li key={uuid.v4()}>
          <a href={"#" + item} id={item} onClick={this.handleClick}>
            {item}
          </a>
        </li>
      );
    });
    return menu;
  }
}
*/

export function InnerNav(props) {
  const handleClick = e => {
    e.preventDefault();
    console.log(e.target.id);
    store.dispatch(changeView(e.target.id));
  };
  menu = InnerNavItems.map(item => {
    return (
      <li key={uuid.v4()}>
        <a href={"#" + item} id={item} onClick={handleClick}>
          {item}
        </a>
      </li>
    );
  });
  return menu;
}
