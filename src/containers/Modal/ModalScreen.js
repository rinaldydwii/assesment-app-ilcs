import React, { Component } from "react";
import { connect } from "react-redux";
import { View, Text, StyleSheet, ActivityIndicator } from "react-native";
import colors from "../../styles/colors";
import { Button } from "../../components";
import fonts from "../../styles/fonts";

class ModalScreen extends Component {
    render() {
        const { title, onPress } = this.props.navigation.state.params;
        return (
            <View style={styles.container}>
                <View style={styles.contentContainer}>
                    { this.props.loadingCreate ? <ActivityIndicator color={colors.black} size={30} /> : (
                        <React.Fragment>
                            <Text style={styles.titleText}>{ this.props.error ? this.props.error : title}</Text>
                            <Button 
                                title="OK" 
                                onPress={() => {this.props.navigation.goBack(); onPress();}}
                            />
                        </React.Fragment>
                    ) }
                </View>
            </View>
        );
    }
}

const mapStateToProps = state => {
    const { mVesselReducer } = state
    return mVesselReducer
}

export default connect(mapStateToProps)(ModalScreen);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.blackOverlay
    },
    contentContainer: {
        paddingVertical: 40,
        paddingHorizontal: 30,
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
});