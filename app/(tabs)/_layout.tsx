import { TabBarIcon } from "@/src/components/navigation/TabBarIcon";
import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Image } from "react-native";
import { CHATICON } from "@/src/asset";
import { useTheme } from "@react-navigation/native";
export default function TabLayout() {
  const {colors} = useTheme()
  return (
    <Tabs screenOptions={{headerShown:false}}>
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, focused, size }) => (
            <Ionicons name={"car"} color={focused ?colors.primary : "#C4CEF3" } size={30} />
          ),
        }}
      />
      <Tabs.Screen
        name="chat"
        options={{
          title: "Chat",
          tabBarStyle:{display:'none'},
          tabBarIcon: ({ color, focused, size }) => (
            <Image source={CHATICON} style={{resizeMode:'contain',width:50,marginTop:1.5}}/>
          ),
        }}
      />
      <Tabs.Screen
        name="wall"
        options={{
          title: "Walls",
          tabBarIcon: ({ color, focused }) => (
            <MaterialCommunityIcons
              name={focused ? "signal-cellular-3" : "signal-cellular-outline"}
              color={focused ? colors.primary : "#C4CEF3"}
              size={30}
            />
          ),
        }}
      />
    </Tabs>
  );
}
