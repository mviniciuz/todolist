import { TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/AntDesign';

import {styles} from './styles';


export function ButtonTask({onSubimit}){

  return(
    <TouchableOpacity    
      style={styles.container}
      onPress={onSubimit}
    >
      <Icon name="pluscircleo" size={18} color={'#f2f2f2'}/>
    </TouchableOpacity>
  )
}