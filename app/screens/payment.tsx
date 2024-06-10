import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { AppHeader } from "@/src/components";
import { USER } from "@/src/asset";
import { Feather, Ionicons } from "@expo/vector-icons";
import { FONT, commonStyles } from "@/src/config/constants/constants";
import { hp } from "@/src/utils/Dimension";
import { darkBlueShade, primaryBlue } from "@/src/config/constants/Colors";
import { Row } from "@/src/feature/walls/components";
import { useRouter } from "expo-router";
import GradientButton from "@/src/components/reusable/GradientButton";

const Payment = () => {
  const router = useRouter();
  return (
    <ScrollView>
      <AppHeader LeftComp RightComp title="Invoice FL-909909" />
      <View style={styles.upperSection}>
        <Image style={styles.userImage} source={USER} />

        <Text style={styles.textBold}>500.00 Dhs</Text>
        <Text>Sozales</Text>

        <View style={[styles.horizontalView2, { marginVertical: 10 }]}>
          <View style={styles.carSign}>
            <Ionicons name="car" color={"white"} />
          </View>
          <Text style={{ fontSize: 10, color: "rgba(0,0,0,0.5)" }}>
            automobile
          </Text>
        </View>
      </View>

      <Text style={styles.invoice}>Invoice Items</Text>

      <View style={{ paddingHorizontal: 15 }}>
        <Row title="When" value="Mercredi le 6 Janvier" />
        <Row title="Méthode" value="Espece" />
        <Row title="On point" value="Hamid Bennani" />
        <Row
          title="Note"
          value="Add"
          valueStyles={{
            fontFamily: FONT.Bold,
            textDecorationLine: "underline",
          }}
        />
      </View>

      <Text style={[styles.invoice, { marginVertical: hp(4) }]}>Document</Text>

      <TouchableOpacity
        onPress={() => router.push("screens/invoice")}
        style={[styles.spaceBtwUser, { marginBottom: 20 }]}
      >
        <View>
          <Text style={[styles.semiBold]}>
            Invoice F 0929
          </Text>
          <Text style={styles.border}>20 January 15:30</Text>
        </View>
        <Image source={USER} style={styles.userImage} />
      </TouchableOpacity>

      <GradientButton
        colors={darkBlueShade}
        text="Recharge Jawaz"
        style={styles.rechargeJawaz}
        textStyle={styles.rechargeJawazText}
        onPress={() => {}}
      />
    </ScrollView>
  );
};

export default Payment;

const styles = StyleSheet.create({
  userImage: {
    height: 75,
    width: 75,
    borderRadius: 100,
    alignSelf: "center",
    // marginVertical: hp(6),
  },
  upperSection: {
    backgroundColor: "#F5F5F5",
    alignItems: "center",
  },
  horizontalView: {
    ...commonStyles.horizontalView,
    borderWidth: 2,
    borderColor: "#76CF84",
    paddingVertical: 2,
    paddingHorizontal: 7,
    borderRadius: 25,
  },
  textBold: {
    fontFamily: FONT.SemiBold,
    fontSize: 28,
    marginVertical: 10,
  },
  horizontalView2: {
    ...commonStyles.horizontalView,
    borderWidth: 1,
    borderColor: "rgba(0,0,0,0.2)",
    paddingVertical: 3,
    paddingHorizontal: 7,
    borderRadius: 25,
  },
  carSign: {
    height: 20,
    width: 20,
    backgroundColor: primaryBlue,
    borderRadius: 100,
    ...commonStyles.center,
    marginRight: 5,
  },
  invoice: {
    fontFamily: FONT.SemiBold,
    fontSize: 18,
    color: primaryBlue,
    marginTop: 15,
    marginBottom:13,
    paddingHorizontal: "5%",
  },
  spaceBtwUser: {
    ...commonStyles.spaceBetween,
    borderRadius: 15,
    padding: 15,
    backgroundColor: "rgba(0,0,0,0.1)",
    marginHorizontal: "5%",
  },
  semiBold: {
    fontSize: 15,
    fontFamily: FONT.SemiBold,
  },
  mediumBold: {
    fontSize: 15,
    fontFamily: FONT.Medium,
  },
  border: {
    color: "#909090",
  },
  rechargeJawaz: {
    alignSelf: "center",
    marginTop: hp(2),
    marginBottom:hp(5),
    height: hp(9),
    borderRadius: 12,
    borderBottomWidth:3,
      borderBottomColor:"#001356",
      borderBottomLeftRadius:0,
      borderBottomRightRadius:0,
  },
  rechargeJawazText: {
    fontFamily: FONT.Bold,
    fontSize: 19,
  },
});
