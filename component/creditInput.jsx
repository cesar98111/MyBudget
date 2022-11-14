import { View,Modal, TextInput, StyleSheet} from "react-native"

const CreditInput = ({show}) =>{
    return(
        <Modal  visible ={show} transparent={true}>
            <View style={styles.inputDirection}>
                <View style ={styles.inputContainer}>
                    <TextInput
                    style={styles.textInput}
                    placeholder='introduce el ingreso'/>
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
        borderRadius:20,
        alignItems:'center'
    },
    
    inputDirection:{
        justifyContent:"center",
        alignItems:"center",
        width:"100%",
        height:"100%"
    },
    textInput:{
        backgroundColor:'#84fff'
    }

})
export default CreditInput