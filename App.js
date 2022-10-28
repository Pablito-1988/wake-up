import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  SafeAreaView,
  ScrollView,
} from "react-native";
import Main from "./components/Main";
import { NativeRouter } from "react-router-native";

export default function App() {
  return (
    <NativeRouter>
      <SafeAreaView style={{ flex: 1, backgroundColor: "red" }}>
        <ScrollView>
          <Main />
        </ScrollView>
      </SafeAreaView>
    </NativeRouter>
  );
}


