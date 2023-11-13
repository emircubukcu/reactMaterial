import React, { useEffect, useState } from 'react';
import './ReactMaterialBadge.css';
import InfoIcon from '@mui/icons-material/Info';

export default function ReactMaterialBadge({ badgeSize,badgeIcon,badgeText,badgeColor,iconVisible,badgeStyle }) {

    const [badgeType,setBadgeType]=useState()

    useEffect(()=>{
        if(badgeStyle=="outline"){setBadgeType(1)}else{setBadgeType(0)}
        
    })

    return (
        <>
            {badgeType == 1 ? (
                <div className='badge badge-outline' style={{ outlineStyle:"solid",outlineWidth:"1px", outlineColor: badgeColor }}>
                    <div className='badge-icon'><InfoIcon style={{ display: "flex", justifyContent: "center", alignItems: "center" }} /></div>
                    <div className='badge-text'>{badgeText}</div>
                </div>
            ) : (
                <div className='badge' style={{ backgroundColor: badgeColor }}>
                    <div className='badge-icon'><InfoIcon style={{ display: "flex", justifyContent: "center", alignItems: "center" }} /></div>
                    <div className='badge-text'>{badgeText}</div>
                </div>
            )}
        </>
    )
}