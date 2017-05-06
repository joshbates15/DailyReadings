import React from "react";
import { Dimensions } from "react-native";

//Thanks to knowbody for this - https://github.com/knowbody/react-native-text
//Thanks to DaniAkash for this - https://github.com/DaniAkash/react-native-responsive-dimensions

const { width, height } = Dimensions.get('window');
const realWidth = height > width ? width : height;

export const responsiveFontSize = (f) => {
  return Math.round(f * realWidth / 375);
}

export const responsiveHeight = (h) => {
  return height * (h / 100);
}

export const responsiveWidth = (w) => {
  return width * (w / 100);
}