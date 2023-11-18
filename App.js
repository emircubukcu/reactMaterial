import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ReactMaterialBadge from './Components/Badge/ReactMaterialBadge';
import ReactMaterialBody from './Components/Body/ReactMaterialBody';
import ReactMaterialRow from './Components/Row/ReactMaterialRow';
import ReactMaterialColumn from './Components/Column/ReactMaterialColumn';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import BadgeExample from './Pages/DemoPages/BadgeExample/BadgeExample';

export default function App() {
  return (
    <Router>
        <Routes>
          <Route path='/badge-example' element={<BadgeExample/>}/>
        </Routes>
    </Router>

  );
}

