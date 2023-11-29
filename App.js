import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ReactMaterialBadge from './Components/Badge/ReactMaterialBadge';
import ReactMaterialPageBody from './Components/Body/ReactMaterialPageBody';
import ReactMaterialRow from './Components/Row/ReactMaterialRow';
import ReactMaterialColumn from './Components/Column/ReactMaterialColumn';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BadgeExample from './Pages/DemoPages/BadgeExample/BadgeExample';
import ReactMaterialHeader from './Components/Header/ReactMaterialHeader';
import ReactMaterialButton from './Components/Button/ReactMaterialButton';
import ReactMaterialSideBar from './Components/SideBar/ReactMaterialSidebar';
import ReactMaterialCard from './Components/Card/ReactMaterialCard';
import { useState } from 'react';



export default function App() {

    var [SidebarStatus,setSidebar]=useState(true)

    const toggleSidebar =()=>{
        setSidebar(!SidebarStatus)
    }


    return (
        <div style={{ backgroundColor: "#1E1F22",display:"grid",gridTemplateColumns:"auto 1fr",gridTemplateRows:"60px auto",gridTemplateAreas:"'header header header' 'sidebar body body'"}}>
            <Router>
                <ReactMaterialHeader>
                    <ReactMaterialRow style={{ height: "100%" }}>
                        <ReactMaterialColumn style={{ display: "flex", justifyContent: "center", alignItems: "center", margin: "0 .5rem", maxWidth: "50px", minWidth: "50px", alignItems: "center" }}>
                            <ReactMaterialButton onClickEvent={toggleSidebar}>
                                <span className="material-symbols-outlined unselectable" style={{ color: "white", fontSize: "24px", padding: "0px", margin: "0px", display: "flex", justifyContent: "center", alignItems: "center" }}>
                                    menu
                                </span>
                            </ReactMaterialButton>
                        </ReactMaterialColumn>
                        <ReactMaterialColumn style={{ display: "flex", alignItems: "center" }}>
                            <p style={{ color: "white", fontSize: "24px", padding: "0px", margin: "0px", width: "100%" }}>React Material Components</p>
                        </ReactMaterialColumn>
                    </ReactMaterialRow>
                </ReactMaterialHeader>
                <ReactMaterialSideBar toggleSidebar={SidebarStatus}>
                    <ReactMaterialRow>
                        <ReactMaterialColumn>
                            <ReactMaterialCard>
                                <p>Test</p>
                            </ReactMaterialCard>
                        </ReactMaterialColumn>
                    </ReactMaterialRow>
                </ReactMaterialSideBar>
                <ReactMaterialPageBody>
                    <Routes>
                        <Route path='/badge-example' element={<BadgeExample />} />
                    </Routes>
                </ReactMaterialPageBody>

            </Router>
        </div>
    );
}

