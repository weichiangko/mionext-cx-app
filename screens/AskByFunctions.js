import React, { useState } from "react";
import OneSignal from "react-native-onesignal";
import { View, Text, Modal, StyleSheet, SafeAreaView } from "react-native";
import Button from "../components/Button";

const AskByFunctions = ({ onChangeAppDay }) => {
  const getDeclaringValue = () => {
    return new Promise((resolve) => {
      OneSignal.getTags((receivedTags) => {
        const tags = receivedTags;
        resolve(tags);
      });
    });
  };

  const onPressCloseButton = () => {
    getDeclaringValue().then((tags) => {
      OneSignal.addTriggers({
        liveView: "init",
        declaring: tags.declaring,
        engage_day: tags.engage_day,
      });
      console.log("liveView", tags.liveView);
      console.log("declaring", tags.declaring);
      console.log("engage_day", tags.engage_day);
    });
    OneSignal.sendTag("liveView", "init");
  };

  const onPressDaysButton = (value) => {
    console.log(`engage_day, ${value}`);
    OneSignal.sendTag("engage_day", JSON.stringify(value));
    onChangeAppDay(value);
  };

  const [modalVisible, setModalVisible] = useState(false);

  const Seperator = ({ addStyles }) => (
    <View style={[styles.separator, addStyles]} />
  );
  return (
    <View style={styles.card}>
      <View>
        <Text
          style={[
            styles.titleContent,
            { marginVertical: -8, color: "#F05A1E" },
          ]}
        >
          Ask by functions 測試
        </Text>
      </View>
      <Seperator />
      <View>
        <Text style={[styles.titleContent, { paddingBottom: 16 }]}>
          1. 選擇 APP 使用天數:
        </Text>
      </View>
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
        <View style={{ flex: 1, marginRight: 16 }}>
          <Button
            fillStyle="secondary"
            textStyle="secondary"
            label={"7 天"}
            onPress={() => {
              onPressDaysButton(7);
            }}
          />
        </View>
        <View style={{ flex: 1 }}>
          <Button
            fillStyle="secondary"
            textStyle="secondary"
            label={"14 天"}
            onPress={() => {
              onPressDaysButton(14);
            }}
          />
        </View>
      </View>
      <View style={{ flex: 1, marginTop: 16 }}>
        <Text style={[styles.titleContent, { paddingVertical: 16 }]}>
          2. 按下功能測試:
        </Text>
        <Button
          fillStyle="secondary"
          textStyle="secondary"
          label={"功能測試"}
          onPress={() => setModalVisible(true)}
        />
      </View>
      <Modal
        animationType="slide"
        presentationStyle="pageSheet"
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <SafeAreaView style={{ flex: 1 }}>
          <View style={styles.topBar}>
            <Text style={styles.topBarText}>功能測試</Text>
          </View>
          <View style={styles.modalContainer}>
            <Button
              label={"關閉功能"}
              onPress={() => {
                setModalVisible(false);
                onPressCloseButton();
              }}
            />
          </View>
        </SafeAreaView>
      </Modal>
    </View>
  );
};

export default AskByFunctions;

const styles = StyleSheet.create({
  topBar: {
    backgroundColor: "#fff",
    paddingVertical: 20,
    alignItems: "center",
    borderBottomWidth: 1,
    borderColor: "#ccc",
  },
  topBarText: {
    color: "#666666",
    fontSize: 18,
  },
  modalContainer: {
    flex: 1,
    padding: 16,
    justifyContent: "flex-end",
  },
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
  row: {
    flexDirection: "row",
  },
  separator: {
    marginVertical: 24,
    marginHorizontal: -24,
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
  },
});
