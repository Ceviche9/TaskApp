import React, {useState} from 'react';
import {View,
        Text,
        StyleSheet,
        StatusBar,
        TextInput,
        Platform,
        KeyboardAvoidingView,
        TouchableOpacity,
        Keyboard,
                        } from 'react-native';
import Task from './TaskApp/Task';


export default function App() {
  
  //Para adicionar uma tarefa na tela.
  
  const [task, setTask] = useState();
  
  const [taskItems, setTaskItems] = useState([]);
  
  const AddTask = () => {
    Keyboard.dismiss();
    setTaskItems([... taskItems, task])
    setTask(null);
    
  }
  //Para deletar:
  
  const del = (index) => {
    let itemsCopy = [... taskItems];
    itemsCopy.splice(index,1);
    setTaskItems(itemsCopy)

  }

  
return (


  <View style={Tela}>

    
    <StatusBar 
    hidden={false}
    backgroundColor='black'
    barStyle='light-content'
     />
    <View style={Tela2}>
     
      <View style={{flexDirection:'row'}}  onPress={() => setTema()} >
        <Text style={titulo} >Today's task</Text>
        <TouchableOpacity>
    
        </TouchableOpacity>
      
      </View>


      <View style={Tela3}>
        
        {taskItems.map((item, index) => {return (

          <TouchableOpacity key={index} onPress={()=> del(index)} >
            <Task  text={item} />

          </TouchableOpacity>
        )})}
         
        
      </View>

    </View>

    <KeyboardAvoidingView  behavior={Platform.os === "ios" ? "padding" : "height"} style={teclado}>
      
      <TextInput  
      placeholder={'Write a task'}
      placeholderTextColor={'gray'}
      value={task}
      onChangeText={text => setTask(text)}
      style={input}
      
      />
      <TouchableOpacity onPress={() => AddTask()} >
          <View style={add}>
            <Text style={addTexto} >+</Text>
          </View>
      </TouchableOpacity>
    </KeyboardAvoidingView>
        
          
  </View>
  


);

}



const estilo = StyleSheet.create({

  


  Tela:{
    flex:1,
    backgroundColor: 'black',
    
  },
  Tela2:{
    paddingTop:30,
    paddingHorizontal:20, 



  },
  Tela3:{
    marginTop: 30,




  },
  
  titulo:{
    fontSize: 32,
    color: 'black',
    fontWeight: 'bold',
    marginHorizontal: 15,
    marginTop: 30,
    color: 'white',
    


  },
  teclado:{
    position: 'absolute',
    bottom: 60,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',





  },



  input: {

    fontSize: 18,
    color: 'black',
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: 'white',
    borderRadius: 60,
    borderColor: '#c0c0c0',
    borderWidth: 1,
    width: 250,
  



  },

  add:{
    width: 60,
    height: 60,
    backgroundColor: 'white',
    color: '#284243',
    fontWeight: 'bold',
    fontSize: 18,
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#284243',





  

  },
  Btn:{

    width: 30,
    height: 30,
    backgroundColor: '#c0c0c0',
    borderRadius: 60,
    marginHorizontal: 130,
    marginTop: 40,


  },
  



  
  
  


})


const {titulo} = estilo;
const {Tela} = estilo;
const {Tela2} = estilo;
const {Tela3} = estilo;
const {input} = estilo;
const {teclado} = estilo;
const {add} = estilo;
const {addTexto} = estilo;
const {Btn} = estilo;
const {barra} = estilo;





