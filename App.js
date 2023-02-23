import React, { useState, useCallback, useEffect } from "react";
import OneSignal from "react-native-onesignal";
import {
  RefreshControl,
  StyleSheet,
  View,
  ScrollView,
  Text,
  Alert,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import EmailSubmit from "./screens/EmailSubmit";
import AskByDays from "./screens/AskByDays";
import AskByFunctions from "./screens/AskByFunctions";
import DeleteAccount from "./screens/DeleteAccount";
import Declaring from "./screens/Declaring";

const App = () => {
  // Init OneSignal App
  OneSignal.setAppId("d6ad6cdf-1761-4546-8248-2fdd41e696df");

  // Init Set External User ID & Get All Tags
  const [userId, setUserId] = useState("");
  const [tags, setTags] = useState({});

  useEffect(() => {
    OneSignal.getDeviceState().then((deviceState) => {
      const userId = deviceState.userId;
      setUserId(userId);
    });
    OneSignal.getTags((receivedTags) => {
      setTags(receivedTags);
    });
  }, []);

  OneSignal.setExternalUserId(userId);

  const showAllTagsAlert = () => {
    console.log(tags);
    const tagsArray = Object.entries(tags);
    const tagsString = tagsArray
      .map(([key, value]) => `${key}: ${value}`)
      .join("\n");
    Alert.alert("OneSignal Current Tags", tagsString, [
      {
        text: "Ok",
      },
    ]);
  };

  // Get Notification Status
  OneSignal.setNotificationOpenedHandler((openedEvent) => {
    const { notification } = openedEvent;
    OneSignal.sendTag(notification.templateName, "open");
    console.log(notification.templateName);
  });

  const [refreshing, setRefreshing] = useState(false);
  const [removed, setRemoved] = useState([false, false, false, false]);
  const [appDayValue, setAppDayValue] = useState(0);

  const wait = (timeout) => {
    return new Promise((resolve) => setTimeout(resolve, timeout));
  };

  const onRefresh = useCallback(() => {
    console.log("Refreshing and delete all tags...");
    setRefreshing(true);
    wait(1200).then(() => {
      setRefreshing(false);
      setRemoved(removed.map((item) => false));
      setAppDayValue(0);
    });
    OneSignal.deleteTags([
      "appStatus",
      "declaring",
      "userEmail",
      "submitSurvey",
      "engage_day",
      "user_account",
      "deleteAccount_survey",
      "liveView",
      "liveView_survey",
      "[MioNext] 90 Days",
      "[MioNext] 180 Days",
      "[MioNext] 330 Days",
    ]);
  }, []);

  const onButtonPress = (index) => {
    setRemoved(removed.map((item, i) => (i === index ? true : item)));
  };

  const handleAppDayValue = (value) => {
    setAppDayValue(value);
  };

  const Spacing = () => <View style={styles.spacing} />;

  return (
    <View>
      <View
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          top: 0,
          height: 136,
          backgroundColor: "#F5F5F5",
          zIndex: 100,
          elevation: 10,
          paddingTop: 16,
          flex: 1,
        }}
      >
        <View
          style={{
            marginTop: 40,
            alignItems: "center",
          }}
        >
          <Text
            onPress={() => {
              showAllTagsAlert();
            }}
            style={[styles.appTitleText, { fontWeight: "700" }]}
          >
            OneSignal & SurveyCake Test App
          </Text>
        </View>
        <View
          style={[
            styles.row,
            {
              paddingVertical: 12,
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
      </View>
      <ScrollView
        style={{ padding: 16, marginTop: 136, backgroundColor: "#F5F5F5" }}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        <StatusBar />
        {!removed[0] && <Declaring onButtonPress={() => onButtonPress(0)} />}
        {!removed[1] && (
          <EmailSubmit
            onRefresh={refreshing}
            onButtonPress={() => onButtonPress(1)}
          />
        )}
        <AskByFunctions onChangeAppDay={handleAppDayValue} />
        <AskByDays onChangeAppDay={handleAppDayValue} />
        {!removed[2] && (
          <DeleteAccount onButtonPress={() => onButtonPress(2)} />
        )}
        <Text
          style={[
            styles.appTitleText,
            { fontSize: 18, alignSelf: "center", marginVertical: 16 },
          ]}
        >
          Version: v0.1.0 {/* Update the version here */}
        </Text>
        <Spacing />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  appTitleText: {
    fontSize: 20,
    lineHeight: 24,
    color: "#B3B3B3",
    marginBottom: 8,
  },
  container: {
    backgroundColor: "#F5F5F5",
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 152,
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
    fontSize: 18,
    lineHeight: 24,
  },
  spacing: {
    marginVertical: 24,
  },
});

export default App;
