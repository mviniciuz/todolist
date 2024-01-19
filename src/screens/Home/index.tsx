import { View, Image, Text } from "react-native";

import { styles } from './styles';

import { Logo } from '../../components/Logo';


export function Home(){
  
  return(
 
    <View style={styles.container} >
      <View style={styles.header}>
        <Logo/>
              
     
      </View>    

    </View>
  
  )
}
