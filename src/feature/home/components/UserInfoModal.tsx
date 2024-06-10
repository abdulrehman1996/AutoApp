import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Button, RNModal } from "@/src/components";
import Heading from "./Heading";
import { AntDesign, Entypo, MaterialIcons } from "@expo/vector-icons";
import { useTheme } from "@react-navigation/native";
import { hp, wp } from "@/src/utils/Dimension";
import { UserCard } from "../../walls/components";
import { FONT, commonStyles } from "@/src/config/constants/constants";
import { black, white } from "@/src/config/constants/Colors";
import { USER } from "@/src/asset";
import { LEFTCAR } from "../assets";

interface UserModalProps {
  userModal: boolean;
  setUserModal: (visible: boolean) => void;
}

const UserInfoModal = ({ userModal, setUserModal }: UserModalProps) => {
  const { colors } = useTheme();
  const styles = Styles(colors);
  return (
    <RNModal
      style={styles.licenceModal}
      visible={userModal}
      setVisible={setUserModal}
    >
      <View style={styles.licenceModalView}>
        <Heading
          title="Provider Profile"
          style={{ width: "100%" }}
          rightView={
            <TouchableOpacity
              style={styles.iconStyles}
              onPress={() => setUserModal(false)}
            >
              <Entypo name="cross" color={"#5879EE"} size={14} />
            </TouchableOpacity>
          }
        />
        <View style={styles.container}>
          <Image source={USER} style={styles.image} />
          <View style={styles.rightContainer}>
            <View style={styles.horizontalView}>
              <Text style={styles.textBold}>John Doe</Text>
              <View style={styles.iconContainer}>
                <MaterialIcons name="done" color="white" />
              </View>
            </View>
            <Text style={styles.textMedium}>Service Provider</Text>

            <Text style={{ fontFamily: FONT.Medium }}>4.5 KM Away</Text>
          </View>
        </View>

        <Text style={{ fontFamily: FONT.SemiBold, fontSize: 20 }}>access</Text>

        <View style={styles.carContainer}>
          <View style={[styles.container]}>
            <Image source={LEFTCAR} style={styles.carImage} />
            <View style={styles.rightContainer}>
              <View style={styles.horizontalView}>
                <Text style={styles.textBold}>Audi a3</Text>
                <View style={styles.iconContainer}>
                  <MaterialIcons name="done" color="white" />
                </View>
              </View>
              <Text style={[styles.textMedium, { width: "70%" }]}>
                The Brand, Mileage, VIN, Year Will be shared
              </Text>
            </View>
          </View>

          <Button
            title="Disconnect"
            style={styles.button}
            textStyle={{ color: black }}
          />
        </View>
      </View>
    </RNModal>
  );
};

export default UserInfoModal;

const Styles = (colors: any) =>
  StyleSheet.create({
    licenceModal: {
      backgroundColor: "transparent",
      //   justifyContent:'flex-end',

      flex: 1,
    },
    licenceModalView: {
      width: wp(100),
      backgroundColor: "white",
      borderRadius: 15,
      paddingVertical: 25,
      paddingHorizontal: "5%",
      justifyContent: "flex-end",
      position: "absolute",
      bottom: hp(-5),
      left: -20,
    },
    iconStyles: {
      backgroundColor: colors.background,
      height: 30,
      width: 30,
      borderRadius: 100,
      justifyContent: "center",
      alignItems: "center",
      borderWidth: 0.5,
      borderColor: "rgba(0,0,0,0.2)",
    },
    container: {
      ...commonStyles.horizontalView,
      backgroundColor: white,
      paddingVertical: 20,
      paddingHorizontal: 10,
      marginBottom: hp(1),
      borderRadius: 10,
      marginTop: hp(3),
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
      //   fontFamily: FONT.Medium,
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
      marginLeft: 5,
    },
    carImage: {
      height: 60,
      width: 60,
      marginRight: 15,
      resizeMode: "contain",
    },
    button: {
      backgroundColor: white,
      width: '100%',
      marginTop:hp(2),
      height: hp(7),
      borderWidth: 1.5,
      borderColor: "#FA6706",
    },
    carContainer:{
        backgroundColor: "#F4F4F4",
        paddingHorizontal:15,
    }
  });
