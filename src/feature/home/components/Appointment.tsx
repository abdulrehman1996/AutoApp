import { StyleSheet, View,Image } from "react-native";
import React from "react";
import { useTheme } from "@react-navigation/native";
import { FONT, commonStyles } from "@/src/config/constants/constants";
import { Text } from "@/src/components";
import GradientButton from "@/src/components/reusable/GradientButton";
import { wp } from "@/src/utils/Dimension";

interface AppointmentProps {
  date?: string;
  userProfile?: any;
}
const Appointment = ({ date, userProfile }: AppointmentProps) => {
  const { colors } = useTheme();
  const styles = Styles(colors);
  return (
    <View style={styles.horizontalView}>
      <View style={styles.leftSection}>
        <Text style={styles.appointment}>Appointement</Text>
        <Text style={styles.date}>{date}</Text>

        <GradientButton
          colors={["#30D2D5", "#42D6AA", "#28DBA5"]}
          text="View appointement"
          style={styles.button}
          onPress={()=>{}}
        />
      </View>
      <Image source={userProfile} style={styles.image} />
    </View>
  );
};

export default Appointment;

const Styles = (colors: any) =>
  StyleSheet.create({
    horizontalView: {
      ...commonStyles.spaceBetween,
      paddingHorizontal: 15,
      marginHorizontal: "5%",
      //   borderWidth:1,
      paddingVertical: 15,
      ...commonStyles.shadow_2,
    backgroundColor:'white',
    borderRadius:8,
    marginTop:10,
    marginBottom:15,
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
    image:{
        height:50,
        width:50,
        borderRadius:100,
    }
  });
