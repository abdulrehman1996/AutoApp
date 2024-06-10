import {
  StyleSheet,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { primaryBlue, white } from "@/src/config/constants/Colors";
import Text from "./Text";
import { FONT, commonStyles } from "@/src/config/constants/constants";
import { hp } from "@/src/utils/Dimension";

interface GradientButtonProps {
  colors?: any;
  style?: ViewStyle | any;
  text?: string;
  textStyle?: TextStyle;
  onPress?:any;
  icon?:any;
}
const GradientButton = ({
  colors = [primaryBlue, primaryBlue],
  style,
  text,
  textStyle,
  onPress,
  icon
}: GradientButtonProps) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <LinearGradient colors={colors} style={[styles.button, style]} pointerEvents="none">
        {icon && icon}
        <Text style={[styles.text, textStyle]}>{text}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default GradientButton;

const styles = StyleSheet.create({
  button: {
    height: hp(6),
    width: "90%",
    ...commonStyles.horizontalView,
    justifyContent:'center',
    paddingVertical: 4,
    borderRadius: 25,
  },
  text: {
    color: white,
    fontFamily: FONT.SemiBold,
  },
});
