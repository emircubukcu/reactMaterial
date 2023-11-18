import React, { useEffect, useState } from 'react';
import "./ReactMaterialHeader.css"

export default function ReactMaterialHeader(props){

    return(
        <>
            <div className='header'>
                {props.children}
            </div>
        </>
    )
}