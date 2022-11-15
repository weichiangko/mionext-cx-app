import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

const getButtonType = (fillStyle) => {
  if (fillStyle === "secondary") {
    return styles.secondary;
  } else if (fillStyle === "disabled") {
    return styles.disabled;
  }
};

const Button = ({ fillStyle, textStyle, label, ...rest }) => {
  return (
    <TouchableOpacity
      style={[styles.primary, getButtonType(fillStyle)]}
      {...rest}
    >
      <Text
        style={[
          styles.primaryText,
          textStyle === "secondary"
            ? {
                color: "#3a3a3a",
                fontWeight: "500",
              }
            : textStyle,
        ]}
      >
        {label}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  primary: {
    backgroundColor: "#F05A1E",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 12,
    height: 40,
  },
  secondary: {
    backgroundColor: "#F5F5F5",
    borderWidth: 1,
    borderColor: "#ccc",
  },
  primaryText: {
    color: "#ffffff",
    fontSize: 16,
  },
});
