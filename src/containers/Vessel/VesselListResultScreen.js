import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

class VesselListResultScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>VesselListResultScreen</Text>
            </View>
        );
    }
}
export default VesselListResultScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});