import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#1A1A1A', 
  },  

  header: {
    alignItems: 'center',    
    height: '20%',
    width:'100%',
    backgroundColor: '#0D0D0D',
  },
  logo: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '80%',
    width: '100%',
  },
  containerInput:{
    flexDirection: 'row',
    marginRight: 15,
    marginLeft:15
        
  },
  list:{    
    minHeight: '100%',
    width: '100%',
    paddingLeft: 15,
    paddingRight: 15,
  },
  listHeader:{
    height:60,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  itemHeader:{
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  countTasks: {
    textAlign: 'center',
    textAlignVertical: 'center', 
    backgroundColor: '#333333',
    color: '#D9D9D9',
    height: 25,
    width: 40,
    borderRadius: 20,
    marginLeft: 5,
     
  },
  textTasks:{
    color: '#4EA8DE',
    fontWeight: 'bold'
  },
  textDone:{
    color: '#8284FA',
    fontWeight: 'bold'
  }

})