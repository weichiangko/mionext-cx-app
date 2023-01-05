import React, { useState } from "react";
import OneSignal from "react-native-onesignal";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import Button from "../components/Button";

const AskByDays = ({ onChangeAppDay }) => {
  const onPressDaysButton = (value) => {
    console.log(`engage_day, ${value}`);
    OneSignal.sendTag("engage_day", JSON.stringify(value));
    OneSignal.addTrigger("engage_day", value);
    onChangeAppDay(value);
  };

  const Seperator = ({ addStyles }) => (
    <View style={[styles.separator, addStyles]} />
  );

  return (
    <View style={styles.card}>
      <View style={styles.row}>
        <View style={{ flex: 1 }}>
          <Text style={[styles.titleContent, { marginVertical: -8 }]}>
            Ask by Days 測試
          </Text>
        </View>
        <View>
          <TouchableOpacity
            onPress={() => {
              onPressDaysButton(0);
            }}
          >
            <Text
              style={[
                styles.titleContent,
                { marginVertical: -8, color: "#F05A1E" },
              ]}
            >
              Reset
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <Seperator addStyles={{ marginHorizontal: -24 }} />
      <View style={styles.row}>
        <View style={{ flex: 1, marginRight: 16 }}>
          <Button
            fillStyle="secondary"
            textStyle="secondary"
            label={"90"}
            onPress={() => {
              onPressDaysButton(90);
            }}
          />
        </View>
        <View style={{ flex: 1, marginRight: 16 }}>
          <Button
            fillStyle="secondary"
            textStyle="secondary"
            label={"180"}
            onPress={() => {
              onPressDaysButton(180);
            }}
          />
        </View>
        <View style={{ flex: 1 }}>
          <Button
            fillStyle="secondary"
            textStyle="secondary"
            label={"330"}
            onPress={() => {
              onPressDaysButton(330);
            }}
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
  titleContent: {
    color: "#666666",
    fontSize: 16,
  },
  content: {
    fontSize: 16,
    marginBottom: 16,
  },
  separator: {
    marginVertical: 24,
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
  },
});
