import React from "react";
import { TouchableHighlight, Text } from "react-native";
import { SearchSVG } from "../assets";
import colors from "../styles/colors";
import styles from "./styles";

const Button = ({onPress}) => (
    <TouchableHighlight 
        onPress={onPress}
        underlayColor={colors.greyTwo}
        style={styles.buttonContainer}    
    >
        <React.Fragment>
            <SearchSVG height={30} width={30} />
            <Text style={styles.buttonText}>Search</Text>
        </React.Fragment>
    </TouchableHighlight>
)
export default Button;