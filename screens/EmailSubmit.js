import React, { useEffect } from "react";
import OneSignal from "react-native-onesignal";
import { StyleSheet, Text, View, TextInput } from "react-native";
import { useForm, Controller } from "react-hook-form";
import Button from "../components/Button";

const EmailSubmit = ({ onRefresh, onButtonPress }) => {
  const Seperator = () => <View style={styles.separator} />;

  const onSubmitMail = (data) => {
    OneSignal.sendTag("userEmail", data.email);
    OneSignal.addTrigger("userEmail", JSON.stringify(data.email));
    console.log(data.email);

    onButtonPress();
  };

  const {
    control,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();

  useEffect(() => {
    if (onRefresh) {
      console.log("Refreshing email value");
      setValue("email", "");
    }
  }, [onRefresh]);

  return (
    <View style={styles.card}>
      <Text
        style={[styles.titleContent, { marginVertical: -8, color: "#F05A1E" }]}
      >
        基本資料測試
      </Text>
      <Seperator />
      <Controller
        control={control}
        name="email"
        rules={{ required: true }}
        render={({
          field: { value, onChange, onBlur },
          fieldState: { error },
        }) => (
          <>
            <View
              style={[styles.input, { borderColor: error ? "red" : "#cccccc" }]}
            >
              <TextInput
                value={value}
                onChangeText={onChange}
                onBlur={onBlur}
                placeholder={"請輸入您的 Email"}
              />
            </View>
            {error && (
              <Text style={{ color: "red", alignSelf: "stretch" }}>
                {error.message || "Email 為必填"}
              </Text>
            )}
          </>
        )}
      />
      <View style={{ marginTop: 32 }}>
        <Button
          fillStyle="secondary"
          textStyle="secondary"
          label={"送出 Email"}
          onPress={handleSubmit(onSubmitMail)}
        />
      </View>
    </View>
  );
};

export default EmailSubmit;

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    padding: 24,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "#ccc",
    marginVertical: 8,
  },
  input: {
    borderRadius: 8,
    borderColor: "#cccccc",
    height: 40,
    borderWidth: 1,
    padding: 10,
  },
  titleContent: {
    color: "#666666",
    fontSize: 16,
  },
  content: {
    fontSize: 16,
    alignSelf: "stretch",
    marginBottom: 16,
  },
  separator: {
    marginVertical: 24,
    marginHorizontal: -24,
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
  },
});
