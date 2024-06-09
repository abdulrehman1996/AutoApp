import {
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { AppHeader, Text } from "@/src/components";
import { USER } from "@/src/asset";
import { hp } from "@/src/utils/Dimension";
import { FONT, commonStyles } from "@/src/config/constants/constants";
import { AntDesign, EvilIcons, Feather, Ionicons } from "@expo/vector-icons";
import { primaryBlue } from "@/src/config/constants/Colors";
import { Row } from "@/src/feature/walls/components";

const Invoice = () => {
  return (
    <View style={styles.container}>
      <AppHeader LeftComp RightComp title="Invoice FL-909909" />
      <ScrollView>
        <View style={styles.upperSection}>
          <Image style={styles.userImage} source={USER} />

          <View style={styles.horizontalView}>
            <View style={styles.dollarSign}>
              <Feather name="dollar-sign" color={"white"} />
            </View>
            <Text style={styles.paid}>paid</Text>
          </View>

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

          <View style={styles.cardContainer}>
            <View style={styles.licenseCard}>
              <Text style={styles.titleMedium}>23 Junuary</Text>
              <Text>Date</Text>
            </View>
            <View style={styles.licenseCard}>
              <Text style={styles.titleMedium}>29 Junuary</Text>
              <Text>Due Date</Text>
            </View>
          </View>
        </View>

        <View style={styles.bottomSection}>
          <View style={styles.bottomHeader}>
            <Text style={styles.invoice}>Invoice Items</Text>

            <View style={{ ...commonStyles.horizontalView }}>
              <TouchableOpacity
                style={[
                  styles.iconContainer,
                  { marginRight: 5, backgroundColor: "#30D2D5" },
                ]}
              >
                <AntDesign name="download" color="white" size={15} />
              </TouchableOpacity>
              <TouchableOpacity style={styles.iconContainer}>
                <EvilIcons name="share-google" color="white" size={20} />
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.borderContainer}>
            <Row title="Oil Filter Avista MO052012" value="1 x 250 Dhs" theme />
            <Row title="TAX" value="1 x 250 Dhs" />
            <Row title="Discount" value="0.00 Dhs" />
            <Row title="Sub Total" value="0.00Dhs" theme />
          </View>

          <View style={styles.borderContainer}>
            <Row title="Oil Filter Avista MO052012" value="1 x 250 Dhs" theme />
            <Row title="TAX" value="1 x 250 Dhs" />
            <Row title="Discount" value="0.00 Dhs" />
            <Row title="Sub Total" value="0.00Dhs" theme />
          </View>

          <View style={styles.borderContainer}>
            <Row title="Oil Filter Avista MO052012" value="1 x 250 Dhs" theme />
            <Row title="TAX" value="1 x 250 Dhs" />
            <Row title="Discount" value="0.00 Dhs" />
            <Row title="Sub Total" value="0.00Dhs" theme />
          </View>

        </View>
      </ScrollView>
    </View>
  );
};

export default Invoice;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  userImage: {
    height: 75,
    width: 75,
    borderRadius: 100,
    alignSelf: "center",
    marginVertical: hp(6),
  },
  upperSection: {
    backgroundColor: "#F5F5F5",
    alignItems: "center",
  },
  bottomSection: {
    backgroundColor: "white",
    paddingTop: hp(2),
    paddingHorizontal: "5%",
  },
  horizontalView: {
    ...commonStyles.horizontalView,
    borderWidth: 2,
    borderColor: "#76CF84",
    paddingVertical: 2,
    paddingHorizontal: 7,
    borderRadius: 25,
  },
  horizontalView2: {
    ...commonStyles.horizontalView,
    borderWidth: 1,
    borderColor: "rgba(0,0,0,0.2)",
    paddingVertical: 3,
    paddingHorizontal: 7,
    borderRadius: 25,
  },
  dollarSign: {
    height: 20,
    width: 20,
    backgroundColor: "#76CF84",
    borderRadius: 100,
    ...commonStyles.center,
    marginRight: 5,
  },
  carSign: {
    height: 20,
    width: 20,
    backgroundColor: primaryBlue,
    borderRadius: 100,
    ...commonStyles.center,
    marginRight: 5,
  },
  paid: {
    color: "#76CF84",
    fontSize: 11,
    fontFamily: FONT.Medium,
  },
  textBold: {
    fontFamily: FONT.SemiBold,
    fontSize: 28,
    marginVertical: 10,
  },
  cardContainer: {
    ...commonStyles.spaceBetween,
    width: "100%",
    marginBottom: hp(6),
    paddingHorizontal: "5%",
    marginTop: hp(2.5),
  },
  licenseCard: {
    ...commonStyles.center,
    ...commonStyles.shadow_2,
    width: "48%",
    paddingVertical: hp(2.5),
    borderRadius: 10,
    backgroundColor: "white",
  },
  titleMedium: {
    // fontSize:16,
    fontFamily: FONT.Medium,
  },
  bottomHeader: {
    ...commonStyles.spaceBetween,
    marginBottom:hp(2)
  },
  invoice: {
    fontFamily: FONT.SemiBold,
    fontSize: 18,
    color: primaryBlue,
  },
  iconContainer: {
    height: 28,
    width: 28,
    borderRadius: 100,
    // ,
    backgroundColor: "#FA6706",
    ...commonStyles.center,
  },
  borderContainer: {
    borderTopWidth: 5,
    // borderBottomWidth: 5,
    borderColor: "#EDEEF6",
    borderStyle: "dotted",
    paddingVertical: 10,
  },
});
