import { View, Text, StyleSheet,Pressable } from "react-native"

const ItemTrasaction = ({style, styleText, styleButton, styleModifyButton, entry,deleteItem}) =>{


    return (
        <View style={{...styles.container,...style,entry}}>
            <Text style={{...styles.ItemTrasaction,...styleText}}>
                descripcion: {entry.concept} valor: {entry.amount}
            </Text>
            <Pressable style={{...styles.button,...styleButton}}>
                <Text style={styles.buttonText} onPress={()=> deleteItem(entry.amount)} >
                    eliminar
                </Text>
            </Pressable>
            <Pressable style={{ ...styles.modifyButton,...styleModifyButton}}>
                <Text>
                    modificar
                </Text>
            </Pressable>
            
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