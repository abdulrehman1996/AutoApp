import { StyleSheet, View, Image } from "react-native";
import React from "react";
import { useTheme } from "@react-navigation/native";
import { FONT, commonStyles } from "@/src/config/constants/constants";
import { Text } from "@/src/components";
import GradientButton from "@/src/components/reusable/GradientButton";
import { wp } from "@/src/utils/Dimension";
import { blueShade } from "@/src/config/constants/Colors";

interface AppointmentWallProps {
  date?: string;
  userProfile?: any;
}
const AppointmentWall = ({ date, userProfile }: AppointmentWallProps) => {
  const { colors } = useTheme();
  const styles = Styles(colors);
  return (
    <View style={styles.horizontalView}>
      <View style={styles.leftSection}>
        <Text style={styles.appointment}>Due in 2 Days</Text>
        <Text style={styles.date}>{date}</Text>

        <View style={styles.line} />
        <GradientButton
          colors={blueShade}
          text="View appointement"
          style={styles.button}
          onPress={() => {}}
        />
      </View>
      <Image source={userProfile} style={styles.image} />
    </View>
  );
};

export default AppointmentWall;

const Styles = (colors: any) =>
  StyleSheet.create({
    horizontalView: {
      ...commonStyles.spaceBetween,
      paddingHorizontal: 15,
      marginHorizontal: "5%",
      //   borderWidth:1,
      paddingVertical: 15,
      borderWidth: 0.5,
      borderColor: "rgba(0,0,0,0.1)",
      marginTop: 10,
      marginBottom: 15,
      borderRadius: 15,
    },
    appointment: {
      color: "#5879EE",
      fontFamily: FONT.Medium,
    },
    date: {
      fontSize: 16,
      paddingVertical: 5,
      fontFamily: FONT.SemiBold,
    },
    leftSection: {
      //   borderWidth: 1,
    },
    rightSection: {},
    button: {
      width: wp(50),
    },
    image: {
      height: 70,
      width: 70,
      borderRadius: 100,
    },
    line: {
      height: 5,
      width: "100%",
      backgroundColor: colors.primary,
      borderRadius: 100,
      marginVertical: 15,
    },
  });
