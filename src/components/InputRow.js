import React from "react";
import { View } from "react-native";
import styles from "./styles";

const InputRow = ({children}) => (
    <View style={styles.inputRowContainer}>
        {children}
    </View>
)
export default InputRow;