import React, { useEffect, useState } from 'react';
import "./ReactMaterialCard.css"

export default function ReactMaterialCard(props){

    return(
        <>
            <div className='card' style={props.style}>
                {props.children}
            </div>
        </>
    )
}