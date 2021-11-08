import React from "react";
import {View, Text, TouchableOpacity} from "react-native";
import Screen from "./screen";
const home = ({navigation}) => {
    return(
        <View style={{height:'100%',
        width:'100%',
        alignItems:'center',
        backgroundColor:'yellow'
        }}>
            <TouchableOpacity onPress={()=>navigation.navigate("Screen")}>
            <Text style={{fontSize:78,color:'black'}}>+</Text>
            </TouchableOpacity>
        </View>
    )
}

export default home;