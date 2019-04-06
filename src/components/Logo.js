import React from "react";
import { View, Text } from "react-native";
import { LogoSVG } from "../assets";
import styles from "./styles";

const Logo = ({size}) => (
    <View style={styles.logoContainer}>
        <LogoSVG width={size ? size : 150} height={size ? size * 1.25 : 200} />
        <Text style={styles.logoText}>Assesment App Rinaldy Dwi Istanto</Text>
    </View>
)
export default Logo;