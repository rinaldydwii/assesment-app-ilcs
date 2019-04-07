import React, { Component } from "react";
import { connect } from "react-redux";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { VesselList } from "../../components";
import { AddSVG } from "../../assets";
import { getMVesselByTerminal } from "../../actions/mVesselAction";

class VesselListResultScreen extends Component {
    static navigationOptions = ({navigation}) => ({
        title: navigation.state.params.terminal,
        headerRight: (
            <TouchableOpacity
                onPress={() => navigation.navigate('CreateVessel', {terminal: navigation.state.params.terminal})}
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
        this.props.getMVessel(terminal)
        this.setState({terminal})
    }
    render() {
        return (
            <View style={styles.container}>
                    <VesselList 
                        mVessels={this.props.mVessels} 
                        state={this.props}
                        onRefresh={() => this.props.getMVessel(this.props.navigation.state.params.terminal)}
                        loading={this.props.loading}
                    />
            </View>
        );
    }
}

const mapStateToProps = state => {
    const { mVesselReducer } = state
    return mVesselReducer
}

const mapDispatchToProps = dispatch => ({
    getMVessel: (terminal) => dispatch(getMVesselByTerminal(terminal))
})

export default connect(mapStateToProps, mapDispatchToProps)(VesselListResultScreen);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20
    },
    addButtonContainer: {
        marginRight: 20,
    },
});