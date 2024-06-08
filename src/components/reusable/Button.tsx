import {
  ActivityIndicator,
  TouchableOpacity,
  TouchableOpacityProps,
  StyleProp,
  ViewStyle,
  StyleSheet
} from "react-native";
import React, { memo } from "react";
import Text from "./Text";
import { useTheme } from "@react-navigation/native";
import { FONT, commonStyles } from "@/src/config/constants/constants";

interface ButtonProps extends TouchableOpacityProps {
  title: string;
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
  disabled?: boolean;
  loading?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  title,
  onPress = () => {},
  style,
  disabled,
  loading,
}) => {
  const {colors} = useTheme();
  const styles = Styles(colors)
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={[styles.button, style]}
      onPress={onPress}
      disabled={disabled}
    >
      {loading ? <ActivityIndicator /> : <Text style={styles.title}>{title}</Text>}
    </TouchableOpacity>
  );
};

export default memo(Button);

const Styles = (colors: any) =>
  StyleSheet.create({
  button:{
    height:40,
    backgroundColor:colors.primary,
    ...commonStyles.center,
    borderRadius:15,
    width:150,
  },
  title:{
    color:colors.background,
    fontFamily:FONT.Medium
  }
});
