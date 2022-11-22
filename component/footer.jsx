import { useState } from "react"
import { View, Text, Pressable, StyleSheet } from "react-native"
import CreditInput from "./creditInput"
const Footer = ({ style, styleText ,addNewEntry}) =>{
    const [show, setShow] = useState(false)
    return(
        <View style={styles.footerContainer}>
            <Pressable style={styles.buttonAdd} onPress={()=>setShow(!show)}>
                <Text style={styles.TextButtonAdd}>+</Text>
            </Pressable>
            <CreditInput show={show} setShow={setShow} addNewEntry={addNewEntry} modify={false}/>
        </View>
    )
}


const styles = StyleSheet.create({
    footerContainer:{
        flexDirection:"column",
        height:"20%",
        backgroundColor:"#1e88e5",
        width:"100%",
        justifyContent:"center",
        alignItems:"flex-end"
    },
    buttonAdd:{
        height:40,
        width:40,
        backgroundColor:"#73e8ff",
        borderRadius:20,
        marginRight:40,
        marginBottom:"45%"

    },
    TextButtonAdd:{
        height:"100%",
        textAlignVertical:"center",
        textAlign:"center",
        fontSize:20
    }
})
export default Footer;

