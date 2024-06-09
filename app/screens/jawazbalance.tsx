import { Image, ScrollView, StyleSheet, View } from "react-native";
import React from "react";
import { AppHeader, Text } from "@/src/components";
import { hp } from "@/src/utils/Dimension";
import { CARIMAGE } from "@/src/feature/home/assets";
import { FONT, commonStyles } from "@/src/config/constants/constants";
import { useTheme } from "@react-navigation/native";
import GradientButton from "@/src/components/reusable/GradientButton";
import { Ionicons } from "@expo/vector-icons";

const jawazbalance = () => {
  const { colors } = useTheme();
  const styles = Styles(colors);
  return (
    <View style={styles.container}>
      <AppHeader LeftComp />
      <ScrollView>
        <View style={styles.upperView}>
          <Text style={styles.jawazBal}>Jawaz Balance</Text>

          <View style={styles.carImageContainer}></View>
          <Image style={styles.carImage} source={CARIMAGE} />
        </View>
        <View style={styles.bottomContainer}>
          <View style={styles.horizontalView}>
            <Text style={styles.textMedium}>
              Your balance is{" "}
              <Text style={{ color: "red", fontFamily: FONT.Medium }}>low</Text>
            </Text>
            <GradientButton
              colors={["#30D2D5", "#42D6AA", "#28DBA5"]}
              text="refresh"
              style={styles.refreshButton}
              onPress={() => {}}
              icon={
                <Ionicons
                  name="refresh-sharp"
                  color={colors.background}
                  size={15}
                  style={{marginRight:5,}}
                />
              }
            />

          </View>
            <Text style={styles.textBold}>89.00 Dhs</Text>
            <Text style={styles.textSM}>Updated on 12th February 16:30</Text>

            <GradientButton
          colors={["#5879EE", "#819CFF", "#5879EE"]}
          text="I'm Broken Down"
          style={styles.rechargeJawaz}
          textStyle={styles.rechargeJawazText}
          onPress={() => {}}
        />

        </View>
      </ScrollView>
    </View>
  );
};

export default jawazbalance;

const Styles = (colors: any) =>
  StyleSheet.create({
    container: {
      flex: 1,
    },
    upperView: {
      paddingHorizontal: "5%",
      backgroundColor: "#F5F5F5",
    },
    carImage: {
      resizeMode: "center",
      height: 150,
      marginTop: hp(5),
      alignSelf: "center",
    },
    carImageContainer: {
      ...commonStyles.center,
    },
    jawazBal: {
      fontSize: 25,
      color: colors.primary,
      fontFamily: FONT.Medium,
      marginVertical: 10,
    },
    bottomContainer: {
      paddingTop: hp(8),
      paddingHorizontal:'5%',
      backgroundColor: colors.background,
    },
    horizontalView: {
      ...commonStyles.horizontalView,
    },
    textMedium: {
      fontFamily: FONT.Medium,
    },
    refreshButton: {
      width:100,
      marginLeft:15,
    },
    textBold:{
      fontFamily:FONT.Bold,
      fontSize:30,
      marginVertical:10,
      color:colors.primary,
      letterSpacing:1,
    },
    textSM:{
      color:"#9B9B9B",

    },
    rechargeJawaz: {
      alignSelf: "center",
      marginTop: hp(8),
      height: hp(9),
      borderRadius: 12,
    },
    rechargeJawazText: {
      fontFamily: FONT.Bold,
      fontSize: 19,
    },
  });
