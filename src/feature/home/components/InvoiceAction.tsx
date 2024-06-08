import { StyleSheet,  View } from "react-native";
import React from "react";
import { commonStyles } from "@/src/config/constants/constants";
import { AntDesign, Entypo } from "@expo/vector-icons";
import { useTheme } from "@react-navigation/native";
import { hp } from "@/src/utils/Dimension";
import { Text } from "@/src/components";

const InvoiceAction = () => {
  const { colors } = useTheme();
  return (
    <View style={styles.horizontalView}>
      <View style={styles.row}>
        <View style={styles.icon}>
            <AntDesign name="exclamation" color={colors.border} />
        </View> 
        <Text style={styles.text}>Invoice awaiting your action</Text>
      </View> 
      <Entypo name="chevron-small-right" color={colors.text} size={35}/>
    </View>
  );
};

export default InvoiceAction;

const styles = StyleSheet.create({
  horizontalView: {
    ...commonStyles.spaceBetween,
    marginTop: hp(3),
    paddingVertical: 8,
    paddingHorizontal:8,
    marginHorizontal:"5%",
    borderRadius:10 ,  
    borderWidth:0.5,
    borderColor:"rgba(0,0,0,0.1)"
  },  
  row: {
    ...commonStyles.horizontalView,
  },
  icon: {
    ...commonStyles.center,
    height: 22,
    width: 22,
    borderRadius: 100,
    backgroundColor: "red",
    marginRight:5,
    marginLeft:5,
  },
  text:{
    // fontSize:12
    marginLeft:5,
  }
});
