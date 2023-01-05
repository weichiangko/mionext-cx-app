import React, { useState } from "react";
import OneSignal from "react-native-onesignal";
import { View, Text, Modal, StyleSheet, SafeAreaView } from "react-native";
import Button from "../components/Button";

const AskByFunctions = () => {
  const onPressCloseButton = () => {
    console.log("function, liveViewInit");
    // OneSignal.sendTag("function", "liveViewInit");
    // OneSignal.addTrigger("function", "liveViewInit");
  };

  const [modalVisible, setModalVisible] = useState(false);

  const Seperator = ({ addStyles }) => (
    <View style={[styles.separator, addStyles]} />
  );
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
        label={"功能測試"}
        onPress={() => setModalVisible(true)}
      />
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
  separator: {
    marginVertical: 24,
    marginHorizontal: -24,
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
  },
});
