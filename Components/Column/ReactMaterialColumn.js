import React, { useEffect, useState } from 'react';
import "./ReactMaterialColumn.css"
import { Component } from 'react';

export default function ReactMaterialColumn({Size,children}) {


    console.log(Size)

    return (
        <>
            <div className={"col-"+Size}>
                {children}
            </div>
        </>
    )
}