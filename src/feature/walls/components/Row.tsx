import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { FONT, commonStyles } from "@/src/config/constants/constants";
import { primaryBlue } from "@/src/config/constants/Colors";

interface RowProps {
  title?: string;
  value?: string;
  theme?: boolean;
}
const Row = ({ title, value, theme }: RowProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.leftText}>{title}</Text>
      {/* @ts-ignore */}
      <Text style={[styles.rightText, theme && { color: primaryBlue }]}>
        {value}
      </Text>
    </View>
  );
};

export default Row;

const styles = StyleSheet.create({
  container: {
    ...commonStyles.spaceBetween,
    marginVertical:3,
  },
  leftText: {
    fontFamily: FONT.SemiBold,
    },
    rightText: {
      fontFamily: FONT.SemiBold,
  },
});
