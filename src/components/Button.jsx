import React from "react";
import "../stylesheets/Button.css"

export const isOperator = (val) =>{
  return isNaN(val) && val !== "." && val !== "=";
};


export function Button(props) {

  return(
    <div
    className={ `container-button ${ isOperator(props.children) ? "operator" : null }`.trimEnd()}
    onClick={() => props.handleClick(props.children)}>
      {props.children}
    </div>
  )
}

