import React from "react";
import { View, Text } from "react-native";
import { LogoSVG } from "../assets";
import styles from "./styles";

const Logo = () => (
    <View style={styles.logoContainer}>
        <LogoSVG width={150} height={200} />
        <Text style={styles.logoText}>Assesment App Rinaldy Dwi Istanto</Text>
    </View>
)
export default Logo;