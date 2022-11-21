
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { useEffect, useState } from 'react';
import Balance from './component/balance';
import ItemTrasaction from './component/ItemTrasaction';
import  'react-native-get-random-values' ; 
import  {  v4  as  uuidv4  }  from  'uuid' ;

export default function App() {
  const[entry, setEntry] = useState({
    id:"",
    amount:0,
    concept:"",
    date:""
  })
  const[newBalance, setNewBalance] = useState(0);
  const[history, setHistory] = useState([])
  useEffect(()=>{
    addBalance()
  },[history])
  
  const addNewEntry = (newEntry) =>{
    setHistory(()=>[...history, newEntry])
    addBalance(newEntry.amount)
  }
  
  const modifyEntry = (newEntry) =>{
    console.log("modificacion: " + newEntry)
    let lista = history
    
    lista=history.map((value)=>{
      let a ={...value}
      if(a.id == newEntry.id){
        a.id = uuidv4()
        a.amount = newEntry.amount
        a.concept = newEntry.concept
        a.date = newEntry.date
      }
      return a
    })
    setHistory(lista)
    addBalance(newEntry.amount)
  }

  const deleteEntry = (deleteEntry)=>{
    setHistory(()=>history.filter((value)=>value.id !== deleteEntry.id))

    addBalance((-deleteEntry.amount))
  }
  const addBalance = () =>{
      let count =0
      history.forEach((value)=>{
        count += value.amount
      })
      setNewBalance(count)
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
            key={transactionData.item.id}
            productId={transactionData.item.id}
            entry={transactionData.item}
            setEntry={setEntry}
            deleteItem={deleteEntry}
            modify={modifyEntry}
            />
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
