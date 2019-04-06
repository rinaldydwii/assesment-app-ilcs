import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

class VesselSearchScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>VesselSearchScreen</Text>
            </View>
        );
    }
}
export default VesselSearchScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});