import React, { useEffect, useState } from 'react';
import "./ReactMaterialBody.css"

export default function ReactMaterialBody(props){

    return(
        <>
            <div className='container'>
                {props.children}
            </div>
        </>
    )
}