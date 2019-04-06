import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

class CreateVesselScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>CreateVesselScreen</Text>
            </View>
        );
    }
}
export default CreateVesselScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});