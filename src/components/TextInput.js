import React from "react";
import { TextInput } from "react-native";
import styles from "./styles";
import colors from "../styles/colors";

const TextInputCustom = ({placeholder, onChangeText}) => (
    <TextInput 
        placeholder={placeholder}
        style={styles.textInput}
        onChangeText={onChangeText}
        underlineColorAndroid={colors.greyTwo}
    />
)
export default TextInputCustom;