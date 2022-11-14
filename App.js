import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useState } from 'react';
import Balance from './component/balance';
export default function App() {
  


  return (
    <View style={styles.container}>
      <Balance/>
      <Text style={styles.balance}></Text>
    </View>
  );
}

const styles = StyleSheet.create({
  balance:{
    width:20
  },
  container: {
    flex: 0,
    backgroundColor: '#fff',
    flexDirection:'column',
    alignItems:'center',
    justifyContent: 'flex-start'
  },
});
