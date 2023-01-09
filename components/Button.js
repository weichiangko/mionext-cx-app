import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

const Button = ({ fillStyle, textStyle, label, disabled, ...rest }) => {
  const getTextType = (textStyle) => {
    switch (textStyle) {
      case "secondary":
        return styles.secondaryText;
      case "error":
        return styles.errorText;
      default:
        return styles.primaryText;
    }
  };

  const getButtonType = (fillStyle) => {
    switch (fillStyle) {
      case "secondary":
        return styles.secondary;
      case "error":
        return styles.error;
      default:
        return styles.primary;
    }
  };

  return (
    <TouchableOpacity
      style={[
        styles.primary,
        getButtonType(fillStyle),
        disabled ? styles.disabled : null,
      ]}
      {...rest}
      disabled={disabled}
    >
      <Text
        style={[
          styles.primaryText,
          getTextType(textStyle),
          disabled ? styles.disabledText : null,
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
  primaryText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "600",
  },
  secondary: {
    backgroundColor: "#F5F5F5",
    borderWidth: 1,
    borderColor: "#ccc",
  },
  secondaryText: {
    color: "#3a3a3a",
    fontWeight: "500",
  },
  error: {
    backgroundColor: "#FFE2E2",
    borderWidth: 1,
    borderColor: "#FF8585",
  },
  errorText: {
    color: "red",
  },
  disabled: {
    backgroundColor: "#DFDFDF",
  },
  disabledText: {
    color: "#8d8d8d",
  },
});
