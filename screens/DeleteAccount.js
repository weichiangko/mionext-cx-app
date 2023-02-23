import React from "react";
import OneSignal from "react-native-onesignal";
import { StyleSheet, Text, View, Alert } from "react-native";
import Button from "../components/Button";

const DeleteAccount = ({ onButtonPress }) => {
  const getDeclaringValue = () => {
    return new Promise((resolve) => {
      OneSignal.getTags((receivedTags) => {
        const tags = receivedTags;
        resolve(tags);
      });
    });
  };

  const onPressDeleteAccount = () => {
    getDeclaringValue().then((tags) => {
      OneSignal.addTriggers({
        user_account: "deleted",
        declaring: tags.declaring,
      });

      console.log("user_account", tags.user_account);
      console.log("declaring", tags.declaring);
    });
    OneSignal.sendTag("user_account", "deleted");

    onButtonPress();
  };

  const showDeleteAccountAlert = () => {
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
  };

  const Seperator = ({ addStyles }) => (
    <View style={[styles.separator, addStyles]} />
  );

  return (
    <>
      <View style={styles.card}>
        <View>
          <Text
            style={[
              styles.titleContent,
              { marginVertical: -8, color: "#F05A1E" },
            ]}
          >
            Delete Account 測試
          </Text>
        </View>
        <Seperator />
        <View>
          <Button
            fillStyle="error"
            textStyle="error"
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
