import React from "react";
import OneSignal from "react-native-onesignal";
import { StyleSheet, Text, View } from "react-native";
import Button from "../components/Button";

const Seperator = ({ addStyles }) => (
  <View style={[styles.separator, addStyles]} />
);

const AskByFunctions = () => {
  return (
    <View style={styles.card}>
      <View>
        <Text style={[styles.titleContent, { marginVertical: -8 }]}>
          Ask by functions 測試
        </Text>
      </View>
      <Seperator />
      <Button
        fillStyle="secondary"
        textStyle="secondary"
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
  titleContent: {
    color: "#666666",
    fontSize: 16,
  },
  separator: {
    marginVertical: 24,
    marginHorizontal: -24,
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
  },
});
