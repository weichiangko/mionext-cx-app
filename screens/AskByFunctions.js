import React from "react";
import OneSignal from "react-native-onesignal";
import { StyleSheet, Text, View } from "react-native";
import Button from "../components/Button";

const AskByFunctions = () => {
  return (
    <View style={styles.card}>
      <View>
        <Text style={styles.content}>Ask by functions 測試</Text>
      </View>
      <Button
        fillStyle={{ backgroundColor: "#ececec" }}
        textStyle={{ color: "#3a3a3a" }}
        label={"我操作完 Function 了"}
      />
    </View>
  );
};

export default AskByFunctions;

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    padding: 24,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "#ccc",
    marginVertical: 8,
  },
  content: {
    fontSize: 16,
    alignSelf: "stretch",
    marginBottom: 16,
  },
});
