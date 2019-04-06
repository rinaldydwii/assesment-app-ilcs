import React from "react";
import { Text } from "react-native";
import styles from "./styles";

const Label = ({label, direction = null}) => (
    <Text style={[styles.labelText, direction === 'row' ? styles.labelRowDirection : null]}>{label}</Text>
)
export default Label;