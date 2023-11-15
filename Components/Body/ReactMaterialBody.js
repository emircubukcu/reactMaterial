import React, { useEffect, useState } from 'react';
import "./ReactMaterialBody.css"

export default function ReactMaterialBody(props){

    return(
        <>
            <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined" rel="stylesheet" />
            <div className='container'>
                {props.children}
            </div>
        </>
    )
}