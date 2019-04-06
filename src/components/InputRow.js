import React from "react";
import { View } from "react-native";
import styles from "./styles";

const InputRow = ({children, direction = null}) => (
    <View style={[styles.inputRowContainer, direction === 'row' ? styles.inputRowDirection : null]}>
        {children}
    </View>
)
export default InputRow;