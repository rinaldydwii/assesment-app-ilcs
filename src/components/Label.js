import React from "react";
import { Text } from "react-native";
import styles from "./styles";

const Label = ({label}) => (
    <Text style={styles.labelText}>{label}</Text>
)
export default Label;