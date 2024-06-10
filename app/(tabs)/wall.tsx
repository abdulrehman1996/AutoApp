import { USER } from "@/src/asset";
import { BellIcon, Button, MessageIcon, Text } from "@/src/components";
import { FONT, commonStyles } from "@/src/config/constants/constants";
import { InvoiceAction } from "@/src/feature/home/components";
import { BLUELOGO, MAPIMAGE } from "@/src/feature/walls/assets/images";
import {
  AppointmentWall,
  ProfilePic,
  Step,
} from "@/src/feature/walls/components";
import { hp } from "@/src/utils/Dimension";
import { useTheme } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";

import {
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
const Page = ()=> {
  const { colors } = useTheme();
  const styles = Styles(colors);
  const router = useRouter();
  const [isSelected, setIsSelected] = useState("Tout");

  const handleRowPress = (text: string) => {
    setIsSelected(text);
  };
  return (
    <View>
      <Text>Hello</Text>
    </View>
    // <SafeAreaView style={styles.container}>
    //   <StatusBar translucent={true} />
    //   <ScrollView showsVerticalScrollIndicator={false}>
    //     <LinearGradient colors={["#5879EE", "#0389EA"]} style={styles.header}>
    //       <View style={styles.appNameContainer}>
    //         <Text style={styles.appName}>App Name</Text>
    //         <View style={{ ...commonStyles.horizontalView }}>
    //           <MessageIcon />
    //           <BellIcon />
    //         </View>
    //       </View>
    //     </LinearGradient>

    //     <ScrollView horizontal style={styles.headingRow}>
    //       <Text
    //         style={[
    //           styles.headingText,
    //           isSelected == "Tout" && styles.isSelected,
    //         ]}
    //         onPress={() => handleRowPress("Tout")}
    //       >
    //         Tout
    //       </Text>
    //       <Text
    //         style={[
    //           styles.headingText,
    //           isSelected == "Payments" && styles.isSelected,
    //         ]}
    //         onPress={() => handleRowPress("Payments")}
    //       >
    //         Payments
    //       </Text>
    //       <Text
    //         style={[
    //           styles.headingText,
    //           isSelected == "Maintance" && styles.isSelected,
    //         ]}
    //         onPress={() => handleRowPress("Maintance")}
    //       >
    //         Maintance
    //       </Text>
    //       <Text
    //         style={[
    //           styles.headingText,
    //           isSelected == "Trip" && styles.isSelected,
    //         ]}
    //         onPress={() => handleRowPress("Trip")}
    //       >
    //         Trip
    //       </Text>
    //       <Text
    //         style={[
    //           styles.headingText,
    //           isSelected == "ToCarwdut" && styles.isSelected,
    //         ]}
    //         onPress={() => handleRowPress("Carwd")}
    //       >
    //         Carwd
    //       </Text>
    //     </ScrollView>

    //     <AppointmentWall date="Wed, 24 Junuary" userProfile={USER} />

    //     <InvoiceAction />

    //     <View style={styles.userSection}>
    //       <Image source={USER} style={styles.userImage} />
    //       <Text style={styles.userName}>John Doe</Text>
    //     </View>

    //     <View style={styles.mainSection}>
    //       <View style={styles.steps}>
    //         <Step style={styles.sm} />
    //         <ProfilePic />
    //         <Step style={styles.lg} />
    //         <Step style={styles.md} />
    //         <ProfilePic image={USER} />
    //         <Step style={styles.md} />
    //         <Step style={styles.md} />
    //         <ProfilePic />
    //         <Step style={styles.exl} />
    //         <ProfilePic />
    //       </View>

    //       <View style={styles.detailSection}>
    //         <View style={styles.spaceBtw}>
    //           <View>
    //             <Text style={[styles.semiBold, { marginVertical: 3 }]}>
    //               Payment
    //             </Text>
    //             <Text style={styles.border}>Facture</Text>
    //           </View>
    //           <Text style={styles.dhs}>130 Dhs</Text>
    //         </View>

    //         <Button
    //           title="5 Fevrier - 15:30"
    //           style={{ alignSelf: "center", marginVertical: 10 }}
    //           onPress={()=>router.push("(screens)/payment")}
    //         />

    //         <TouchableOpacity onPress={() => router.push("(screens)/service")}>
    //           <Text style={[styles.semiBold, { marginVertical: 15 }]}>
    //             Changing Break Pods
    //           </Text>
    //           <Text style={styles.border}>
    //             a simple break pad change and clearning of surroundings
    //           </Text>

    //           <Button
    //             title="5 Fevrier - 15:30"
    //             style={{
    //               alignSelf: "center",
    //               marginTop: hp(5),
    //               marginBottom: 10,
    //             }}
    //           />
    //         </TouchableOpacity>

           
    //           <TouchableOpacity onPress={()=>router.push("(screens)/invoice")} style={[styles.spaceBtwUser,{marginVertical:20}]}>
    //           <View>
    //             <Text style={[styles.semiBold, { marginVertical: 3 }]}>
    //               Invoice F 0929
    //             </Text>
    //             <Text style={styles.border}>20 January 15:30</Text>
    //           </View>
    //           <Image source={USER} style={styles.userImage} />
    //         </TouchableOpacity>

    //         <View style={[styles.spaceBtw, { marginTop: 13 }]}>
    //           <Text style={styles.mediumBold}>Total</Text>
    //           <Text style={styles.mediumBold}>1200.00 Dhs</Text>
    //         </View>

    //         <View style={[styles.spaceBtw, { marginTop: 7 }]}>
    //           <Text style={styles.mediumBold}>Remaining</Text>
    //           <Text style={[styles.mediumBold, { color: "red" }]}>
    //             700.00 Dhs
    //           </Text>
    //         </View>

    //         <View style={[styles.spaceBtw, { marginTop: 7 }]}>
    //           <Text style={styles.semiBold}>Certificate</Text>
    //           <Button title="Accident" style={styles.buttonSm} />
    //         </View>

    //         <View style={[styles.spaceBtw, { marginVertical: 20 }]}>
    //           <View>
    //             <Text style={[styles.semiBold, { marginVertical: 3 }]}>
    //               AXA Insurance
    //             </Text>
    //             <Text style={styles.border}>7 Jours Du 25 mar au 2 Avr</Text>
    //           </View>
    //           <Image source={BLUELOGO} style={styles.userImage} />
    //         </View>

    //         <Image source={MAPIMAGE} style={styles.mapImage} />

    //         <View
    //           style={[styles.spaceBtw, { marginTop: 7, marginBottom: hp(5) }]}
    //         >
    //           <Text style={styles.semiBold}>Carburant</Text>
    //           <Button title="Personal" style={styles.buttonSm} />
    //         </View>
    //       </View>
    //     </View>
    //   </ScrollView>
    // </SafeAreaView>
  );
}
export default Page
const Styles = (colors: any) =>
  StyleSheet.create({
    container: {
      flex: 1,
    },
    header: {
      backgroundColor: colors.primary,
      height: hp(30),
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "flex-end",
      paddingBottom: hp(5),
    },
    appNameContainer: {
      flex: 1,
      marginHorizontal: "3%",
      ...commonStyles.spaceBetween,
      // paddingHorizontal: "5%",
    },
    appName: {
      color: colors.background,
      fontFamily: FONT.SemiBold,
      fontSize: 25,
    },
    headingRow: {
      marginTop: hp(-3),
      backgroundColor: colors.background,
      paddingLeft: 15,
      borderWidth: 1,
      borderColor: "rgba(0,0,0,0.1)",
      paddingVertical: 10,
      borderRadius: 25,
    },
    headingText: {
      marginRight: 22,
    },
    isSelected: {
      color: colors.background,
      backgroundColor: colors.primary,
      paddingHorizontal: 15,
      paddingVertical: 2,
      borderRadius: 20,
    },
    userSection: {
      ...commonStyles.horizontalView,
      marginHorizontal: "5%",
      marginVertical: 20,
    },
    userImage: {
      height: 50,
      width: 50,
      borderRadius: 100,
    },
    userName: {
      fontFamily: FONT.SemiBold,
      fontSize: 20,
      marginLeft: 10,
    },
    mainSection: {
      marginHorizontal: "5%",
      flexDirection: "row",
    },
    steps: {
      // borderWidth:1,
      width: "15%",
      marginLeft:3,
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
      height: hp(12),
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
    spaceBtwUser: {
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
    buttonSm: {
      alignSelf: "center",
      marginTop: hp(2),
      marginBottom: 10,
      height: 30,
      width: 100,
    },
    mapImage: {
      width: "100%",
      height: 100,
      borderTopLeftRadius: 15,
      borderTopRightRadius: 15,
    },
  });
