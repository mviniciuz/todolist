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
    
    const exists = taskList.filter(item=> item.name === data);
    if (exists.length > 0){   
      return Alert.alert('Error',`Task exists ${data}`);      
    }

    setTaskList((prevState) => [...prevState, {name: data, check: false}]);
    setTextTask('');
  }

  function handleDeleteTask(data){
    Alert.alert('Deleting tasks', 'Do you want exclude task?', [
      {
        text: "yes",
        onPress: ()=>  setTaskList((prevState) => prevState.filter(item => item.name !== data.name)) 
      },
      {
        text: "No",
      
      }
    ])

   
  }

  function handleCheckTask(data){
    const index = taskList.findIndex(item => item.name === data.name);    
    let tasks = [...taskList];
    tasks[index].check = !tasks[index].check;
    setTaskList(tasks);  
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
              <Text style={styles.textTasks}>{'Tasks'}</Text>
              <Text style={styles.countTasks}>{
                taskList.length
              }</Text>
            </View>
            <View style={styles.itemHeader}> 
              <Text style={styles.textDone}>{'Doned'}</Text>
              <Text style={styles.countTasks}>{
                taskList.filter(item=>item.check === true).length
              }</Text>           
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
