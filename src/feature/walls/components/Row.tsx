import { StyleSheet, Text, TextStyle, View } from "react-native";
import React from "react";
import { FONT, commonStyles } from "@/src/config/constants/constants";
import { primaryBlue } from "@/src/config/constants/Colors";

interface RowProps {
  title?: string;
  value?: string;
  theme?: boolean;
  textStyle?: TextStyle;
  valueStyles?: TextStyle;
}

const Row = ({ title, value, theme, textStyle, valueStyles }: RowProps) => {
  return (
    <View style={styles.container}>
      <Text style={[styles.leftText, textStyle]}>{title}</Text>
      {/* @ts-ignore */}
      <Text
        style={[styles.rightText, theme && { color: primaryBlue }, textStyle,valueStyles]}
      >
        {value}
      </Text>
    </View>
  );
};

export default Row;

const styles = StyleSheet.create({
  container: {
    ...commonStyles.spaceBetween,
    marginVertical: 3,
  },
  leftText: {
    fontFamily: FONT.Medium,
  },
  rightText: {
    fontFamily: FONT.Medium,
  },
});
