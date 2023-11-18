import React, { useEffect, useState } from 'react';
import ReactMaterialRow from '../../../Components/Row/ReactMaterialRow';
import ReactMaterialColumn from '../../../Components/Column/ReactMaterialColumn';
import ReactMaterialBadge from '../../../Components/Badge/ReactMaterialBadge';
import DemoLayout from '../Layout/DemoLayout';

export default function BadgeExample() {

    return (
        <>
            <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined" rel="stylesheet" />
            <DemoLayout>
                <ReactMaterialRow>
                    <ReactMaterialColumn>
                        <ReactMaterialBadge badgeColor={"red"}></ReactMaterialBadge>
                    </ReactMaterialColumn>
                </ReactMaterialRow>
            </DemoLayout>
        </>
    )
}