import React, { useEffect, useState } from 'react';
import "./ReactMaterialButton.css"
import ReactMaterialCard from '../Card/ReactMaterialCard';

export default function ReactMaterialButton(props){

    return(
        <>
            <div className='button' style={props.style} onClick={props.onClickEvent}>
                {props.children}
            </div>
            
        </>
    )
}