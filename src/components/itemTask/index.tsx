import { useEffect } from 'react';
import {Text, View, TouchableOpacity} from 'react-native';

import IconNo from 'react-native-vector-icons/Feather';
import IconYes from 'react-native-vector-icons/MaterialIcons';

import { styles } from './styles';

export function ItemTask({item, onDelete, onCheck}){


  return(
    
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.buttonCheck}
        onPress={onCheck}
      >

      { item.check === false ?
        <IconNo name="circle" size={20} color={'#4EA8DE'}/> :
        <IconYes name="check-circle" size={20} color={'#5E60CE'}/>         
      }  
      
      </TouchableOpacity>

      { item.check === false ?
         <Text style={styles.text}>{item.name}</Text>:
         <Text style={styles.textDone}>{item.name}</Text>        
      } 
     
     
      <TouchableOpacity
        style={styles.buttonDelete}
        onPress={onDelete}
      >
          
        <IconNo name="trash-2" size={20} color={'#808080'}/>
      </TouchableOpacity>
    </View>
  )
}