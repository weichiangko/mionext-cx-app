import React from "react";
import OneSignal from "react-native-onesignal";
import { StyleSheet, Text, View } from "react-native";
import Button from "../components/Button";

const onPressDeclaring = () => {
  console.log("appStatus, init");
  OneSignal.sendTag("appStatus", "init");
  OneSignal.addTrigger("appStatus", "init");
};

const Declaring = () => {
  return (
    <View style={styles.card}>
      <View style={styles.row}>
        <Text style={styles.content}>宣告測試</Text>
      </View>
      <Button label={"首次使用"} onPress={() => onPressDeclaring()} />
    </View>
  );
};

export default Declaring;

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
