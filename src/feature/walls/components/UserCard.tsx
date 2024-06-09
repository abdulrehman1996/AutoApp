import { Image, StyleSheet, View } from "react-native";
import React from "react";
import { FONT, commonStyles } from "@/src/config/constants/constants";
import { USER } from "@/src/asset";
import { AntDesign, MaterialIcons } from "@expo/vector-icons";
import { white } from "@/src/config/constants/Colors";
import { Text } from "@/src/components";
import { hp } from "@/src/utils/Dimension";

const UserCard = () => {
  return (
    <View style={styles.container}>
      <Image source={USER} style={styles.image} />
      <View style={styles.rightContainer}>
        <View style={styles.horizontalView}>
          <Text style={styles.textBold}>Diagno Rabat</Text>
          <View style={styles.iconContainer}>
            <MaterialIcons name="done" color="white" />
          </View>
        </View>
        <Text style={styles.textMedium}>Rabat - Agdal</Text>
        <View style={{ ...commonStyles.horizontalView }}>
          <AntDesign name="star" color="#DCD600" />
          <AntDesign
            name="star"
            color="#DCD600"
            style={{ marginHorizontal: 5 }}
          />
          <AntDesign name="star" color="#DCD600" />
        </View>
      </View>
    </View>
  );
};

export default UserCard;

const styles = StyleSheet.create({
  container: {
    ...commonStyles.horizontalView,
    marginHorizontal: "15%",
    backgroundColor: white,
    ...commonStyles.shadow_2,
    paddingVertical: 20,
    paddingHorizontal: 10,
    marginBottom:hp(5),
    borderRadius:10,
    marginTop:hp(3)
  },
  image: {
    height: 60,
    width: 60,
    borderRadius: 100,
    marginRight: 15,
  },
  rightContainer: {},
  horizontalView: {
    ...commonStyles.horizontalView,
  },
  textMedium: {
    marginVertical: 1,
    fontFamily: FONT.Medium,
  },
  textBold: {
    fontFamily: FONT.Bold,
    letterSpacing: 0.5,
    fontSize: 16,
  },
  iconContainer: {
    height: 15,
    width: 15,
    borderRadius: 100,
    backgroundColor: "#E1A865",
    ...commonStyles.center,
    marginLeft:5,
  },
});
