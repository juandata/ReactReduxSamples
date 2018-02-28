import React from "react";

import * as vistas from "./innerComponents/logic/SectionLogic";

import "../css/section.css";

export class Section extends React.Component {
  render() {
    return <section>{vistas.Home}</section>;
  }
}
