import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  ViewStyle,
} from "react-native";
import React from "react";
import { Text } from "@/src/components";
import { hp } from "@/src/utils/Dimension";
import { JAWAZLOGO } from "../assets";
import { useTheme } from "@react-navigation/native";
import { FONT, commonStyles } from "@/src/config/constants/constants";
import { Entypo } from "@expo/vector-icons";

interface HeadingProps {
  title?: string;
  style?: ViewStyle;
  rightView?: React.ReactNode;
}
const Heading = ({ style, title, rightView }: HeadingProps) => {
  const { colors } = useTheme();
  const styles = Styles(colors);
  return (
    <View style={[styles.container, style]}>
      <Text style={styles.text}>{title}</Text>
      <TouchableOpacity style={styles.iconContainer}>
        {rightView ? (
          rightView
        ) : (
          <Entypo name="chevron-right" color={colors.primary} size={25} />
        )}
      </TouchableOpacity>
    </View>
  );
};

export default Heading;

const Styles = (colors: any) =>
  StyleSheet.create({
    container: {
      ...commonStyles.spaceBetween,
      paddingHorizontal: 5,
      marginHorizontal: "5%",
    },
    text: {
      color: colors.primary,
      fontSize: 18,
      fontFamily: FONT.SemiBold,
    },
    iconContainer: {
      //   height: 40,
      height: 35,
      width: 35,
      borderWidth: 0.5,
      ...commonStyles.center,
      borderColor: "rgba(0,0,0,0.1)",
      borderRadius: 100,
    },
  });
