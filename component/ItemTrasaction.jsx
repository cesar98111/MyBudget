import { useEffect, useState } from "react"
import { View, Text, StyleSheet,Pressable,Image } from "react-native"
import CreditInput from "./creditInput";


const ItemTrasaction = ({style, styleText, styleButton, styleModifyButton, entry,  deleteItem, modify}) =>{

const [show, setShow] = useState(false);
   

    return (
        <View style={{...styles.container,...style,entry}}>
            <View style={styles.separator}>
                <Text style={{...styles.ItemTrasaction,...styleText}}>
                    descripcion: {entry.concept} 
                </Text>
            </View>
            <View style={styles.separator}>
                <Text style={{...styles.ItemTrasaction,...styleText}}>
                {entry.amount <= 0 ? "Ingreso" : "gasto"} : {entry.amount} 
                </Text>
            </View>
            <View style={styles.separator}>
                <Text style={{...styles.ItemTrasaction,...styleText}}>
                    fecha: {entry.date}
                </Text>
            </View>
            
            
            
            <View style={styles.buttonGroup}>
                <Pressable style={{...styles.button,...styleButton}} onPress={()=> deleteItem(entry)}>
                    <Image  style={styles.icon} source={require("../assets/eliminar.png")}></Image>
                </Pressable>
                <Pressable style={{ ...styles.modifyButton,...styleModifyButton}} onPress={()=>setShow(!show)}>
                    <Image  style={styles.icon} source={require("../assets/editar.png")}></Image>
                </Pressable>
            </View>
            
            <CreditInput show={show}  setShow={setShow} OldEntry={entry.id} modify={true} modifyEntry={modify}/>

            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'pink'

    },
    button:{
        borderRadius:5,
        backgroundColor: 'white',
        justifyContent:"center",
        alignItems:"center"
    },
    buttonText:{
        color: "white"
    },
    modifyButton:{
        borderRadius:5,
        backgroundColor:"white",
        justifyContent:"center",
        alignItems:"center"
    },
    buttonGroup:{
        width:"100%",
        flexDirection:"row",
        justifyContent:"space-around",
        marginTop: 15,
        height:40
    },
    separator:{
        width:"80%",
        borderBottomWidth: 1,
        borderColor:"#1e88e5"
        
    },
    icon:{
        width:20,
        height:20
    }

})

export default ItemTrasaction