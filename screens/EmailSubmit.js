import React from "react";
import OneSignal from "react-native-onesignal";
import { StyleSheet, Text, View, TextInput } from "react-native";
import { useForm, Controller } from "react-hook-form";
import Button from "../components/Button";

const onSubmitMail = (data) => {
  console.log(data.email);
  OneSignal.sendTags({
    user_email: data.email,
    user_account: "active",
  });
  OneSignal.addTrigger("user_email", data.email);
};

const EmailSubmit = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <View style={styles.card}>
      <Text style={styles.content}>Email 註冊測試</Text>
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
        <Button label={"送出 Email"} onPress={handleSubmit(onSubmitMail)} />
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
    marginTop: 16,
    marginVertical: 8,
  },
  input: {
    borderColor: "#cccccc",
    height: 40,
    borderWidth: 1,
    padding: 10,
  },
  content: {
    color: "#1f1f1f",
    fontSize: 16,
    alignSelf: "stretch",
    marginBottom: 16,
  },
});
