import { View } from "react-native";
import { useEffect } from "react";
import { router } from "expo-router";

import Component_Start from "../components/start";

export default function Index() {
  useEffect(() => {
    const timer = setTimeout(() => {
      router.replace("/home"); // ou o nome da sua tela
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <Component_Start />
    </View>
  );
}