import { StyleSheet, Text, View, TouchableHighlight } from "react-native";
import { React, useContext } from "react";
import { logout } from "../../firebase";
import theme from "../theme";
import StyledTouchableHighlight from "../components/StyledTouchableHighlight";
import AuthContext from "../context/firebaseContext/AuthContext";

export default function Home({ navigation }) {
  const { logOut, setIsLogin } = useContext(AuthContext);
  const handlelogout = () => {
    logOut().then(() => {
      setIsLogin(false);
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
