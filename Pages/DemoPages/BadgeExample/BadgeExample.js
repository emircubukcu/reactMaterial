import React, { useEffect, useState } from 'react';
import ReactMaterialRow from '../../../Components/Row/ReactMaterialRow';
import ReactMaterialColumn from '../../../Components/Column/ReactMaterialColumn';
import ReactMaterialBadge from '../../../Components/Badge/ReactMaterialBadge';
import ReactMaterialCard from '../../../Components/Card/ReactMaterialCard';

export default function BadgeExample() {

    return (
        <>
            <ReactMaterialRow>
                <ReactMaterialColumn >
                    <h1 style={{color:"white"}}> Badge </h1>
                </ReactMaterialColumn>
            </ReactMaterialRow>
            <ReactMaterialRow>
                <ReactMaterialColumn>
                    <p style={{color:"white"}}>React Material Badge komponenti küçük tasarıma sahip bir önemli bilgi ve uyarıları gösterebileceğiniz bir komponenttir.Genellikle bilgi verme ve kullanıcılar hakkında kolay bilgi vermek amacıyla kullanılmaktadır.</p>
                </ReactMaterialColumn>
            </ReactMaterialRow>
            <ReactMaterialRow>
                <ReactMaterialColumn>
                    <ReactMaterialCard>
                        <ReactMaterialBadge badgeColor={"red"}></ReactMaterialBadge>
                    </ReactMaterialCard>
                </ReactMaterialColumn>
            </ReactMaterialRow>
        </>
    )
}