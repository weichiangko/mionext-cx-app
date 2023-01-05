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
  const [removed, setRemoved] = useState([false, false, false, false]);
  const [appDayValue, setAppDayValue] = useState(0);

  const onRefresh = useCallback(() => {
    console.log("Refreshing...");
    setRefreshing(true);
    wait(1200).then(() => {
      setRefreshing(false);
      setRemoved(removed.map((item) => false));
    });
    console.log(removed);
  }, []);

  const onButtonPress = (index) => {
    setRemoved(removed.map((item, i) => (i === index ? true : item)));
  };

  const handleAppDayValue = (value) => {
    setAppDayValue(value);
  };

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
          <View
            style={[
              styles.row,
              {
                marginBottom: 16,
                alignItems: "center",
                justifyContent: "center",
              },
            ]}
          >
            <Text style={styles.content}>MioNext 已使用 </Text>
            <Text style={[styles.content, { color: "#F05A1E" }]}>
              {appDayValue}
            </Text>
            <Text style={styles.content}> 天了！</Text>
          </View>
          {!removed[0] && <Declaring onButtonPress={() => onButtonPress(0)} />}
          {!removed[1] && (
            <EmailSubmit
              onRefresh={refreshing}
              onButtonPress={() => onButtonPress(1)}
            />
          )}
          <AskByDays onChangeAppDay={handleAppDayValue} />
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
