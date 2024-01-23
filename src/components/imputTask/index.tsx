import { TextInput } from "react-native";
import { styles } from "./styles";

export function InputTask({value, setValue}){
  return(
    <TextInput style={styles.input}
      placeholder="Add a new task"
      placeholderTextColor={'#808080'}
      value={value}
      onChangeText={setValue}
    />
  )
}