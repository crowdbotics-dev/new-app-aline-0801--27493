import { Pressable } from "react-native";
import React from "react";
import { View, StyleSheet } from "react-native";

const Untitled10 = ({
  navigation
}) => {
  return <View style={_styles.pywPLscR}>
      <Pressable onPress={() => navigation.navigate("Untitled9")} style={_styles.QTcRZtvs}><View style={_styles.VsJCsuBy}></View></Pressable></View>;
};

export default Untitled10;

const _styles = StyleSheet.create({
  pywPLscR: {
    backgroundColor: "#f0f0f1",
    padding: 10,
    position: "relative",
    height: "100%"
  },
  VsJCsuBy: {
    left: 116,
    top: 210,
    position: "absolute",
    height: 60,
    width: 140,
    backgroundColor: "#E4E4E4",
    borderRadius: 0,
    color: "#777777"
  },
  QTcRZtvs: {
    position: "unset"
  }
});