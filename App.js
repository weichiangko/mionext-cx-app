import React, { useState, useCallback } from "react";
import OneSignal from "react-native-onesignal";
import {
  RefreshControl,
  StyleSheet,
  View,
  SafeAreaView,
  ScrollView,
  Text,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import Constants from "expo-constants";
import EmailSubmit from "./screens/EmailSubmit";
import AskByDays from "./screens/AskByDays";
import AskByFunctions from "./screens/AskByFunctions";
import DeleteAccount from "./screens/DeleteAccount";
import Declaring from "./screens/Declaring";

const Spacing = () => <View style={styles.spacing} />;

const wait = (timeout) => {
  return new Promise((resolve) => setTimeout(resolve, timeout));
};

const App = () => {
  OneSignal.setAppId(Constants.manifest.extra.oneSignalAppId);
  OneSignal.setNotificationOpenedHandler((openedEvent) => {
    console.log("Notification is Opened!", openedEvent);
    const { notification } = openedEvent;
    OneSignal.sendTag(notification.templateName, "open");
    console.log(notification.templateName);
  });

  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(() => {
    console.log("Refreshing...");
    setRefreshing(true);
    wait(1200).then(() => setRefreshing(false));
  }, []);

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <ScrollView
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
        >
          <StatusBar />
          <Spacing />
          <View style={{ marginBottom: 32 }}>
            <Text style={styles.appTitleText}>
              OneSignal & SurveyCake Test App
            </Text>
            <Text style={[styles.appTitleText, { fontSize: 18 }]}>
              Version: v0.2.4 {/* Update the version here */}
            </Text>
          </View>
          <Declaring onRefresh={refreshing} />
          <EmailSubmit onRefresh={refreshing} />
          <AskByDays />
          <AskByFunctions />
          <DeleteAccount />
          <Spacing />
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  appTitleText: {
    fontSize: 20,
    color: "#B3B3B3",
    fontWeight: "500",
    alignSelf: "flex-start",
    marginBottom: 8,
  },
  container: {
    backgroundColor: "#F5F5F5",
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
});

export default App;
