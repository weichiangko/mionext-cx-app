import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

const Button = ({ fillStyle, textStyle, label, ...rest }) => {
  return (
    <TouchableOpacity style={[styles.button, fillStyle]} {...rest}>
      <Text style={[styles.buttonText, textStyle]}>{label}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#F05A1E",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 48,
    height: 48,
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
