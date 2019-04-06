import React, { Component } from "react";
import { View, StyleSheet, Picker } from "react-native";
import { Button, InputRow, Label } from "../../components";

class VesselSearchScreen extends Component {
    static navigationOptions = {
        title: "Vessel Search"
    }
    constructor() {
        super();
        this.state = {
            terminal: null
        }
    }
    render() {
        return (
            <View style={styles.container}>
                <InputRow>
                    <Label label="Terminal" /> 
                    <Picker
                        style={styles.pickerContainer}
                        selectedValue={this.state.terminal}
                        mode="dropdown"
                        onValueChange={(terminal) => this.setState({terminal})}
                    >
                        <Picker.Item label="Pilih Terminal" value="Pilih Terminal" />
                        <Picker.Item label="Terminal Seluruh Indonesia" value="Terminal Seluruh Indonesia" />
                    </Picker>
                </InputRow>
                <Button onPress={() => this.props.navigation.navigate('VesselListResult', {terminal: this.state.ter})} />
            </View>
        );
    }
}
export default VesselSearchScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        padding: 20
    },
    pickerContainer: {
        width: "100%",
    }
});