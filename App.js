import { StyleSheet } from "react-native";
import { React } from "react";
import Main from "./src/components/Main";
import AnimatedSplash from "react-native-animated-splash-screen";
import SplashAnimado from "./src/components/SplashAnimado";
import useSplashIsLoaded from "./src/hooks/useSplashIsLoaded";

export default function App() {
  const { isLoaded } = useSplashIsLoaded();
  return (
    <AnimatedSplash
      translucent={true}
      isLoaded={isLoaded}
      backgroundColor="#ffffff"
      customComponent={<SplashAnimado />}
    >
      <Main></Main>
    </AnimatedSplash>
  );
}

const styles = StyleSheet.create({});
