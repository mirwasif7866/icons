import React from "react";
import {View, Text} from 'react-native';
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import home from "./components/home";
import Screen from "./components/screen";


const App = () => {
  const Mainstack = createStackNavigator();
  return (
    
      <NavigationContainer>
        <Mainstack.Navigator>
          <Mainstack.Screen name='home' component={home} />
          <Mainstack.Screen
            name='Screen'
            component={Screen}
            options={{ cardStyle: { backgroundColor: "transparent" } }}
          />
        </Mainstack.Navigator>
      </NavigationContainer>
    
  );
}

export default App;