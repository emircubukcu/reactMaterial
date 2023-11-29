import React, { useEffect, useState } from 'react';
import "./ReactMaterialSidebar.css"

export default function ReactMaterialSideBar(props) {

    const [sidebarClass,setSidebarStat]=useState()

    useEffect(()=>{
        console.log("props.toggleSidebar: ",props.toggleSidebar)
        if(props.toggleSidebar){
            //visible
            setSidebarStat("rm-sidebar")
        }
        else{
            setSidebarStat("rm-sidebar rm-sidebar-collapsed")
        } 
    })
    

    return (
        <>
            <div className={sidebarClass} >
                {props.children}
            </div>

        </>
    )

}