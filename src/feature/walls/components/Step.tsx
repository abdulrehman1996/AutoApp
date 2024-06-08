import { StyleSheet, Text, View, ViewStyle } from "react-native";
import React from "react";
import { hp } from "@/src/utils/Dimension";

interface StepProps {
  style?: ViewStyle;
}
const Step = ({ style }: StepProps) => {
  return (
    <View
      style={[{ width: 5, height: hp(10), backgroundColor: "#D0D0D0" }, style]}
    />
  );
};

export default Step;

const styles = StyleSheet.create({});
