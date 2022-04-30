import { StyleSheet, View, Image } from "react-native";
import React from "react";
import { Formik } from "formik";
import { loginValidationSchema } from "../validationSchemas/login";
import FormikInputValue from "../components/FormikInputValud";
import StyledText from "../components/StyledText";
import StyledTouchableHighlight from "../components/StyledTouchableHighlight";
const initialValues = {
  email: "",
  password: "",
};

export default function Login() {
  return (
    <Formik
      validationSchema={loginValidationSchema}
      initialValues={initialValues}
      onSubmit={(values) => console.log(values)}
    >
      {({ handleChange, handleSubmit, values }) => {
        return (
          <View style={styles.contenedor}>
            <View style={styles.contenedorLogoEmpresa}>
              <Image
                resizeMode="contain"
                style={{ width: 100, height: 100 }}
                source={require("../../assets/icono.png")}
              ></Image>
              <StyledText fontWeight="bold" fontSize="heading" aling="center">
                Relevamiento
              </StyledText>
              <StyledText fontWeight="bold" fontSize="heading" aling="center">
                Visual
              </StyledText>
            </View>
            <View style={styles.contenedorForm}>
              <FormikInputValue
                placeholder="Email"
                name="email"
                keyboardType="email-address"
                size="large"
              ></FormikInputValue>
              <FormikInputValue
                placeholder="Password"
                name="password"
                secureTextEntry
                size="large"
              ></FormikInputValue>
              <StyledTouchableHighlight
                color="secondary"
                onPress={handleSubmit}
              >
                Iniciar Sesión
              </StyledTouchableHighlight>
            </View>
          </View>
        );
      }}
    </Formik>
  );
}

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  contenedorLogoEmpresa: {
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 100,
  },
  contenedorForm: {},
});
