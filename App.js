import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ReactMaterialBadge from './Components/Badge/ReactMaterialBadge';
import ReactMaterialBody from './Components/Body/ReactMaterialBody';
import ReactMaterialRow from './Components/Row/ReactMaterialRow';
import ReactMaterialColumn from './Components/Column/ReactMaterialColumn';


export default function App() {
  return (
    <ReactMaterialBody>
      <ReactMaterialRow>
        <ReactMaterialColumn Size={"2"}>
          <ReactMaterialBadge badgeColor={"red"} badgeIcon={""} badgeSize={"small"} badgeText={"Uyarı"} iconVisible={false} badgeStyle={"outline"} />
        </ReactMaterialColumn>
      </ReactMaterialRow>
    </ReactMaterialBody>

  );
}

