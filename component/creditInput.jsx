import { View,Modal, TextInput, StyleSheet ,Pressable, Text, Image} from "react-native"

import  'react-native-get-random-values' ; 
import  {  v4  as  uuidv4  }  from  'uuid' ;
import { useState,useEffect } from "react";


const CreditInput = ({show, setShow, OldEntry, addNewEntry ,modify, modifyEntry}) =>{
    
    const[showMessage, setShowMessage] = useState(false);

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

                        <TextInput
                        style={styles.textInput}
                        placeholder='introduce una fecha'
                        onChangeText={dateHandle}
                        value={entry.date}/>
                        

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
                        <Pressable style={styles.buttonCancel} onPress={()=> setShow(!show)}>
                            <Text style={styles.textCancel}>Cancelar</Text>
                        </Pressable>
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
        backgroundColor: '#1e88e5',
        borderColor:"black",
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
        backgroundColor:"#bef67a"
    },
    buttonCancel:{
        height:25,
        width:"30%",
        backgroundColor:"#ff3d00"
    },
    textInput:{
        backgroundColor:"#73e8ff",
        width:"80%",
        height:40,
        marginBottom:10,
        color:"gray"
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