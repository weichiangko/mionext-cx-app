import React from "react";
import OneSignal from "react-native-onesignal";
import {
  StyleSheet,
  View,
  SafeAreaView,
  Text,
  Alert,
  ScrollView,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import Button from "./components/Button";
import Constants from "expo-constants";
import EmailSubmit from "./screens/EmailSubmit";
import AskByDays from "./screens/AskByDays";

// CSS Styling Elements Here
const Separator = () => <View style={styles.separator} />;
const Spacing = () => <View style={styles.spacing} />;

// Main App
const App = () => {
  OneSignal.setAppId(Constants.manifest.extra.oneSignalAppId);
  OneSignal.setNotificationOpenedHandler((openedEvent) => {
    console.log("OneSignal: notification opened:", openedEvent);
    const { action, notification } = openedEvent;
  });

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

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <ScrollView>
          <StatusBar />
          <Spacing />
          <EmailSubmit />
          <Separator />
          <AskByDays />
          <Separator />
          <View>
            <View>
              <Text style={styles.content}>Ask by functions 測試</Text>
            </View>
            <Button label={"我操作完 Function 了"} />
          </View>
          <Separator />
          <View>
            <View>
              <Text style={styles.content}>Delete Account 測試</Text>
            </View>
            <View>
              <Button
                fillStyle={{ backgroundColor: "#E11900" }}
                label={"Delete Account"}
                onPress={() => showDeleteAccountAlert()}
              />
            </View>
          </View>
          <Spacing />
          <View>
            <Text
              style={{
                fontSize: 16,
                color: "#B3B3B3",
                fontWeight: "500",
                alignSelf: "center",
              }}
            >
              OneSignal & SurveyCake Test v0.2.1
            </Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    paddingHorizontal: 16,
    paddingTop: 40,
  },
  row: {
    flexDirection: "row",
  },
  title: {
    fontWeight: "bold",
    fontSize: 32,
    textAlign: "center",
  },
  content: {
    color: "#1f1f1f",
    fontSize: 16,
    alignSelf: "stretch",
    marginBottom: 16,
  },
  spacing: {
    marginVertical: 24,
  },
  separator: {
    marginVertical: 24,
    borderBottomColor: "#cccccc",
    borderBottomWidth: 1,
  },
});

export default App;
