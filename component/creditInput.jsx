import { View,Modal, TextInput, StyleSheet ,Pressable, Text} from "react-native"
import NumericInput from "react-native-numeric-input"
import  'react-native-get-random-values' ; 
import  {  v4  as  uuidv4  }  from  'uuid' ;
import { useEffect, useState } from "react"

const CreditInput = ({show, setShow, OldEntry, addNewEntry ,modify, modifyEntry}) =>{
   
    const[entry, setEntry] = useState({
        id:uuidv4(),
        amount:0,
        concept:"",
        date:""
    })
    
    const amountHandle = (value)=>{
        value = parseInt(value)
        
        let now = new Date()
        
        setEntry((entry)=>{
            return{
               ...entry,
               amount:value,
               date:now.toLocaleString()
            }
        })
    }
    const conceptHandle = (value) =>{
        setEntry((entry)=>{
            return{
                ...entry,
                concept:value
            }  
        })
        
        
    }
    const modifyHandle = () =>{

        console.log("viejo: "+OldEntry)
        setEntry((entry)=>{
            return{
                ...entry,
                id:OldEntry
            }
        })
        
        
        modifyEntry(OldEntry, entry)
        setShow(false)
        setEntry((entry)=>{
            return{
                ...entry,
                amount:0,
                concept:"",
                date:""   
            }
        })
    }

    const sendHandle = () =>{
       

        console.log("nuevo: "+ entry.id)
        addNewEntry(entry)
        setShow(false)
        setEntry((entry)=>{
            return{
                ...entry,
                id:uuidv4(),
                amount:0,
                concept:"",
                date:""   
            }
            
        })
        console.log(entry)
    }

    return(
        <Modal  visible ={show} transparent={true} animationType={"slide"}>
            <View style={styles.inputDirection}>
                <View style ={styles.inputContainer}>
                    <View style={styles.inputRow}>
                        <TextInput
                        style={styles.textInput}
                        placeholder='introduce el concepto'
                        onChangeText={conceptHandle}
                        value={entry.concept}/>

                        <TextInput
                        style={styles.textInput}
                        placeholder='introduce el ingreso'
                        onChangeText={amountHandle}
                        keyboardType={"number-pad"}
                        value={entry.amount}/>


                    </View>
                    {
                        modify === false
                        ?<View style={styles.inputRowSecond}>
                            <Pressable style={styles.buttonAdd} onPress={() =>sendHandle()}>
                                <Text style ={styles.textAdd}>añadir</Text>
                            </Pressable>
                        </View>
                        :
                        <View style={styles.inputRowSecond}>
                            <Pressable style={styles.buttonAdd} onPress={()=> modifyHandle()}>
                                <Text style ={styles.textAdd}>modificar</Text>
                            </Pressable>
                        </View>
                    }
                    
                </View>    
            </View>   
        </Modal>
    )
}


const styles = StyleSheet.create({
    inputContainer:{
        width:300,
        height:300,
        backgroundColor: '#ccff90',
        borderColor:"black",
        borderStyle:"solid",
        justifyContent:"center",
        alignItems:'center',
        
        
    },
    
    inputDirection:{
        justifyContent:"center",
        alignItems:"center",
        width:"100%",
        height:"100%"
    },
    

})
export default CreditInput