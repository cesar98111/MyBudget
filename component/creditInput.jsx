import { View,Modal, TextInput, StyleSheet ,Pressable, Text, Image} from "react-native"
import Calendar from "./calendar";
import { Colors } from "../constant/colors";
import  'react-native-get-random-values' ; 
import  {  v4  as  uuidv4  }  from  'uuid' ;
import { useState,useEffect } from "react";



const CreditInput = ({show, setShow, OldEntry, addNewEntry ,modify, modifyEntry}) =>{
    
    const[showMessage, setShowMessage] = useState(false);
    const[showCalendar, setShowCalendar]= useState(false);
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

    const dateHandle =(value) =>{
        setEntry((entry) =>{
            return{
                ...entry,
                date:value
            }
        })
    }

    const modifyHandle = () =>{
        if((entry.amount!==0)&&(entry.concept!=="")&&(entry.date!=="")){
            setShowMessage(false)
            
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
        }else{
            setShowMessage(true)
        }

        
    }

    const sendHandle = () =>{
        if((entry.amount!==0)&&(entry.concept!=="")&&(entry.date!=="")){
            setShowMessage(false)
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
           
        }else{
            setShowMessage(true)
            
        }

        
        
    }
    
   
    

    return(
        <Modal  visible ={show} transparent={true} animationType={"slide"}>
            <View style={styles.inputDirection}>
                <View style ={styles.inputContainer}>
                    <View style={styles.inputGroup}>
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
                        
                        <Pressable style={styles.textInput} onPress={()=>setShowCalendar(!showCalendar)}>
                            <Text style={styles.textDateInput}>Añadir fecha</Text>
                        </Pressable>

                    </View>
                    {
                        showMessage === true 
                        ? <View style={styles.message}>
                            <Text style={styles.messageText}>Por favor introduzca todos los campos</Text>
                          </View>
                        : null
                    }
                    
                    <View style={styles.groupButton}>
                        {
                            modify === false
                            ?
                            <Pressable style={styles.buttonAdd} onPress={() =>sendHandle()}>
                                <Text style ={styles.textAdd}>añadir</Text>
                            </Pressable>
                            
                            :
                            <Pressable style={styles.buttonAdd} onPress={()=> modifyHandle()}>
                                <Text style ={styles.textAdd}>modificar</Text>
                            </Pressable>
                            
                        }
                        <Pressable style={styles.buttonCancel} onPress={()=>{ setShow(!show); setShowMessage(false)}}>
                            <Text style={styles.textCancel}>Cancelar</Text>
                        </Pressable>
                        <Calendar dateHandle={dateHandle} show={showCalendar} setShow={setShowCalendar}/>
                    </View>
                    
                    
                </View>    
            </View>   
        </Modal>
    )
}


const styles = StyleSheet.create({
    inputContainer:{
        width:300,
        height:300,
        backgroundColor:Colors.containers.prymariDark,
        borderStyle:"solid",
        justifyContent:"space-around",
        alignItems:'center',

    },
    message:{
        width:"90%",
        backgroundColor:"red"
    },
    messageText:{
        whith:"100%",
        fontWeight:"bold",
        textAlign:"center"
    },
    inputDirection:{
        justifyContent:"center",
        alignItems:"center",
        width:"100%",
        height:"100%",
        
    },
    inputGroup:{
        alignItems:"center",
        width:"100%"
    },

    groupButton:{
        width:"100%",
        flexDirection:"row",
        justifyContent:"space-around"
        
    },
    buttonAdd:{
        height:25,
        width:"30%",
        backgroundColor:Colors.button.acept
    },
    buttonCancel:{
        height:25,
        width:"30%",
        backgroundColor:Colors.button.cancel
    },
    textInput:{
        backgroundColor:Colors.button.add,
        width:"80%",
        height:40,
        marginBottom:10,
        color:"gray"
    },
    textDateInput:{
        height:"100%",
        textAlign:"center",
        textAlignVertical:"center",
        fontWeight:"bold"
    },
    textAdd:{
        width:"100%",
        textAlign:"center",
        textAlignVertical:"center",
        color:"gray",
        fontWeight:"bold"
    },
    textCancel:{
        whith:"100%",
        textAlign:"center",
        textAlignVertical:"center",
        color: "gray",
        fontWeight:"bold"
    }
})
export default CreditInput