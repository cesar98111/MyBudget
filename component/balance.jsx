import {View,Text,StyleSheet, Pressable} from 'react-native'
import { useEffect, useState } from 'react'
import CreditInput from './creditInput'
const Balance = ({addNewEntry, entry, setEntry, balance,  }) =>{
    
    const[show, setShow] = useState(false)
    const[balaceColor, setBalanceColor] = useState('blue')
    useEffect(()=>{
        if(balance < 0){
            setBalanceColor('red')
        }else{
            setBalanceColor('blue')
        }
    },[balance])
    
    return(
        <>
            <View style = {styles.balance}>
                <Text style = {{...styles.balanceText,color:balaceColor}}> {balance} $</Text>
                <Pressable style={styles.balanceAdd} onPress={()=>{setShow(true)}}>
                    <Text style={styles.addText}>+</Text>
                </Pressable>
                <CreditInput show={show} setShow={setShow} entrys={entry} setEntrys={setEntry} addNewEntry={addNewEntry} />
            </View>
        </>
    )
}
const styles = StyleSheet.create({
    balance:{
      marginTop:100,
      backgroundColor:'#ccff90',
      borderRadius:20,
      height:100,
      width:'80%'
    },
    balanceAdd:{
        height:40,
        width:40,
        alignSelf:'flex-end',
        backgroundColor: '#29b6f6',
        borderRadius: 20,
        marginRight:20,
        marginBottom:20,
    },
    balanceText:{
        textAlignVertical:'center',
        textAlign:'center',
        height:'60%',
        textDecorationStyle: 'bold',
        

    },
    addText:{
        textAlign:'center',
        height:'100%',
        textAlignVertical:'center'
    },
    container: {
      flex: 0,
      backgroundColor: '#fff',
      flexDirection:'column',
      alignContent:'center',
      justifyContent: 'flex-start'
    },
});

export default Balance