import React, { useEffect, useState } from 'react';
import ReactMaterialHeader from '../../../Components/Header/ReactMaterialHeader';
import ReactMaterialColumn from '../../../Components/Column/ReactMaterialColumn';
import ReactMaterialRow from '../../../Components/Row/ReactMaterialRow';

export default function DemoLayout(props) {

    return (
        <>

            <div className='container'>
                <ReactMaterialHeader>
                    <ReactMaterialRow>
                        <ReactMaterialColumn>
                            <>
                                <span class="material-symbols-outlined">
                                    menu
                                </span>
                            </>
                        </ReactMaterialColumn>
                        <ReactMaterialColumn>
                            <h4>React Material Components</h4>
                        </ReactMaterialColumn>
                    </ReactMaterialRow>
                </ReactMaterialHeader>
                {props.children}
            </div>
        </>
    )
}