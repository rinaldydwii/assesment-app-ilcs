import React from "react";
import { TouchableHighlight, Text } from "react-native";
import { SearchSVG } from "../assets";
import colors from "../styles/colors";
import styles from "./styles";

const Button = ({title, icon, onPress}) => (
    <TouchableHighlight 
        onPress={onPress}
        underlayColor={colors.greyTwo}
        style={styles.buttonContainer}    
    >
        <React.Fragment>
            {icon ? icon(30) : null}
            <Text style={styles.buttonText}>{title}</Text>
        </React.Fragment>
    </TouchableHighlight>
)
export default Button;