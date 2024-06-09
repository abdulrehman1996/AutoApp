import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { RNModal } from "@/src/components";
import { useTheme } from "@react-navigation/native";
import Heading from "./Heading";
import { Entypo } from "@expo/vector-icons";
import { FONT, commonStyles } from "@/src/config/constants/constants";
import { LICENCE, LICENCEBLUR } from "../assets";
import { hp, wp } from "@/src/utils/Dimension";
import GradientButton from "@/src/components/reusable/GradientButton";

interface LicenceModalProps {
  licenseModal: boolean;
  setLicenseModal: (visible: boolean) => void;
  image?: any;
  validTil?: string;
  type?: string;
  onRenewPress?: () => void;
  onModifierPress?: () => void;
}
const LicenceModal = ({
  licenseModal,
  setLicenseModal,
  image,
  validTil,
  type,
  onRenewPress,
  onModifierPress,
}: LicenceModalProps) => {
  const { colors } = useTheme();
  const styles = Styles(colors);
  return (
    <RNModal
      style={styles.licenceModal}
      visible={licenseModal}
      setVisible={setLicenseModal}
    >
      <View style={styles.licenceModalView}>
        <Heading
          title="Driving License"
          style={{ width: "100%" }}
          rightView={
            <TouchableOpacity style={styles.iconStyles} onPress={()=>setLicenseModal(false)}>
              <Entypo name="cross" color={"#5879EE"} size={14} />
            </TouchableOpacity>
          }
        />

        <View style={styles.licenseImageContainer}>
          <Image
            source={LICENCE}
            style={{ height: 180, resizeMode: "contain" }}
          />
        </View>

        <View style={styles.licenseDetailContainer}>
          <View style={styles.licenseCard}>
            <Text style={styles.titleMedium}>{validTil}</Text>
            <Text>Valid until</Text>
          </View>
          <View style={styles.licenseCard}>
            <Text style={styles.titleMedium}>{type}</Text>
            <Text>Type</Text>
          </View>
        </View>

        <GradientButton
          colors={["#30D2D5", "#42D6AA", "#28DBA5"]}
          text="Renew my License"
          textStyle={{fontSize:17}}
          style={styles.button}
          onPress={onRenewPress}
        />
        
        <GradientButton
          colors={["rgba(0,0,0,0.05)", "#ffffff",]}
          text="Modifier"
          textStyle={{fontSize:17,color:"yellow"}}
          style={[styles.button,{marginTop:13,borderColor:'yellow',borderWidth:2,}]}
          onPress={onRenewPress}
        />

        
      </View>
    </RNModal>
  );
};

export default React.memo(LicenceModal);

const Styles = (colors: any) =>
  StyleSheet.create({
    licenceModal: {
      backgroundColor: "transparent",
    },
    licenceModalView: {
      // height: hp(20),
      width: "100%",
      backgroundColor: "white",
      borderRadius: 15,
      alignItems: "center",
      paddingVertical: 25,
      paddingHorizontal: "5%",

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
    licenseImageContainer: {
      paddingVertical: 25,
      ...commonStyles.center,
      overflow: "hidden",
    },
    licenseDetailContainer: {
      ...commonStyles.spaceBetween,
      width: "100%",
      marginBottom:hp(6)
    },
    licenseCard: {
      ...commonStyles.center,
      ...commonStyles.shadow_2,
      borderWidth: 0.5,
      borderColor: "rgba(0,0,0,0.2)",
      width: "46%",
      paddingVertical: hp(2.5),
      borderRadius: 10,
      backgroundColor: "white",
    },
    titleMedium: {
      // fontSize:16,
      fontFamily: FONT.Medium,
    },
    button:{
        width:wp(80),
        alignSelf:'center',
        borderRadius:10,
        height:hp(8),
        backgroundColor: "white",
        ...commonStyles.shadow_2,
    }
  });
