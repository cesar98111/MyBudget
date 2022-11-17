import { View, Text, StyleSheet } from "react-native"

const ItemTrasaction = ({style, styleText}) =>{
    return (
        <View style={{...styles.container,...style}}>
            <Text style={{...styles.ItemTrasaction,...style}}>
                soy un item
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'pink'
    }
})

export default ItemTrasaction