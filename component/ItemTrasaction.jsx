import { useEffect, useState } from "react"
import { View, Text, StyleSheet,Pressable } from "react-native"
import CreditInput from "./creditInput";


const ItemTrasaction = ({style, styleText, styleButton, styleModifyButton, entry,  deleteItem, modify}) =>{

const [show, setShow] = useState(false);
   

    return (
        <View style={{...styles.container,...style,entry}}>
            <Text style={{...styles.ItemTrasaction,...styleText}}>
                descripcion: {entry.concept} valor: {entry.amount}
            </Text>
            <Pressable style={{...styles.button,...styleButton}}>
                <Text style={styles.buttonText} onPress={()=> deleteItem(entry)} >
                    eliminar
                </Text>
            </Pressable>
            <Pressable style={{ ...styles.modifyButton,...styleModifyButton}} onPress={()=>setShow(!show)}>
                <Text>
                    modificar
                </Text>
            </Pressable>
            <CreditInput show={show}  setShow={setShow} OldEntry={entry.id} modify={true} modifyEntry={modify}/>

            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'pink'

    },
    button:{
        backgroundColor: 'white'
    },
    buttonText:{
        color: "white"
    },
    modifyButton:{
        backgroundColor:"white"
    }
})

export default ItemTrasaction