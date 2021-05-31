## 💻 Languages and Tools.

![image](https://camo.githubusercontent.com/9d07c04bdd98c662d5df9d4e1cc1de8446ffeaebca330feb161f1fb8e1188204/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f4a6176615363726970742d4637444631453f7374796c653d666f722d7468652d6261646765266c6f676f3d6a617661736372697074266c6f676f436f6c6f723d626c61636b)
![image](https://camo.githubusercontent.com/0b9bce580a369d91352cf37397f1e079ef104531fc0bc53a145deb8f43fca535/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f52656163745f4e61746976652d3230323332413f7374796c653d666f722d7468652d6261646765266c6f676f3d7265616374266c6f676f436f6c6f723d363144414642)

## 📋 Inside the app.
React Native apps may target iOS 11.0 and Android 5.0 (API 21) or newer. You may use Windows, macOS, or Linux as your development operating system, though building and running iOS apps is limited to macOS. Tools like [Expo](https://expo.io/) can be used to work around this.

## 📱  Introduction.
![image](https://user-images.githubusercontent.com/83431609/118301412-64eaf000-b4b9-11eb-8404-dfd9fdbf9c94.png) 
![image](https://user-images.githubusercontent.com/83431609/118301679-bc895b80-b4b9-11eb-986b-82df0d382b90.png)




## 💻  Beginning

```js
import React, {useState} from  'react';
import {View,Text,StyleSheet,StatusBar,TextInput,Platform,
KeyboardAvoidingView,TouchableOpacity,Keyboard,}
from 'react-native';
import Task from  './TaskApp/Task';
```
> All of these components are essential for the functioning of the code.
## 💻  View
```js
return (

<View  style={Tela}>

  

<StatusBar

hidden={false}

backgroundColor='black'

barStyle='light-content'

/>

<View  style={Tela2}>

<View  style={{flexDirection:'row'}}  onPress={() =>  setTema()}  >

<Text  style={titulo}  >Today's task</Text>

<TouchableOpacity>

</TouchableOpacity>

</View>

  
  

<View  style={Tela3}>

{taskItems.map((item, index) => {return (

  

<TouchableOpacity  key={index}  onPress={()=>  del(index)}  >

<Task  text={item}  />

  

</TouchableOpacity>

)})}

</View>

  

</View>

  

<KeyboardAvoidingView  behavior={Platform.os ===  "ios"  ?  "padding"  :  "height"}  style={teclado}>

<TextInput

placeholder={'Write a task'}

placeholderTextColor={'gray'}

value={task}

onChangeText={text  =>  setTask(text)}

style={input}

/>

<TouchableOpacity  onPress={() =>  AddTask()}  >

<View  style={add}>

<Text  style={addTexto}  >+</Text>

</View>

</TouchableOpacity>

</KeyboardAvoidingView>

</View>

);
```

## 📱 Style

```js
const  estilo  =  StyleSheet.create({

Tela:{

flex:1,

backgroundColor:  'black',

},

Tela2:{

paddingTop:30,

paddingHorizontal:20,

},

Tela3:{

marginTop:  30,
 
},

titulo:{

fontSize:  32,

color:  'black',

fontWeight:  'bold',

marginHorizontal:  15,

marginTop:  30,

color:  'white',

},

teclado:{

position:  'absolute',

bottom:  60,

width:  '100%',

flexDirection:  'row',

justifyContent:  'space-around',

alignItems:  'center',
},

input:  {

fontSize:  18,

color:  'black',

paddingVertical:  15,

paddingHorizontal:  15,

backgroundColor:  'white',

borderRadius:  60,

borderColor:  '#c0c0c0',

borderWidth:  1,

width:  250,


},

 
add:{

width:  60,

height:  60,

backgroundColor:  'white',

color:  '#284243',

fontWeight:  'bold',

fontSize:  18,

borderRadius:  60,

justifyContent:  'center',

alignItems:  'center',

borderWidth:  1,

borderColor:  '#284243',

},

Btn:{

  
width:  30,

height:  30,

backgroundColor:  '#c0c0c0',

borderRadius:  60,

marginHorizontal:  130,

marginTop:  40,
},
})
```




