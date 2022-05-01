import {
  StyleSheet,
  View,
  Image,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
  ActivityIndicator,
} from "react-native";
import React, { useState, useEffect } from "react";
import { Formik, useFormikContext } from "formik";
import { loginValidationSchema } from "../validationSchemas/login";
import FormikInputValue from "../components/FormikInputValud";
import StyledText from "../components/StyledText";
import StyledTouchableHighlight from "../components/StyledTouchableHighlight";
import {
  logInWithEmailAndPassword,
  procesarErrorFirebase,
} from "../../firebase";
import { Toast } from "react-native-toast-message/lib/src/Toast";
import theme from "../theme";
import { auth } from "../../firebase";
const initialValues = {
  email: "",
  password: "",
};
let resetPresForm = {};
const ResettingForm = () => {
  const { resetForm } = useFormikContext();
  resetPresForm = resetForm;
  return null;
};
export default function Login({ navigation }) {
  useEffect(() => {
    if (auth.currentUser) {
      navigation.navigate("Home");
    }
  });

  const [spinner, showSpinner] = useState(false);
  const [formulario, showFormulario] = useState(true);
  const onLogin = (userValues) => {
    Keyboard.dismiss();
    showFormulario(false);
    showSpinner(true);
    const { email, password } = userValues;
    logInWithEmailAndPassword(email, password)
      .then(() => {
        setTimeout(() => {
          showFormulario(true);
          showSpinner(false);
          resetPresForm(); //reseteo el form
        }, 1000);
        navigation.navigate("Home");
      })
      .catch((error) => {
        Toast.show({
          type: "error",
          text1: "Ha ocurrido un error",
          text2: procesarErrorFirebase(error),
          position: "bottom",
        });
      });
  };
  return (
    <Formik
      validationSchema={loginValidationSchema}
      initialValues={initialValues}
      onSubmit={onLogin}
    >
      {({ handleChange, handleSubmit, values }) => {
        return (
          <TouchableWithoutFeedback
            onPress={Keyboard.dismiss}
            accessible={false}
          >
            <View style={styles.contenedor2}>
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
              {formulario && (
                <KeyboardAvoidingView
                  contentContainerStyle={styles.contenedor}
                  behavior={Platform.OS === "ios" ? "padding" : "height"}
                >
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
                    <ResettingForm />
                  </View>
                </KeyboardAvoidingView>
              )}
              {spinner && (
                <View style={styles.contenedorForm}>
                  <ActivityIndicator size={180} color={theme.colores.details} />
                </View>
              )}
            </View>
          </TouchableWithoutFeedback>
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
  contenedor2: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: theme.colores.primary,
  },
  contenedorLogoEmpresa: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
  },
  contenedorForm: {},
  contenedorSpinner: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
  },
});
