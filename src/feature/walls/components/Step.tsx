import { StyleSheet, Text, View, ViewStyle } from "react-native";
import React from "react";
import { hp } from "@/src/utils/Dimension";
import { primaryBlue } from "@/src/config/constants/Colors";

interface StepProps {
  style?: ViewStyle;
  isBlue?: boolean;
}
const Step = ({ style, isBlue }: StepProps) => {
  return (
    <View
      style={[
        { width: 5, height: hp(10), backgroundColor: "#D0D0D0" },
        isBlue && { backgroundColor: primaryBlue },
        style,
      ]}
    />
  );
};

export default Step;

const styles = StyleSheet.create({});
