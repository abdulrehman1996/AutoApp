import { StyleSheet } from "react-native";
import { black } from "./Colors";
export const FONT = {
    Regular: 'Poppins-Regular',
    Medium: 'Poppins-Medium',
    Bold: 'Poppins-Bold',
    SemiBold: 'Poppins-SemiBold',
    ExtraBold: 'Poppins-ExtraBold',
  };
  export const commonStyles = StyleSheet.create({
    horizontalView: {
      alignItems: 'center',
      flexDirection: 'row',
    },
    spaceBetween: {
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    center: {
      alignItems: 'center',
      justifyContent: 'center',
    },
    shadow_5: {
      elevation: 5,
      shadowColor: black,
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
    },
    shadow_3: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 0.4,
        },
        shadowOpacity: 0.1,
        shadowRadius: 1.84,
        
        elevation: 5,
    },
    shadow_10: {
      elevation: 10,
      shadowColor: black,
      shadowOffset: {
        width: 0,
        height: 5,
      },
      shadowOpacity: 0.34,
      shadowRadius: 6.27,
    },
    shadow_2: {
      elevation: 6,
      shadowColor: 'rgba(0,0,0,0.13)',
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity:1,
      shadowRadius: 1.41,
    },
    noPadding: {
      paddingTop: 0,
      paddingLeft: 0,
      paddingRight: 0,
      paddingBottom: 0,
      paddingStart: 0,
      paddingEnd: 0,
    },
    noMargin: {
      marginTop: 0,
      marginLeft: 0,
      marginRight: 0,
      marginBottom: 0,
      marginStart: 0,
      marginEnd: 0,
    },
  });
  