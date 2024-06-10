import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { useTheme } from "@react-navigation/native";
import { AppHeader, Button } from "@/src/components";
import { ProfilePic, Step, UserCard } from "@/src/feature/walls/components";
import { FONT, commonStyles } from "@/src/config/constants/constants";
import {
  CARBACk,
  CARTOON,
  NUMBERPLATE,
} from "@/src/feature/walls/assets/images";
import { hp, wp } from "@/src/utils/Dimension";
import { USER } from "@/src/asset";
import { AntDesign } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";

const Service = () => {
  const { colors } = useTheme();
  const styles = Styles(colors);
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
      <AppHeader LeftComp RightComp title="Service" />
        <View style={styles.upperContainer}>
          <UserCard />
        </View>

        <View style={styles.bottomView}>
          <View style={styles.horizontalView}>
            <Image style={styles.cartoonImage} source={CARTOON} />
            <View style={styles.thanksContainer}>
              <Text style={styles.thanksText}>
                Thank you for trusting us, we are always happy to help.
              </Text>
            </View>
          </View>

          <View style={styles.mainSection}>
            <View style={styles.steps}>
              <ProfilePic isBlue number={1} />
              <Step style={styles.lg} isBlue />
              <ProfilePic isBlue number={2} />
              <Step style={styles.lg} isBlue />
              <ProfilePic isBlue number={3} />
              <Step style={styles.lg} isBlue />
              <ProfilePic isBlue number={4} />
              <Step style={styles.lg} isBlue />
              <ProfilePic isBlue number={5} />
              <Step style={styles.lg} isBlue />
              <ProfilePic isBlue number={6} />
            </View>

            <View style={styles.detailSection}>
              <Button
                title="Rendez-vous 5 Janvier"
                style={{
                  alignSelf: "center",
                  marginVertical: 10,
                  width: wp(60),
                  marginBottom: hp(10),
                }}
              />
              <View style={styles.shadow}>
                <View style={styles.numberPlateContainer}>
                  <Text style={styles.textMed}>Entry on 25th January</Text>
                  <Image style={styles.numberplateImage} source={NUMBERPLATE} />
                </View>

                <View style={styles.line} />

                <View style={[styles.horizontalView, { marginTop: hp(3) }]}>
                  <Image source={CARBACk} style={styles.carBack} />
                  <Image source={CARBACk} style={styles.carBack} />
                  <Image source={CARBACk} style={styles.carBack} />
                </View>
              </View>

              <TouchableOpacity
                style={[
                  styles.spaceBtwUser,
                  { marginTop: hp(6), marginBottom: hp(4) },
                ]}
              >
                <View>
                  <Text style={[styles.semiBold, { marginVertical: 3 }]}>
                    Invoice F 0929
                  </Text>
                  <Text style={styles.border}>20 January 15:30</Text>
                </View>
                <Image source={USER} style={styles.userImage} />
              </TouchableOpacity>

              <View style={[styles.spaceBtw, { marginTop: 13 }]}>
                <Text style={styles.mediumBold}>Total</Text>
                <Text style={styles.mediumBold}>1200.00 Dhs</Text>
              </View>

              <View style={[styles.shadow,{marginTop:hp(6)}]}>
              <Text style={styles.textBold}>Oil Change</Text>
              <Text style={{}}>Changing oil and oil filter</Text>

              <View style={[styles.horizontalView, { marginTop: hp(3) }]}>
                  <Image source={CARBACk} style={styles.carBack} />
                  <Image source={CARBACk} style={styles.carBack} />
                  <Image source={CARBACk} style={styles.carBack} />
                </View>
                <View style={[styles.horizontalView, { marginTop: hp(3) }]}>
                  <Image source={CARBACk} style={styles.carBack} />
                  <Image source={CARBACk} style={styles.carBack} />
                </View>
              </View>

                <View style={[styles.shadow,{paddingVertical:0,marginVertical:hp(5)}]}>
              <View style={[styles.spaceBtw, { marginVertical: hp(4), }]}>
                <View style={{}}>
                  <Text style={[styles.semiBold, { marginVertical: 3 }]}>
                    Payment
                  </Text>
                  <Text style={styles.border}>Facture</Text>
                </View>
                <Text style={styles.dhs}>130 Dhs</Text>
              </View>
              </View>

              <View style={styles.shadow}>
                <View style={styles.horizontalView}>
                  <AntDesign name="star" color="#FBF94C" size={20} style={{marginRight:5}}/>
                  <AntDesign name="star" color="#FBF94C" size={20} style={{marginRight:5}}/>
                  <AntDesign name="star" color="#FBF94C" size={20} style={{marginRight:5}}/>
                  <AntDesign name="star" color="#FBF94C" size={20} style={{marginRight:5}}/>
                </View>
                <Text style={styles.des}>What a life saver, i will 100% be using you guys again</Text>
              </View>


            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Service;

const Styles = (colors: any) =>
  StyleSheet.create({
    container: {
      flex: 1,
    },
    upperContainer: {
      backgroundColor: "#F5F5F5",
    },
    bottomView: {
      marginHorizontal: "5%",
      paddingTop: hp(4),
      paddingBottom: hp(5),
    },
    horizontalView: {
      ...commonStyles.horizontalView,
    },
    cartoonImage: {
      height: 60,
      width: 60,
      marginRight: wp(7),
    },
    thanksContainer: {
      ...commonStyles.center,
      paddingHorizontal: 8,
      paddingVertical: 10,
      ...commonStyles.shadow_2,
      flexWrap: "wrap",
      width: 200,
      backgroundColor: "white",
      borderRadius: 15,
    },
    thanksText: {
      fontSize: 16,
      letterSpacing: 1,
    },
    mainSection: {
      marginHorizontal: "5%",
      flexDirection: "row",
      marginTop: hp(3),
    },
    steps: {
      // borderWidth:1,
      width: "15%",
    },
    detailSection: {
      // borderWidth:1,
      // borderColor:'red',
      width: "85%",
    },
    sm: {
      height: hp(4),
    },
    lg: {
      marginVertical: 3,
      height: hp(23.5),
    },
    exl: {
      marginVertical: 3,
      height: hp(17),
    },
    md: {
      marginVertical: 3,
      height: hp(8),
    },
    spaceBtw: {
      ...commonStyles.spaceBetween,
    },
    numberPlateContainer: {
      ...commonStyles.spaceBetween,
    },
    numberplateImage: {
      resizeMode: "contain",
      height: 35,
      marginLeft: wp(-16),
    },
    textMed: {
      fontFamily: FONT.Medium,
    },
    line: {
      height: 0.5,
      backgroundColor: "rgba(0,0,0,0.1)",
      width: wp(80),
      marginVertical: hp(2),
    },
    carBack: {
      height: 50,
      width: 50,
      borderRadius: 15,
      marginRight: 6,
    },
    spaceBtwUser: {
      marginTop: hp(6),
      ...commonStyles.spaceBetween,
      borderRadius: 15,
      padding: 15,
      backgroundColor: "rgba(0,0,0,0.1)",
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
    dhs: {
      color: colors.primary,
      fontFamily: FONT.SemiBold,
    },
    userImage: {
      height: 50,
      width: 50,
      borderRadius: 100,
    },
    textBold: {
      color: colors.primary,
      fontFamily: FONT.Bold,
      fontSize: 15,
      marginVertical: 10,
      // marginTop: hp(7),
    },
    shadow: {
      ...commonStyles.shadow_2,
      backgroundColor: "white",
      paddingVertical: hp(2.5),
      paddingHorizontal: hp(1.5),
      borderRadius: 10,
    },
    startCard:{

    },
    des:{
      letterSpacing:1,
      fontSize:16,
      marginVertical:10,
    }
  });
