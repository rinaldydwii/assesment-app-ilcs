import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import colors from "../../styles/colors";
import { CloseSVG, SaveSVG } from "../../assets";
import { InputRow, Label, Button, TextInput, DatePicker } from "../../components";
import fonts from "../../styles/fonts";

class CreateVesselScreen extends Component {
    constructor() {
        super()
        this.state = {
            vessel_name: "",
            voyage_in: "",
            voyage_out: "",
            eta: "",
            etb: "",
            etd: ""

        }
    }
    
    render() {
        console.log(this.state)
        return (
            <View style={styles.container}>
                <View style={styles.contentContainer}>
                    <Text style={styles.titleText}>Create Vessel</Text>
                    <TouchableOpacity 
                        onPress={() => this.props.navigation.goBack()}
                        style={styles.closeButtonContainer}    
                    >
                        <CloseSVG width={24} height={24} />
                    </TouchableOpacity>
                    <View style={styles.formContainer}>
                        <InputRow direction="row">
                            <Label direction="row" label="Vessel Name" />
                            <TextInput 
                                placeholder="Enter Vessel Name"
                                value={this.state.vessel_name}
                                onChangeText={(vessel_name) => this.setState({vessel_name})}
                            />
                        </InputRow>
                        <InputRow direction="row">
                            <Label direction="row" label="Voyage In" />
                            <TextInput 
                                placeholder="Enter Voyage In"
                                value={this.state.voyage_in}
                                onChangeText={(voyage_in) => this.setState({voyage_in})}
                            />
                        </InputRow>
                        <InputRow direction="row">
                            <Label direction="row" label="Voyage Out" />
                            <TextInput 
                                placeholder="Enter Voyage Out"
                                value={this.state.voyage_out}
                                onChangeText={(voyage_out) => this.setState({voyage_out})}
                            />
                        </InputRow>
                        <InputRow direction="row">
                            <Label direction="row" label="ETA" />
                            <DatePicker 
                                value={this.state.eta}
                                onValueChange={(eta) => this.setState({eta})}
                            />
                        </InputRow>
                        <InputRow direction="row">
                            <Label direction="row" label="ETB" />
                            <DatePicker 
                                value={this.state.etb}
                                onValueChange={(etb) => this.setState({etb})}
                            />
                        </InputRow>
                        <InputRow direction="row">
                            <Label direction="row" label="ETD" />
                            <DatePicker 
                                value={this.state.etd}
                                onValueChange={(etd) => this.setState({etd})}
                            />
                        </InputRow>
                    </View>
                    <Button icon={(size) => <SaveSVG width={size} height ={size} />} title="Save" />
                </View>
            </View>
        );
    }
}
export default CreateVesselScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.blackOverlay
    },
    contentContainer: {
        // flex: 1,
        paddingVertical: 40,
        paddingHorizontal: 50,
        position: 'relative',
        width: "100%",
        backgroundColor: colors.white,
    },
    titleText: {
        ...fonts.openSansSemiBold,
        color: colors.black,
        fontSize: 16,
        marginBottom: 20
    },
    closeButtonContainer: {
        position: 'absolute',
        top: 20,
        right: 20
    },
    formContainer: {
        marginBottom: 20
    }
});