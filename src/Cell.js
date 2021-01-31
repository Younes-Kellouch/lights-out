import React from 'react'
import "./Cell.css"


const cell =(props)=> {
  
  const litStyle="Cell" + (props.isLit ? " Cell-lit" : "");
  
  let clickHandler = ()=>{
    props.clicked(props.indexRow,props.indexCol);
  }

  return (
        <td className={litStyle} onClick={clickHandler} />
  )
  
}


export default cell;