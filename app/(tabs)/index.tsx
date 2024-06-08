import { USER } from "@/src/asset";
import { BellIcon, MessageIcon, Text } from "@/src/components";
import GradientButton from "@/src/components/reusable/GradientButton";
import { white } from "@/src/config/constants/Colors";
import { FONT, commonStyles } from "@/src/config/constants/constants";
import { JAWAZLOGO, LEFTCAR } from "@/src/feature/home/assets";
import { Appointment, Heading, InfoCard, InvoiceAction } from "@/src/feature/home/components";
import { licenceBlur, users } from "@/src/feature/home/dummyData/data";
import { hp, wp } from "@/src/utils/Dimension";
import { Feather } from "@expo/vector-icons";
import { useTheme } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { Image, StyleSheet, Platform, View, ScrollView } from "react-native";

export default function HomeScreen() {
  const { colors } = useTheme();
  const styles = Styles(colors);
  return (
    <View style={styles.container}>
      <StatusBar translucent={true}  />
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
          <InfoCard image={JAWAZLOGO} info="0 Dhs" />
          <InfoCard title="Diesel" info="12.4 Dhs/L" />
        </View>

        <View style={styles.cardView}>
          <InfoCard title="Distance" info="0 KM" />
          <InfoCard title="Expenses" info="1,200 Dhs" />
        </View>

        <Heading title="My network" style={{marginVertical:10}}/>

        <ScrollView horizontal style={{marginLeft:'5%'}}>
          {
            users?.map((item,index)=>{
              return <Image source={item?.profile} key={item?.id} style={styles.usersProfile} />
            })
          }
        </ScrollView>

        <Heading title="Glovebox" style={{marginTop:hp(4)}}/>

        <ScrollView horizontal style={{marginLeft:'5%'}}>
          {
            licenceBlur?.map((item,index)=>{
              return <Image source={item?.profile} key={item?.id} style={styles.licenceBlur} />
            })
          }
        </ScrollView>
      </View>

      <GradientButton
          colors={["#FD8802", "#FA6706", "#F6350C"]}
          text="I'm Broken Down"
          style={styles.brokenDown}
          textStyle={styles.brokenDownText}
          onPress={()=>{}}
        />

      </ScrollView>
    </View>
  );
}

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
      height: 99,
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
      marginRight:10,
    },
    licenceBlur: {
      alignSelf: "center",
      height:hp(30),
      width:wp(90),
      marginRight:10,
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
    cardView:{
      ...commonStyles.spaceBetween,
      marginHorizontal:'5%',
      marginBottom:10,
    },
    brokenDown:{
      alignSelf:'center',
      marginTop:25,
      marginBottom:hp(11),
      height:hp(9),
      borderRadius:12,
    },
    brokenDownText:{
      fontFamily:FONT.Bold,
      fontSize:19,
    }
  });