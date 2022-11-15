import React from "react";
import OneSignal from "react-native-onesignal";
import { StyleSheet, Text, View } from "react-native";
import Button from "../components/Button";

const onPressDaysButton = (value) => {
  console.log(`engage_day, ${value}`);
  OneSignal.sendTag("engage_day", JSON.stringify(value));
  OneSignal.addTrigger("engage_day", value);
};

const AskByDays = () => {
  return (
    <View style={styles.card}>
      <View style={styles.row}>
        <Text style={styles.content}>Ask by Days 測試</Text>
      </View>
      <View style={styles.row}>
        <View style={{ flex: 1, marginRight: 16 }}>
          <Button
            fillStyle="secondary"
            textStyle="secondary"
            label={"我 90 天了"}
            onPress={() => onPressDaysButton(90)}
          />
        </View>
        <View style={{ flex: 1 }}>
          <Button
            fillStyle="secondary"
            textStyle="secondary"
            label={"我 180 天了"}
            onPress={() => onPressDaysButton(180)}
          />
        </View>
      </View>
    </View>
  );
};

export default AskByDays;

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    padding: 24,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "#ccc",
    marginVertical: 8,
  },
  row: {
    flexDirection: "row",
  },
  content: {
    fontSize: 16,
    alignSelf: "stretch",
    marginBottom: 16,
  },
});
