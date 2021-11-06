import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, FlatList, SafeAreaView} from 'react-native';
import  IonicIcon  from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import AntDesign from 'react-native-vector-icons/AntDesign'

const DATA = [
  { id: 1, icon: "ios-home-outline", Name:"Pop-up"},
  { id: 2, icon: "musical-notes-outline", Name:"Concert"},
  { id: 3, icon: "albums-outline", Name:"Live"},
  { id: 4, icon: "ios-logo-instagram", Name:"Attraction"},
  { id: 5, icon: "md-image-outline", Name:"PrivateEvent"},
  { id: 6, icon: "md-ellipsis-horizontal-outline", Name:"Other"},
];

export default function App() {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.text}>What Now?</Text>
        <View style={{ flex: 1, flexDirection: "row",marginTop:"5%" }}>
          <FlatList
            data={DATA}
            keyExtractor={(item) => item.id}
            numColumns='3'
            renderItem={({ item }) => <IconComponent item={item} />}
          />
        </View>
        <StatusBar style='auto' />
      </View>
    </SafeAreaView>
  );
}

const IconComponent= (props)=>{
  const {item }= props

  return (
    <View style={{width:"33.3%" ,marginVertical:"3%"}}>
      <View style={{alignItems:"center"}}>
        <IonicIcon name={item.icon} size={40} />
        <Text>{item.Name}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    marginTop:"10%",
    height:"100%",
    width:'100%'
  },
  text: {
    fontSize:28,
    // top:20,
    left:130,
    color:'black',
  },
  icon: {
    // flexDirection:"row",
    // flex:1,
    // width:"32%",
    // justifyContent:'space-evenly',
  }
});
