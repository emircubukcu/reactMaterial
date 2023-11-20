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

export default function App() {
  return (
    <div style={{ backgroundColor: "#1E1F22" }}>
      <Router>
        <ReactMaterialHeader>
          <ReactMaterialRow style={{height:"100%"}}>
            <ReactMaterialColumn style={{display:"flex",justifyContent:"center",alignItems:"center",margin:"0 .5rem",maxWidth:"50px",minWidth:"50px",alignItems:"center"}}>
              <ReactMaterialButton>
                <span class="material-symbols-outlined" style={{color:"white",fontSize:"24px",padding:"0px",margin:"0px",display:"flex",justifyContent:"center",alignItems:"center"}}>
                  menu
                </span>
              </ReactMaterialButton>
            </ReactMaterialColumn>
            <ReactMaterialColumn style={{display:"flex",alignItems:"center"}}>
              <p style={{color:"white",fontSize:"24px",padding:"0px",margin:"0px"}}>React Material Components</p>
            </ReactMaterialColumn>
          </ReactMaterialRow>
        </ReactMaterialHeader>
        <ReactMaterialPageBody>
          <Routes>
            <Route path='/badge-example' element={<BadgeExample />} />
          </Routes>
        </ReactMaterialPageBody>
      </Router>
    </div>
  );
}

