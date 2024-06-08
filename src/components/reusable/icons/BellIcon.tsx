import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useTheme } from "@react-navigation/native";
import { FontAwesome } from "@expo/vector-icons";
import { white } from "@/src/config/constants/Colors";

interface BellIconProps {
  theme?: boolean;
}
const BellIcon = ({ theme }: BellIconProps) => {
  const { colors } = useTheme();
  const styles = Styles(colors, theme);
  return (
    <View style={styles.container}>
      <FontAwesome
        name="bell"
        size={15}
        color={theme ? white : colors.primary}
      />
    </View>
  );
};

export default BellIcon;

const Styles = (colors: any, theme: any) =>
  StyleSheet.create({
    container: {
      height: 30,
      width: 30,
      borderRadius: 100,
      backgroundColor: theme ? colors.primary : white,
      justifyContent: "center",
      alignItems: "center",
    },
  });
