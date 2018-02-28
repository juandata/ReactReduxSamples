import React from "react";

import "../css/main.css";

import { Section } from "./Section";
import store  from '../redux/store';

// Redux-stuff
import { connect } from 'react-redux';
import { changeView } from '../redux/actions';

export function Main(props) {

  return (
    <main>
      <Section view={  store.getState().menu}/>
    </main>
  );
}

 const mapStateToProps = state => {
   return {
     view : changeView(state)
   }
 }
