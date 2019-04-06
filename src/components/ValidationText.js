import React from "react";
import { Text } from "react-native";
import styles from "./styles";

const ValidationText = ({text}) => (
    <Text style={styles.validationText}>{text}</Text>
)
export default ValidationText;