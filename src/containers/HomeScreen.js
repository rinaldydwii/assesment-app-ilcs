import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Logo, Menu } from "../components";
import { UserSVG } from "../assets";
import colors from "../styles/colors";
import fonts from "../styles/fonts";

// TODO: GET NAME FROM API
class HomeScreen extends Component {
    static navigationOptions = {
        header: null
    }
    render() {
        return (
            <View style={styles.container}>
                <Logo name={"Nama Saya"} />
                <View style={styles.userContainer}>
                    <UserSVG width={30} height={30} />
                    <Text style={styles.userNameText}>Welcome, Nama Saya</Text>
                </View>
                <Menu />
            </View>
        );
    }
}
export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        paddingHorizontal: 20
    },
    userContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 5,
        paddingHorizontal: 10,
        marginTop: 30,
        borderColor: colors.greyOne,
        borderWidth: 1,
        borderRadius: 8,
        width: "100%"
    },
    userNameText: {
        marginLeft: 10,
        color: colors.black,
        ...fonts.openSans
    },
});