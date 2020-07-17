import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight, Alert, TextInput, } from 'react-native';
import { useCallback, useState } from 'react';
import { hide } from 'expo/build/launch/SplashScreen';

export default function App() {
  return (
    <View style={styles.container}>

      <View>
      <Text style={styles.title}>CALCULADORA</Text>
      <StatusBar style="auto" />

      </View>

      <View style={styles.display}>
        <TextInput style={styles.displayfont} placeholder='0' placeholderTextColor="#000" />
      </View>

      <View style= {styles.bloco}>
        
      <TouchableHighlight onPress={onPress}>
        <View style={styles.button} >
          <Text style={styles.fontsize}>CE</Text>
        </View>
      </TouchableHighlight>

      <TouchableHighlight onPress={onPress}>
        <View style={styles.button} >
          <Text style={styles.fontsize}>%</Text>
        </View>
      </TouchableHighlight>

      <TouchableHighlight onPress={onPress}>
        <View style={styles.button} >
          <Text style={styles.fontsize}>/</Text>
        </View>
      </TouchableHighlight>

      <TouchableHighlight onPress={onPress}>
        <View style={styles.button} >
          <Text style={styles.fontsize}>X</Text>
        </View>
      </TouchableHighlight>
      </View>

      <View style= {styles.bloco}>
      <TouchableHighlight onPress={onPress}>
        <View style={styles.button} >
          <Text style={styles.fontsize}>7</Text>
        </View>
      </TouchableHighlight>

      <TouchableHighlight onPress={onPress}>
        <View style={styles.button} >
          <Text style={styles.fontsize}>8</Text>
        </View>
      </TouchableHighlight>

      <TouchableHighlight onPress={onPress}>
        <View style={styles.button} >
          <Text style={styles.fontsize}>9</Text>
        </View>
      </TouchableHighlight>

      <TouchableHighlight onPress={onPress}>
        <View style={styles.button} >
          <Text style={styles.fontsize}>-</Text>
        </View>
      </TouchableHighlight>
      </View>


      <View style= {styles.bloco}>

      <TouchableHighlight onPress={onPress}>
        <View style={styles.button} >
          <Text style={styles.fontsize}>4</Text>
        </View>
      </TouchableHighlight>

      <TouchableHighlight onPress={onPress}>
        <View style={styles.button} >
          <Text style={styles.fontsize}>5</Text>
        </View>
      </TouchableHighlight>

      <TouchableHighlight onPress={onPress}>
        <View style={styles.button} >
          <Text style={styles.fontsize}>6</Text>
        </View>
      </TouchableHighlight>

      <TouchableHighlight onPress={onPress}>
        <View style={styles.button} >
          <Text style={styles.fontsize}>+</Text>
        </View>
      </TouchableHighlight>

      </View>

      <View style= {styles.bloco}>

      <TouchableHighlight onPress={onPress}>
        <View style={styles.button} >
          <Text style={styles.fontsize}>1</Text>
        </View>
      </TouchableHighlight>

      <TouchableHighlight onPress={onPress}>
        <View style={styles.button} >
          <Text style={styles.fontsize}>2</Text>
        </View>
      </TouchableHighlight>

      <TouchableHighlight onPress={onPress}>
        <View style={styles.button} >
          <Text style={styles.fontsize}>3</Text>
        </View>
      </TouchableHighlight> 
      
      <TouchableHighlight>
        <View style={styles.buttonh} >
          <Text style={styles.fontsize}> </Text>
        </View>
      </TouchableHighlight> 

      </View>
      <View style= {styles.bloco}>

      <TouchableHighlight onPress={onPress}>
        <View style={styles.button0} >
          <Text style={styles.fontsize}>0</Text>
        </View>
      </TouchableHighlight>

      <TouchableHighlight onPress={onPress}>
        <View style={styles.button} >
          <Text style={styles.fontsize}>,</Text>
        </View>
      </TouchableHighlight> 

      <TouchableHighlight onPress={onPress}>
        <View style={styles.buttonEquals} >
          <Text style={styles.fontsize}>=</Text>
        </View>
      </TouchableHighlight> 
      
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor:'grey',
    width: 68,
    height: 87,
    borderRadius: 5,
    margin: 2,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor:'black',
  },
  bloco: {
    flexDirection:'row',
  },
  button0: {
    backgroundColor: 'grey',
    paddingVertical:28.05,
    paddingHorizontal:62.5,
    borderRadius:5,
    margin:2,
    borderWidth:2,
    borderColor:'black',
  },
  fontsize: {
    fontSize: 20,
  },
  buttonEquals: {
    backgroundColor: 'grey',
    paddingVertical:73.5,
    paddingHorizontal:27.2,
    borderRadius:5,
    margin:2,
    marginTop: '-121.5%',
    borderWidth: 2,
    borderColor: 'black',
  },
  display: {
    backgroundColor: '#ccc',
    width: 285,
    height:91,
    borderRadius: 5,
    marginBottom: 10,
    borderWidth: 3,
    borderColor: 'black',
  },
  displayfont:{
    fontSize:64,
    color:'black',
    textAlign: 'right',
  },
  title:{
    fontSize: 32,
  },
  buttonh: {
    width: 68,
    height: 87,
    margin: 2,
  },
});

const onPress = () =>{alert ('voce erou')}
