import {View,Text,StyleSheet, Pressable} from 'react-native'
import { useEffect, useState } from 'react'
import { Colors } from '../constant/colors'
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
        backgroundColor:Colors.containers.prymariDark,
        height:80
    },
    balance:{
        alignItems:"center",
        justifyContent:"center",
        backgroundColor:Colors.containers.prymary,
        height:100,
        width:'100%'
    },
    balanceContainer:{
        width:"100%",
        
    },
    balanceText:{
        textAlignVertical:'center',
        textAlign:'center',
        width:"30%",
        height:'25%',
        backgroundColor:Colors.containers.prymariLight,
        borderRadius:5,
        fontWeight:"bold"

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