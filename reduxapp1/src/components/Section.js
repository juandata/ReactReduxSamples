import React from "react";

import * as vistas from "./innerComponents/logic/SectionLogic";



import "../css/section.css";

export function Section(props){
    return <section>{vistas.Home}{props.view}</section>;
}
