import { StyleSheet, View } from "react-native";
import { React } from "react";
import Constants from "expo-constants";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
//Iconos desde react-native-vector-icons
import Icon from "react-native-vector-icons/FontAwesome5";
import Login from "../pages/Login";
import Home from "../pages/Home";

//Instanciar el componente d enavecaion que queremos.
const Stack = createNativeStackNavigator();

export default function Main() {
  return (
    <View
      style={{ flex: 1, marginTop: Constants.statusBarHeight, marginLeft: 4 }}
    >
      <StatusBar style="dark"></StatusBar>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Login" component={Login}></Stack.Screen>
          <Stack.Screen name="Home" component={Home}></Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({});
