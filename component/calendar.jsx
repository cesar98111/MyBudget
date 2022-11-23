import { View, Text, Modal , StyleSheet, Pressable} from "react-native"
import { useEffect, useState } from "react";
import DatePicker from "react-native-modern-datepicker"
import { Colors } from "../constant/colors";

const Calendar =({show, setShow, dateHandle})=>{
    const [selectedDate, setSelectedDate] = useState('');

    useEffect(()=>{
        dateHandle(selectedDate)
    },[selectedDate])
    
    return(
        <Modal visible={show} transparent={true}>
            <View style={styles.calendarDirection}>
                <View style={styles.calendarContainer}>
                    <DatePicker
                        onSelectedChange={date => setSelectedDate(date)}
                    />
                <View style={styles.buttonGroups}>
                    <Pressable style={styles.buttonAdd} onPress={()=>setShow(!show)}>
                        <Text style={styles.buttonText}>Aceptar</Text>
                    </Pressable>
                </View>
                </View>
                
            </View>

        </Modal>
    )
}

const styles = StyleSheet.create({
    calendarDirection:{
        justifyContent:"center",
        alignItems:"center",
        height:"100%",
        width:"100%"
    },
    calendarContainer:{
        height:400,
        width:300,
        backgroundColor:Colors.containers.prymariDark
    },
    buttonAdd:{
        height:30,
        width:"25%",
        backgroundColor:Colors.button.acept
        
    },
    buttonText:{
        height:"100%",
        textAlign:"center",
        textAlignVertical:"center"
    },
    buttonGroups:{
        marginTop:20,
        flexDirection:"row",
        justifyContent:"space-around",
        width:"100%"
    }
})

export default Calendar