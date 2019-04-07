import React, { Component } from "react";
import { connect } from "react-redux";
import { View, StyleSheet, Picker } from "react-native";
import { Button, InputRow, Label, ValidationText } from "../../components";
import { SearchSVG } from "../../assets";
import { getTerminal } from "../../actions/terminalAction";

class VesselSearchScreen extends Component {
    static navigationOptions = {
        title: "Vessel Search"
    }
    constructor() {
        super();
        this.state = {
            terminal: null,
            error: ""
        }
    }
    handleSubmit = () => {
        if (this.state.terminal) 
            this.props.navigation.navigate('VesselListResult', {terminal: this.state.terminal}) 
        else this.setState({error: "Terminal harus dipilih"})
    }
    handlePickerChange = (terminal) => {
        let error = ""
        if (terminal === null)
            error = "Terminal harus dipilih"
        this.setState({terminal, error})
    }
    componentDidMount() {
        this.props.getTerminal();
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
                        onValueChange={this.handlePickerChange}
                    >
                        <Picker.Item label="Pilih Terminal" value={null} />
                        { this.props.terminals.map((item, index) => (
                            <Picker.Item key={index} label={item.terminal} value={item.terminal} />
                        ))}
                    </Picker>
                </InputRow>
                <Button 
                    icon={(size) => <SearchSVG width={size} height ={size} />}
                    title="Search" 
                    onPress={this.handleSubmit} 
                />
                <ValidationText text={this.state.error} />
            </View>
        );
    }
}

const mapStateToProps = state => {
    const { terminalReducer } = state
    return terminalReducer
}

const mapDispatchToProps = dispatch => ({
    getTerminal: () => dispatch(getTerminal())
})

export default connect(mapStateToProps, mapDispatchToProps)(VesselSearchScreen);

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