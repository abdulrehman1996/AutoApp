import {
  StyleSheet,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from "react-native";
import React from "react";
import Text from "./Text";
import { hp } from "@/src/utils/Dimension";
import { AntDesign } from "@expo/vector-icons";
import { useRoute, useTheme } from "@react-navigation/native";
import { primaryBlue } from "@/src/config/constants/Colors";
import { FONT } from "@/src/config/constants/constants";
import { useRouter } from "expo-router";

interface AppHeaderProps {
  title?: string;
  LeftComp?: JSX.Element | boolean;
  RightComp?: JSX.Element | boolean;
  centerComp?: JSX.Element;
  titleStyle?: TextStyle;
  style?: ViewStyle;
}

const AppHeader = ({
  title,
  LeftComp,
  RightComp,
  centerComp,
  titleStyle,
  style,
}: AppHeaderProps) => {
  const router  = useRouter()
  const { colors } = useTheme();
  return (
    <View style={[styles.header, style]}>
      {LeftComp ? (
        <TouchableOpacity onPress={()=>router.back()} style={[styles.iconStyles,{backgroundColor:"yellow"}]}>
          <AntDesign name="arrowleft" color={colors.primary} size={14} />
        </TouchableOpacity>
      ) : (
        <View style={styles.space} />
      )}

      {title ? (
        <Text style={[styles.textStyle, titleStyle]}>{title}</Text>
      ) : (
        <View style={styles.space} />
      )}
      {RightComp ? (
        <TouchableOpacity style={styles.iconStyles}>
          <AntDesign name="sharealt" color={colors.background} size={18} />
        </TouchableOpacity>
      ) : (
        <View style={styles.space} />
      )}
    </View>
  );
};

export default React.memo(AppHeader);

const styles = StyleSheet.create({
  header: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    paddingHorizontal: "5%",
    paddingTop:hp(5),
    backgroundColor: "#F5F5F5",
    
    // backgroundColor: ,
  },
  space: {
    height: 3,
    width: "7%",
  },
  textStyle: {
    color:primaryBlue,
    fontFamily:FONT.SemiBold,
    letterSpacing:0.2
  },
  iconStyles: {
    backgroundColor: "#5879EE",
    height: 30,
    width: 30,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 0.5,
    borderColor: "rgba(0,0,0,0.2)",
  },
});
