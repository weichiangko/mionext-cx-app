import React from "react";
import OneSignal from "react-native-onesignal";
import { StyleSheet, Text, View, Alert } from "react-native";
import Button from "../components/Button";

const onPressDeleteAccount = () => {
  console.log("onPress Delete Account");
  OneSignal.sendTag("user_account", "deleted");
  OneSignal.addTrigger("user_account", "deleted");
};

const showDeleteAccountAlert = () =>
  Alert.alert(
    "Delete Your Mio Account",
    `Your profile, photo, driving data and events will be permently deleted. This cannot be undone. If your device has active subscription, it won’t be cancelled by deleting your account.`,
    [
      {
        text: "Cancel",
      },
      {
        text: "Delete Account",
        onPress: () => onPressDeleteAccount(),
        style: "cancel",
      },
    ]
  );

const DeleteAccount = () => {
  return (
    <>
      <View style={styles.card}>
        <View>
          <Text style={styles.content}>Delete Account 測試</Text>
        </View>
        <View>
          <Button
            fillStyle="secondary"
            textStyle={{ color: "red" }}
            label={"Delete Account"}
            onPress={() => showDeleteAccountAlert()}
          />
        </View>
      </View>
    </>
  );
};

export default DeleteAccount;

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
    color: "#1f1f1f",
    fontSize: 16,
    alignSelf: "stretch",
    marginBottom: 16,
  },
});
