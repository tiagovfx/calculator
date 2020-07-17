import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight, Alert, } from 'react-native';
import { useCallback, useState } from 'react';

export default function App() {
  return (
    <View style={styles.container}>

      <View>
      <Text>Calculadora</Text>
      <StatusBar style="auto" />

      </View>

      <View style= {styles.bloco}>
      <TouchableHighlight onPress={onPress}>
        <View style={styles.button} >
          <Text>7</Text>
        </View>
      </TouchableHighlight>

      <TouchableHighlight onPress={onPress}>
        <View style={styles.button} >
          <Text>8</Text>
        </View>
      </TouchableHighlight>

      <TouchableHighlight onPress={onPress}>
        <View style={styles.button} >
          <Text>9</Text>
        </View>
      </TouchableHighlight>
      </View>

      <View style= {styles.bloco}>

      <TouchableHighlight onPress={onPress}>
        <View style={styles.button} >
          <Text>4</Text>
        </View>
      </TouchableHighlight>

      <TouchableHighlight onPress={onPress}>
        <View style={styles.button} >
          <Text>5</Text>
        </View>
      </TouchableHighlight>

      <TouchableHighlight onPress={onPress}>
        <View style={styles.button} >
          <Text>6</Text>
        </View>
      </TouchableHighlight>

      </View>

      <View style= {styles.bloco}>

      <TouchableHighlight onPress={onPress}>
        <View style={styles.button} >
          <Text>1</Text>
        </View>
      </TouchableHighlight>

      <TouchableHighlight onPress={onPress}>
        <View style={styles.button} >
          <Text>2</Text>
        </View>
      </TouchableHighlight>

      <TouchableHighlight onPress={onPress}>
        <View style={styles.button} >
          <Text>3</Text>
        </View>
      </TouchableHighlight> 

      </View>
      <View style= {styles.bloco}>

      <TouchableHighlight onPress={onPress}>
        <View style={styles.button} >
          <Text>0</Text>
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
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor:'grey',
    padding: 30,
    borderRadius: 5,
    margin: 2,
  },
  bloco: {
    flexDirection:'row',
  },
  button0: {
    padding: 30,
    borderRadius:5,
    margin:5,
  },
});

const onPress = () =>{alert ('voce erou')}
