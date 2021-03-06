import React, { Component } from "react";
import { connect } from "react-redux";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import colors from "../../styles/colors";
import { CloseSVG, SaveSVG } from "../../assets";
import { InputRow, Label, Button, TextInput, DatePicker, ValidationText } from "../../components";
import fonts from "../../styles/fonts";
import { createMVessel } from "../../actions/mVesselAction";

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
    handleSubmit = () => {
        const { vessel_name, eta, etb } = this.state
        if (vessel_name && eta && etb) {
            const state = this.state
            const m_vessel = {
                vessel_name: state.vessel_name,
                eta: state.eta,
                etb: state.etb,
                terminal: this.props.navigation.state.params.terminal,
                name: "Rinaldy Dwi Istanto"
            }

            if (state.voyage_in) m_vessel['voyage_in'] = state.voyage_in
            if (state.voyage_out) m_vessel['voyage_out'] = state.voyage_out
            if (state.etd) m_vessel['etd'] = state.etd

            this.props.createMVessel(m_vessel)
            this.props.navigation.navigate('Modal', {title: "Berhasil menambahkan", onPress: () => this.props.navigation.goBack()})
        } else {
            if (!vessel_name) this.setState({error_vessel_name: "Nama vessel harus diisi"})
            if (!eta) this.setState({error_eta: "ETA harus diisi"})
            if (!etb) this.setState({error_etb: "ETB harus diisi"})
        }
    }
    render() {
        const { error_vessel_name, error_eta, error_etb } = this.state
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
                                onChangeText={(vessel_name) => this.setState({vessel_name, error_vessel_name: ""})}
                            />
                        </InputRow>
                        <ValidationText text={error_vessel_name} style={{marginTop:0, marginLeft: 110}} />
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
                                onValueChange={(eta) => this.setState({eta, error_eta: ""})}
                            />
                        </InputRow>
                        <ValidationText text={error_eta} style={{marginTop:0, marginLeft: 110}} />
                        <InputRow direction="row">
                            <Label direction="row" label="ETB" />
                            <DatePicker 
                                value={this.state.etb}
                                onValueChange={(etb) => this.setState({etb, error_etb: ""})}
                            />
                        </InputRow>
                        <ValidationText text={error_etb} style={{marginTop:0, marginLeft: 110}} />
                        <InputRow direction="row">
                            <Label direction="row" label="ETD" />
                            <DatePicker 
                                value={this.state.etd}
                                onValueChange={(etd) => this.setState({etd})}
                            />
                        </InputRow>
                    </View>
                    <Button 
                        icon={(size) => <SaveSVG width={size} height ={size} />} 
                        title="Save" 
                        onPress={this.handleSubmit}
                    />
                </View>
            </View>
        );
    }
}

const mapStateToProps = state => {
    const { mVesselReducer } = state
    return mVesselReducer
}

const mapDispatchToProps = dispatch => ({
    createMVessel: (m_vessel) => dispatch(createMVessel(m_vessel))
})

export default connect(mapStateToProps, mapDispatchToProps)(CreateVesselScreen);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.blackOverlay
    },
    contentContainer: {
        paddingVertical: 40,
        paddingHorizontal: 50,
        marginHorizontal: 20,
        position: 'relative',
        alignItems: 'center',
        borderRadius: 10,
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