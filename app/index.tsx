/* eslint-disable prettier/prettier */
// eslint-disable-next-line prettier/prettier
import { StatusBar } from "expo-status-bar";
import React from "react";
import { Text, View } from "react-native";

const Page = () => {

  return (<View className="flex-1 items-center justify-center bg-amber-400">
    <Text>Great Day.Open up App.js to start working on your app!</Text>
    <StatusBar style="auto" />
  </View>);
};

export default Page;

// import { useAuth } from "@clerk/clerk-expo";
// import { Redirect } from "expo-router";
//
// const Page = () => {
//   const { isSignedIn } = useAuth();
//
//   if (isSignedIn) return <Redirect href="/(root)/(tabs)/home" />;
//
//   return <Redirect href="/(auth)/welcome" />;
// };
//
// export default Page;
