
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { useEffect, useState } from 'react';
import Balance from './component/balance';
import ItemTrasaction from './component/ItemTrasaction';
import  'react-native-get-random-values' ; 
import Footer from './component/footer';
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

  }, [history,newBalance])

  const addNewEntry = (newEntry) =>{
    setHistory(()=>[...history, newEntry])
    
  }
  
  const modifyEntry = (id,newEntry) =>{
    console.log(id)
    let lista = history
    
    lista=history.map((value)=>{
      console.log("valor actual id: "+ value.id + "valor nuevo id: "+ newEntry.id)
      let a = {...value}
      if(value.id == id){

        a.amount = newEntry.amount
        a.concept = newEntry.concept
        a.date = newEntry.date
        console.log(a.amount)

      }
      return a
    })
    
    setHistory(lista)
    
  }

  const deleteEntry = (deleteEntry)=>{
    setHistory(()=>history.filter((value)=>value.id !== deleteEntry.id))

    
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
      <Balance addNewEntry={addNewEntry} balance={newBalance} modifyEntry={modifyEntry}   />
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
      
      <Footer addNewEntry={addNewEntry}/>
      
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
    width:"80%",
    height:"57%"
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
  },
  

});
