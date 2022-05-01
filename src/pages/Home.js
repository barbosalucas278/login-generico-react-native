import { StyleSheet, Text, View, TouchableHighlight } from "react-native";
import React from "react";
import { logout } from "../../firebase";
import theme from "../theme";
import StyledTouchableHighlight from "../components/StyledTouchableHighlight";

export default function Home({ navigation }) {
  const handlelogout = () => {
    logout().then(() => {
      navigation.navigate("Login");
    });
  };
  return (
    <View>
      <Text>Home</Text>
      <StyledTouchableHighlight
        onPress={handlelogout}
        color="secondary"
        style={styles.btn}
      >
        Cerrar Sesión
      </StyledTouchableHighlight>
    </View>
  );
}

const styles = StyleSheet.create({
  btn: {
    paddingHorizontal: 50,
    paddingVertical: 15,
  },
});
