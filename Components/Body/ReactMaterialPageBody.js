import React, { useEffect, useState } from 'react';
import "./ReactMaterialPageBody.css"

export default function ReactMaterialPageBody(props){

    return(
        <>
            <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined" rel="stylesheet" />
            <div className='container' style={props.style}>
                {props.children}
            </div>
        </>
    )
}