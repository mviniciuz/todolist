import { useState } from 'react';
import { View, FlatList, Text, Alert } from "react-native";

import { styles } from './styles';

import { Logo } from '../../components/Logo';
import { InputTask } from "../../components/imputTask";
import { ButtonTask } from "../../components/buttonTask";
import { ItemTask } from "../../components/itemTask";

export function Home(){

  const [taskList, setTaskList] = useState([]);
  const [textTask, setTextTask] = useState('');

  function handleAddTask(data:string){  
    setTaskList((prevState) => [...prevState, {name: data, check: false}])
  }

  function handleDeleteTask(data){
    setTaskList((prevState) => prevState.filter(item => item.name !== data.name)) 
  }

  function handleCheckTask(data){
    setTaskList((prevState) => prevState.find(item => item.name === data.name))

    
  }
    
  return(
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.logo}>
          <Logo height={50} width={140}/>
        </View>
        <View style={styles.containerInput}>
          <InputTask value={textTask} setValue={setTextTask}/>
          <ButtonTask
            onSubimit={()=>handleAddTask(textTask)}            
          />
        </View>
        <View style={styles.list}>
          <View style={styles.listHeader}>
            <View style={styles.itemHeader}>
              <Text style={styles.textTasks}>{'Created'}</Text>
              <Text style={styles.countTasks}>{'02'}</Text>
            </View>
            <View style={styles.itemHeader}> 
              <Text style={styles.textDone}>{'Doned'}</Text>
              <Text style={styles.countTasks}>{'02'}</Text>           
            </View>         

          </View>
          <FlatList
            keyExtractor={item => item.name}
            data={taskList}
            renderItem={({item}) => <ItemTask
             item={item}
             onDelete={() => handleDeleteTask(item)}
             onCheck={() => handleCheckTask(item)}
          />}
          
          />          
        </View> 
      </View>               
    </View>  
  )
}
