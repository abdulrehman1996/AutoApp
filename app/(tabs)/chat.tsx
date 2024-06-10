import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { useTheme } from "@react-navigation/native";
import { FONT, commonStyles } from "@/src/config/constants/constants";
import { hp } from "@/src/utils/Dimension";
import { AntDesign, Entypo, Feather, Ionicons } from "@expo/vector-icons";
import { GENIE } from "@/src/asset";
import { services } from "@/src/asset/dummyData";
import { white } from "@/src/config/constants/Colors";

export default function Chat() {
  const { colors } = useTheme();
  const styles = Styles(colors);
  return (
    <View style={styles.container}>
      <ScrollView style={{flex:1}}>
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

       
      </ScrollView>
      <View style={styles.inputContainerRow}>
          <View style={styles.inputContianer}>
            <TextInput style={styles.input} />
            <View
              style={{
                ...commonStyles.horizontalView,
                width: "20%",
                // borderWidth: 1,
              }}
            >
              <TouchableOpacity>
                <AntDesign name="picture" size={20} color="#D0D0D0" style={{marginRight:6}} />
              </TouchableOpacity>

              <TouchableOpacity>
                <Feather name="camera" size={20} color="#D0D0D0" />
              </TouchableOpacity>
            </View>
          </View>

          <TouchableOpacity style={styles.sendButton}>
            <Ionicons name="send" size={30} color={white} />
          </TouchableOpacity>
        </View>
    </View>
  );
};


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
    },
    cardImage: {
      height: 50,
      width: 50,
      alignSelf: "center",
    },
    inputContainerRow: {
      ...commonStyles.spaceBetween,
      paddingHorizontal:15,
      width: "100%",
    },
    inputContianer: {
      backgroundColor: "#FAF8F8",
      ...commonStyles.spaceBetween,
      borderRadius: 20,
      paddingHorizontal: "4%",
      width: "80%",
      overflow: "hidden",
    },
    input: {
      width: "80%",
      flex: 1,
      paddingVertical: 15,
      fontSize:15,
      fontFamily:FONT.Medium,
    },
    sendButton: {
      height: 50,
      width: 50,
      borderRadius: 100,
      backgroundColor: "#76CF84",
      ...commonStyles.center,
    },
  });
