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
import CustomComponent from "./components/Context/LocationContext";

export default function App() {
  return (
    <NativeRouter>
      <CustomComponent>
        <SafeAreaView style={{ flex: 1 }}>
          <ScrollView>
            <Main />
          </ScrollView>
        </SafeAreaView>
      </CustomComponent>
    </NativeRouter>
  );
}
