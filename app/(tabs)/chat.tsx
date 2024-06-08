import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TextBase,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { useTheme } from "@react-navigation/native";
import { FONT, commonStyles } from "@/src/config/constants/constants";
import { hp } from "@/src/utils/Dimension";
import { AntDesign, Entypo } from "@expo/vector-icons";
import { GENIE } from "@/src/asset";
import { services } from "@/src/asset/dummyData";

const chat = () => {
  const { colors } = useTheme();
  const styles = Styles(colors);
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.iconStyles}>
          <AntDesign name="sharealt" color={colors.background} size={14} />
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.iconStyles, { backgroundColor: colors.background }]}
        >
          <Entypo name="cross" color={"#5879EE"} size={14} />
        </TouchableOpacity>
      </View>

      <View style={styles.genieContainer}>
        <Image source={GENIE} style={styles.genie} />
      </View>
      <Text style={styles.textBold}>Abracabra!</Text>
      <Text style={styles.textSemiBold}>
        Choose service, or text me a wish and i'll make it happen
      </Text>

      <View style={{ marginHorizontal: "5%" }}>
        <FlatList
          columnWrapperStyle={{
            justifyContent: "space-between",
            flexDirection: "row",
          }}
          //   contentContainerStyle={{justifyContent:'space-between',flexDirection:'row'}}
          numColumns={3}
          data={services}
          renderItem={({ item }) => {
            return (
              <View style={styles.serviceCard}>
                <Image source={item?.image} style={styles.cardImage} />
                <Text style={[styles.textSemiBold]}>{item?.title}</Text>
              </View>
            );
          }}
        />
      </View>

      <View style={styles.inputContainerRow}>
        <View style={styles.inputContianer}>

        </View>
        
      </View>
    </View>
  );
};

export default chat;

const Styles = (colors: any) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.background,
    },
    header: {
      ...commonStyles.spaceBetween,
      marginHorizontal: "5%",
      marginTop: hp(4),
    },
    iconStyles: {
      backgroundColor: "#5879EE",
      height: 30,
      width: 30,
      borderRadius: 100,
      justifyContent: "center",
      alignItems: "center",
      borderWidth: 0.5,
      borderColor: "rgba(0,0,0,0.2)",
    },
    genieContainer: {
      height: hp(20),
      justifyContent: "center",
      alignItems: "center",
      marginTop: 25,
    },
    genie: {
      resizeMode: "center",
      alignSelf: "center",
      width: 220,
      // marginTop:hp(-10)
    },
    textBold: {
      marginTop: hp(4),
      color: "#FA6706",
      fontSize: 25,
      fontFamily: FONT.Bold,
      textAlign: "center",
    },
    textSemiBold: {
      fontFamily: FONT.SemiBold,
      fontSize: 14,
      textAlign: "center",
      marginHorizontal: "5%",
      marginTop: hp(2.5),
    },
    serviceCard: {
      justifyContent: "center",
      alignItems: "center",
      marginBottom: 10,
      width: "31.5%",
      borderRadius: 15,
      borderWidth: 0.5,
      paddingVertical: 10,
      borderColor: "rgba(0,0,0,0.1)",
      //   ...commonStyles.center,
    },
    cardImage: {
      height: 50,
      width: 50,
      alignSelf: "center",
    },
    inputContainerRow: {
      flexDirection: "row",
    },
    inputContianer: {
      backgroundColor: "#FAF8F8",
    },
  });
