import {View,Text,StyleSheet, Pressable} from 'react-native'
import { useEffect, useState } from 'react'
import CreditInput from './creditInput'
const Balance = ({addNewEntry, balance  }) =>{
    
    const[show, setShow] = useState(false)
    const[balaceColor, setBalanceColor] = useState('blue')
    useEffect(()=>{
        if(balance < 0){
            setBalanceColor('red')
        }else{
            setBalanceColor('green')
        }
    },[balance])
    
    return(
        <View style={styles.balanceContainer}>
            <View style={styles.header}></View>
            <View style = {styles.balance}> 
                <Text style = {{...styles.balanceText,color:balaceColor}}> {balance} $</Text>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    header:{
        backgroundColor:'#1e88e5',
        height:80
    },
    balance:{
        alignItems:"center",
        justifyContent:"center",
        backgroundColor:'#6ab7ff',
        height:100,
        width:'100%'
    },
    balanceContainer:{
        width:"100%",
        backgroundColor:"black"
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
        width:"30%",
        height:'25%',
        textDecorationStyle: 'bold',
        backgroundColor:"#b3e5fc",
        borderRadius:5

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