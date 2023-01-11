import React, { useState } from "react";
import OneSignal from "react-native-onesignal";
import { StyleSheet, Text, View } from "react-native";
import Button from "../components/Button";

const AskByDays = ({ onChangeAppDay }) => {
  const onPressDaysButton = (value) => {
    console.log(`engage_day, ${value}`);
    OneSignal.sendTag("engage_day", JSON.stringify(value));
    onChangeAppDay(value);
  };

  const Seperator = ({ addStyles }) => (
    <View style={[styles.separator, addStyles]} />
  );

  return (
    <View style={styles.card}>
      <View style={styles.row}>
        <View style={{ flex: 1 }}>
          <Text
            style={[
              styles.titleContent,
              { marginVertical: -8, color: "#F05A1E" },
            ]}
          >
            Ask by Days 推播測試
          </Text>
        </View>
      </View>
      <Seperator addStyles={{ marginHorizontal: -24 }} />
      <View>
        <View style={{ flex: 1 }}>
          <Text style={[styles.titleContent, { paddingBottom: 16 }]}>
            1. 選擇 APP 使用天數:
          </Text>
          <View style={styles.row}>
            <View style={{ flex: 1, marginRight: 16 }}>
              <Button
                fillStyle="secondary"
                textStyle="secondary"
                label={"0 天"}
                onPress={() => {
                  onPressDaysButton(0);
                }}
              />
            </View>
            <View style={{ flex: 1 }}>
              <Button
                fillStyle="secondary"
                textStyle="secondary"
                label={"90 天"}
                onPress={() => {
                  onPressDaysButton(90);
                }}
              />
            </View>
          </View>
        </View>
        <View style={[styles.row, { marginVertical: 16 }]}>
          <View style={{ flex: 1, marginRight: 16 }}>
            <Button
              fillStyle="secondary"
              textStyle="secondary"
              label={"180 天"}
              onPress={() => {
                onPressDaysButton(180);
              }}
            />
          </View>
          <View style={{ flex: 1 }}>
            <Button
              fillStyle="secondary"
              textStyle="secondary"
              label={"330 天"}
              onPress={() => {
                onPressDaysButton(330);
              }}
            />
          </View>
        </View>
        <Text style={[styles.titleContent, { paddingTop: 16 }]}>
          2. 推播通知約等待 5 ~ 30 分鐘不等
        </Text>
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
