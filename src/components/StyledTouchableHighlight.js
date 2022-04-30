import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Dimensions,
} from "react-native";
import React from "react";
import theme from "../theme";
export default function StyledTouchableHighlight({
  children,
  onPress,
  color,
  style,
  ...restOfProps
}) {
  const btnStyles = [
    styles.btn,
    color == "secondary" && styles.secondary,
    style,
  ];
  return (
    <TouchableHighlight onPress={onPress} {...restOfProps}>
      <View style={btnStyles}>
        <Text>{children}</Text>
      </View>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  btn: {
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 15,
    paddingHorizontal:
      Dimensions.get("screen").width / 2 - Dimensions.get("screen").width / 3,
  },
  secondary: {
    color: "#fefefe",
    backgroundColor: theme.colores.secondary,
  },
});
