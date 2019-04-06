import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import { Logo } from "../components";

class SplashScreen extends Component {
    loadApp() {
        return setTimeout(() => this.props.navigation.navigate('App'), 1000);
    }
    componentDidMount() {
        this.loadApp();
    }
    render() {
        return (
            <View style={styles.container}>
                <Logo />
            </View>
        );
    }
}
export default SplashScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});