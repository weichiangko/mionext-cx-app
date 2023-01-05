import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

const getTextType = (textStyle) => {
  if (textStyle === "secondary") {
    return styles.secondaryText;
  } else if (textStyle === "error") {
    return styles.errorText;
  } else {
    return styles.primaryText;
  }
};

const getButtonType = (fillStyle) => {
  if (fillStyle === "secondary") {
    return styles.secondary;
  } else if (fillStyle === "error") {
    return styles.error;
  } else {
    return styles.primary;
  }
};

const Button = ({ fillStyle, textStyle, label, disabled, ...rest }) => {
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
    backgroundColor: "#FFD1D1",
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
