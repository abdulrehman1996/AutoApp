import { USER } from "@/src/asset";
import { BellIcon, MessageIcon, RNModal, Text } from "@/src/components";
import GradientButton from "@/src/components/reusable/GradientButton";
import { redShade, white } from "@/src/config/constants/Colors";
import { FONT, commonStyles } from "@/src/config/constants/constants";
import { JAWAZLOGO, LEFTCAR } from "@/src/feature/home/assets";
import {
  Appointment,
  Heading,
  InfoCard,
  InvoiceAction,
  LicenceModal,
  UserInfoModal,
} from "@/src/feature/home/components";
import { licenceBlur, users } from "@/src/feature/home/dummyData/data";
import { hp, wp } from "@/src/utils/Dimension";
import { Entypo, Feather } from "@expo/vector-icons";
import { useTheme } from "@react-navigation/native";
import { useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  Image,
  StyleSheet,
  Platform,
  View,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Page = () =>{
  const { colors } = useTheme();
  const styles = Styles(colors);
  const router = useRouter();
  const [licenseModal, setLicenseModal] = useState(false);
  const [userModal, setUserModal] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar translucent={true} />
      <ScrollView>
        <View style={styles.header}>
          <MessageIcon theme />
          <BellIcon theme />
        </View>

        <Image source={LEFTCAR} style={styles.carImage} />

        <View style={styles.userSection}>
          <Image source={USER} style={styles.userProfile} />

          <Text style={styles.userName}>Saif Din</Text>

          <View style={styles.horizontalView}>
            <Text style={styles.totalDhs}>5,394 Dhs</Text>
            <View style={styles.plusIcon}>
              <Feather name="plus" color={colors.primary} size={20} />
            </View>
          </View>

          <InvoiceAction />

          <Appointment date="Wed, 24 Junuary" userProfile={USER} />

          <View style={styles.cardView}>
            <InfoCard
              image={JAWAZLOGO}
              info="0 Dhs"
              onPress={() => router.navigate("(screens)/jawazbalance")}
            />
            <InfoCard title="Diesel" info="12.4 Dhs/L" />
          </View>

          <View style={styles.cardView}>
            <InfoCard title="Distance" info="0 KM" />
            <InfoCard title="Expenses" info="1,200 Dhs" />
          </View>

          <Heading title="My network" style={{ marginVertical: 10 }} />

          <ScrollView horizontal style={{ marginLeft: "5%" }}>
            {users?.map((item, index) => {
              return (
                <TouchableOpacity
                  key={item?.id}
                  onPress={() => setUserModal(true)}
                >
                  <Image source={item?.profile} style={styles.usersProfile} />
                </TouchableOpacity>
              );
            })}
          </ScrollView>

          <Heading title="Glovebox" style={{ marginTop: hp(4) }} />

          <ScrollView horizontal style={{ marginLeft: "5%" }}>
            {licenceBlur?.map((item, index) => {
              return (
                <TouchableOpacity
                  key={item?.id}
                  onPress={() => setLicenseModal(true)}
                >
                  <Image source={item?.profile} style={styles.licenceBlur} />
                </TouchableOpacity>
              );
            })}
          </ScrollView>
        </View>

        <GradientButton
          colors={redShade}
          text="I'm Broken Down"
          style={styles.brokenDown}
          textStyle={styles.brokenDownText}
          onPress={() => {}}
        />
        {/* </View> */}

        <UserInfoModal userModal={userModal} setUserModal={setUserModal} />

        <LicenceModal
          licenseModal={licenseModal}
          setLicenseModal={setLicenseModal}
          validTil="25/2/20"
          type="License B"
          onModifierPress={() => {}}
          onRenewPress={() => {}}
        />
      </ScrollView>
    </SafeAreaView>
  );
}
export default Page;
const Styles = (colors: any) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#F4F4F4",
    },
    header: {
      marginTop: hp(1),
      flexDirection: "row",
      justifyContent: "flex-end",
      paddingHorizontal: "3%",
      paddingVertical: 5,
    },
    carImage: {
      width: "90%",
      height: 120,
      marginTop: hp(5),
      alignSelf: "center",
    },
    userSection: {
      marginTop: hp(13),
      // borderWidth:2,
      backgroundColor: white,
      // height:300,
      width: "100%",
    },
    userProfile: {
      alignSelf: "center",
      height: 90,
      width: 90,
      borderRadius: 100,
      marginTop: hp(-5),
      borderWidth: 7,
      borderColor: white,
    },
    usersProfile: {
      alignSelf: "center",
      height: 70,
      width: 70,
      borderRadius: 100,
      marginRight: 10,
    },
    licenceBlur: {
      alignSelf: "center",
      height: hp(30),
      width: wp(90),
      marginRight: 10,
    },
    userName: {
      fontSize: 20,
      marginVertical: 7,
      fontFamily: FONT.SemiBold,
      textAlign: "center",
    },
    horizontalView: {
      ...commonStyles.spaceBetween,
      width: wp(35),
      alignSelf: "center",
    },
    plusIcon: {
      ...commonStyles.center,
      height: 28,
      width: 28,
      borderRadius: 100,
      backgroundColor: "yellow",
    },
    totalDhs: {
      color: colors.primary,
      fontFamily: FONT.SemiBold,
      letterSpacing: 0.4,
    },
    cardView: {
      ...commonStyles.spaceBetween,
      marginHorizontal: "5%",
      marginBottom: 10,
    },
    brokenDown: {
      alignSelf: "center",
      marginTop: 25,
      marginBottom: hp(11),
      height: hp(9),
      borderRadius: 12,
      borderBottomWidth:3,
      borderBottomColor:"#681700",
      borderBottomLeftRadius:0,
      borderBottomRightRadius:0,
    },
    brokenDownText: {
      fontFamily: FONT.Bold,
      fontSize: 19,
    },
  });
