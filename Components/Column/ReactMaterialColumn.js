import React, { useEffect, useState } from 'react';
import "./ReactMaterialColumn.css"
import { Component } from 'react';

export default function ReactMaterialColumn({Size,children,style}) {

    const [columnClass,setColClass]=useState("col");

    useEffect(()=>{
        if(Size!=undefined || Size!=null){
              setColClass("col-"+Size)  
        }
    },[])


    return (
        <>
            <div style={style} className={columnClass}>
                {children}
            </div>
        </>
    )
}