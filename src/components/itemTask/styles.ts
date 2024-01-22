import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
  container:{
    flex: 1,        
    flexDirection: 'row', 
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#262626',
    height: 65,    
    borderRadius: 6,
    marginBottom:5

  },
  text:{
    flex:8,
    justifyContent: 'flex-start',    
    color: '#f2f2f2',
    fontSize: 14,
    padding:5
  },
  buttonDelete: {
    flex:2,
    justifyContent: 'center',
    alignItems: 'center',
  },

  buttonCheck: {
    flex:2,
    justifyContent: 'center',
    alignItems: 'center',

  }
})