import { View, Text, StyleSheet,Pressable } from "react-native"

const ItemTrasaction = ({style, styleText, styleButton, entry,deleteItem}) =>{
    return (
        <View style={{...styles.container,...style,entry}}>
            <Text style={{...styles.ItemTrasaction,...styleText}}>
                fecha: {entry.date} valor: {entry.amount}
            </Text>
            <Pressable style ={{...style.button,...styleButton}}>
                <Text style ={styles.buttonText} onPress={()=> deleteItem(entry.amount)} >
                    eliminar
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
    }
})

export default ItemTrasaction