// import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { FONT } from "@/src/config/constants/constants";
import { themeLight } from "@/src/config/constants/themes";
import { ThemeProvider } from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import "react-native-reanimated";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded] = useFonts({
    [FONT.Regular]: require("../assets/fonts/Poppins-Regular.ttf"),
    [FONT.Medium]: require("../assets/fonts/Poppins-Medium.ttf"),
    [FONT.Bold]: require("../assets/fonts/Poppins-Bold.ttf"),
    [FONT.SemiBold]: require("../assets/fonts/Poppins-SemiBold.ttf"),
    [FONT.ExtraBold]: require("../assets/fonts/Poppins-ExtraBold.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    //@ts-ignore
    <ThemeProvider value={themeLight}>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen
          name="screens/invoice"
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="screens/jawazbalance"
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="screens/service"
          options={{ headerShown: false }}
        />
        <Stack.Screen name="+not-found" />
      </Stack>
    </ThemeProvider>
  );
}
