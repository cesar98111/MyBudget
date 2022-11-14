import { View,Modal, TextInput, StyleSheet ,Pressable} from "react-native"

const CreditInput = ({show}) =>{
    return(
        <Modal  visible ={show} transparent={true}>
            <View style={styles.inputDirection}>
                <View style ={styles.inputContainer}>
                    <View style={styles.inputRow}>
                        <TextInput
                        style={styles.textInput}
                        placeholder='introduce el ingreso'/>
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
        backgroundColor: '#ccff90',
        borderRadius:20,
        alignItems:'center',
        alignContent:'flex-start'
    },
    
    inputDirection:{
        justifyContent:"center",
        alignItems:"center",
        width:"100%",
        height:"100%"
    },
    textInput:{
        marginTop:20,
        backgroundColor:'#84ffff',
        height:40,
        width:"50%",
        borderRadius:20
    },
    inputRow:{
        flexDirection:'row',
        alignContent:'flex-start',
        width:"100%"
    }

})
export default CreditInput