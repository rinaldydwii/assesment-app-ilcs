import React, { Component } from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { VesselList } from "../../components";
import { AddSVG } from "../../assets";

class VesselListResultScreen extends Component {
    static navigationOptions = ({navigation}) => ({
        title: navigation.state.params.terminal,
        headerRight: (
            <TouchableOpacity
                onPress={() => navigation.navigate('CreateVessel')}
                style={styles.addButtonContainer}
            >
                <AddSVG width={24} height={24}  />
            </TouchableOpacity>
        )
    })
    constructor() {
        super();
        this.state = {
            terminal: null
        }
    }
    componentDidMount() {
        const terminal = this.props.navigation.state.params.terminal
        this.setState({terminal})
    }
    render() {
        return (
            <View style={styles.container}>
                <VesselList />
            </View>
        );
    }
}
export default VesselListResultScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20
    },
    addButtonContainer: {
        marginRight: 20,
    }
});