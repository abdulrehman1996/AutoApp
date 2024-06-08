import { StyleSheet, View, Image } from "react-native";
import React from "react";
import { Text } from "@/src/components";
import { hp } from "@/src/utils/Dimension";
import { JAWAZLOGO } from "../assets";
import { useTheme } from "@react-navigation/native";
import { FONT, commonStyles } from "@/src/config/constants/constants";

interface InfoCardProps {
  image?: any;
  title?: string;
  info?: string;
}
const InfoCard = ({ image, title, info }: InfoCardProps) => {
  const { colors } = useTheme();
  const styles = Styles(colors);
  return (
    <View style={styles.cardView}>
      {title ? (
        <Text style={styles.title}>{title}</Text>
      ) : (
        <Image source={JAWAZLOGO} style={styles.image} />
      )}
      <Text style={styles.info}>{info}</Text>
    </View>
  );
};

export default InfoCard;

const Styles = (colors: any) =>
  StyleSheet.create({
    cardView: {
      width: "45%",
      height: hp(12),
      borderWidth: 0.5,
      borderColor: "rgba(0,0,0,0.1)",
      borderRadius: 10,
      ...commonStyles.center,
    },
    info: {
      fontFamily: FONT.Medium,
    },
    title: {
      color: colors.primary,
      fontFamily: FONT.Medium,
    },
    image: {
      //   resizeMode: "contain",
      width: 30,
      height: 30,
      marginBottom: 5,
    },
  });
