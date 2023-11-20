import React, { useEffect, useState } from 'react';
import ReactMaterialRow from '../../../Components/Row/ReactMaterialRow';
import ReactMaterialColumn from '../../../Components/Column/ReactMaterialColumn';
import ReactMaterialBadge from '../../../Components/Badge/ReactMaterialBadge';
import ReactMaterialCard from '../../../Components/Card/ReactMaterialCard';
import ReactMaterialBody from '../../../Components/Body/ReactMaterialBody';

export default function BadgeExample() {

    return (
        <>
            <ReactMaterialBody style={{padding:"0% 5%"}}>
                <ReactMaterialRow>
                    <ReactMaterialColumn >
                        <h1 style={{ color: "white" }}> Badge </h1>
                    </ReactMaterialColumn>
                </ReactMaterialRow>
                <ReactMaterialRow>
                    <ReactMaterialColumn>
                        <p style={{ color: "white",whiteSpace:"pre",lineHeight:"2.5"}}>
                            Badge, gezinme öğeleri ve simgelerle ilgili bildirimleri, sayıları veya durum bilgilerini gösterir <br/>
                            React Material Badge komponenti küçük tasarıma sahip bir önemli bilgi ve uyarıları gösterebileceğiniz bir komponenttir.Genellikle bilgi verme ve kullanıcılar hakkında kolay bilgi vermek amacıyla kullanılmaktadır.</p>
                    </ReactMaterialColumn>
                </ReactMaterialRow>
                <ReactMaterialRow>
                    <ReactMaterialColumn>
                        <ReactMaterialCard>
                            <ReactMaterialBadge badgeColor={"red"}></ReactMaterialBadge>
                        </ReactMaterialCard>
                    </ReactMaterialColumn>
                </ReactMaterialRow>
            </ReactMaterialBody>
        </>
    )
}