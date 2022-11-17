import { StatusBar } from 'expo-status-bar';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { useState } from 'react';
import Balance from './component/balance';
import ItemTrasaction from './component/ItemTrasaction';
export default function App() {
  const[entry, setEntry] = useState({
    amount:0,
    concept:"",
    date:""
  })

  return (
    <View style={styles.container}>
      <Balance entry={entry} setEntry={setEntry}/>
      <Text style={styles.balance}></Text>
      <FlatList data={entry} renderItem={(transactionData)=>{
        const{key, value} = transactionData.item;


        return(
          <ItemTrasaction style={styles.itemTransaction}
          key={key}
          productId={key}
          entry={transactionData}/>
        )
      }}/>

      
      
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
  itemTransaction:{
    height:30,
    width:"80%",
    backgroundColor:"red"
  }

});
