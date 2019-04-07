import React from "react";
import { Text } from "react-native";
import styles from "./styles";

const ValidationText = ({text, style}) => {
    return text ? <Text style={[styles.validationText, style]}>{text}</Text> : null
}
export default ValidationText;