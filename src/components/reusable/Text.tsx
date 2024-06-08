import { StyleSheet, Text as RNText, View, TextStyle } from "react-native";
import React from "react";
import { text } from "@/src/config/constants/Colors";
import { useTheme } from "@react-navigation/native";
import { FONT } from "@/src/config/constants/constants";


interface TextProps {
  children: React.ReactNode;
  style?: TextStyle | any;
  onPress?:any
}
const Text = ({ children,style,onPress=()=>{}}: TextProps) => {
  const { colors } = useTheme();
  const styles = Styles(colors);
  return <RNText onPress={onPress} style={[styles.text,style]}>{children}</RNText>
};

export default Text;

const Styles = (colors: any) =>
  StyleSheet.create({
    text: {
      color: colors.text,
      fontSize:14,
      fontFamily:FONT.Regular
    },
  });
