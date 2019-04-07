import React, { Component } from "react";
import { connect } from "react-redux";
import { View, Text, StyleSheet } from "react-native";
import { Logo, Menu } from "../components";
import { UserSVG } from "../assets";
import colors from "../styles/colors";
import fonts from "../styles/fonts";
import { getName } from "../actions/nameAction";

class HomeScreen extends Component {
    static navigationOptions = {
        header: null
    }
    componentDidMount() {
        this.props.getName();
    }
    render() {
        return (
            <View style={styles.container}>
                <Logo name={this.props.name} />
                <View style={styles.userContainer}>
                    <UserSVG width={30} height={30} />
                    <Text style={styles.userNameText}>{`Welcome, ${this.props.name}`}</Text>
                </View>
                <Menu />
            </View>
        );
    }
}

const mapStateToProps = state => {
    const { nameReducer } = state
    return nameReducer
}

const mapDispatchToProps = dispatch => ({
    getName: () => dispatch(getName())
})

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        paddingHorizontal: 20
    },
    userContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 5,
        paddingHorizontal: 10,
        marginTop: 30,
        borderColor: colors.greyOne,
        borderWidth: 1,
        borderRadius: 8,
        width: "100%"
    },
    userNameText: {
        marginLeft: 10,
        color: colors.black,
        ...fonts.openSans
    },
});