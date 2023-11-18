import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ReactMaterialBadge from './Components/Badge/ReactMaterialBadge';
import ReactMaterialBody from './Components/Body/ReactMaterialBody';
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
          <ReactMaterialRow>
            <ReactMaterialColumn style={{display:"flex",justifyContent:"center",alignItems:"center",margin:".5rem"}} Size={1}>
              <ReactMaterialButton>
                <span class="material-symbols-outlined" style={{color:"white"}}>
                  menu
                </span>
              </ReactMaterialButton>
            </ReactMaterialColumn>
            <ReactMaterialColumn>
              <h4 style={{color:"white"}}>React Material Components</h4>
            </ReactMaterialColumn>
          </ReactMaterialRow>
        </ReactMaterialHeader>
        <ReactMaterialBody>
          <Routes>
            <Route path='/badge-example' element={<BadgeExample />} />
          </Routes>
        </ReactMaterialBody>
      </Router>
    </div>
  );
}

