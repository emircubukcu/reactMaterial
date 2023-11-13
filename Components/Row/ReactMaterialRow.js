import React, { useEffect, useState } from 'react';
import "./ReactMaterialRow.css"

export default function ReactMaterialRow(props){

    return(
        <>
            <div className='row'>
                {props.children}
            </div>
        </>
    )

}