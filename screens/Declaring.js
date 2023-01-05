import React, { useState, useEffect } from "react";
import OneSignal from "react-native-onesignal";
import { StyleSheet, Text, View } from "react-native";
import Button from "../components/Button";

const Seperator = ({ addStyles }) => (
  <View style={[styles.separator, addStyles]} />
);

const onPressDeclaring = () => {
  console.log("appStatus, init");
  OneSignal.sendTag("appStatus", "init");
  OneSignal.addTrigger("appStatus", "init");
};

const Declaring = ({ onButtonPress }) => {
  // const [isFirstClickDisabled, setIsFirstClickDisabled] = useState(false);

  // useEffect(() => {
  //   if (onRefresh) {
  //     console.log("Refreshing in Devlaring");
  //     setIsFirstClickDisabled(false);
  //   }
  // }, [onRefresh]);

  return (
    <View style={styles.card}>
      <View style={styles.row}>
        <Text style={[styles.titleContent, { marginVertical: -8 }]}>
          宣告測試
        </Text>
      </View>
      <Seperator />
      <Button
        fillStyle="secondary"
        textStyle="secondary"
        label={"首次使用"}
        onPress={() => {
          onPressDeclaring();
          onButtonPress();
          // setIsFirstClickDisabled(true);
        }}
        // disabled={isFirstClickDisabled}
      />
    </View>
  );
};

export default Declaring;

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
