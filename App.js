
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
  const[newBalance, setNewBalance] = useState(0);
  const[history, setHistory] = useState([])

  const addNewEntry = (newEntry) =>{
    setHistory(()=>[...history, newEntry])
    addBalance(newEntry.amount)
  }

  const deleteEntry = (deleteEntry)=>{
    setHistory(()=>history.filter((value)=>value.amount !== deleteEntry))
    addBalance((-deleteEntry))
  }
  const addBalance = (balance) =>{
    
      setNewBalance(newBalance + balance)
      console.log(newBalance)

  }
  return (
    <View style={styles.container}>
      <Balance addNewEntry={addNewEntry} entry={entry} setEntry={setEntry} balance={newBalance}   />
      <Text style={styles.balance}></Text>
      <View style={styles.itemList}>
        <FlatList data={history} renderItem={(transactionData)=>{
          
          return(
            <ItemTrasaction style={styles.itemTransaction}
            styleButton={styles.button}
            styleModifyButton={styles.modifyButton}
            key={"ASDAD"+transactionData.item.concept}
            productId={"ASAD"+transactionData.item.concept}
            entry={transactionData.item}
            deleteItem={deleteEntry}/>
          )
        }}/>
      </View>
      

      
      
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
  itemList:{
    width:"80%"
  },
  itemTransaction:{
    flexDirection:'row',
    height:50,
    backgroundColor:'#ccff90',
    marginBottom:10,
    
  },
  button:{
    height:20,
    width:"20%",
    backgroundColor:'red'
  },
  modifyButton:{
    backgroundColor:'blue',
    height:20,
    width:"20%"
  }

});
