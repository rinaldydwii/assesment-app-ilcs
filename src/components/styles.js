import { StyleSheet } from 'react-native';
import fonts from '../styles/fonts';
import colors from '../styles/colors';
const styles = StyleSheet.create({
    // LOGO
    logoContainer: {
        alignItems: "center",
    },
    logoText: {
        ...fonts.openSans,
        color: colors.black,
        fontSize: 16
    },
    // MENU
    menuContainer: {
        marginTop: 15,
        width: "100%"
    },
    menuItemContainer: {
        borderColor: colors.greyOne,
        borderWidth: 1,
        borderRadius: 8,
        alignItems: 'center',
        paddingHorizontal: 5,
        paddingTop: 5,
        paddingBottom: 10,
        margin: 5
    },
    menuItemText: {
        color: colors.black,
        ...fonts.openSans,
        marginTop: 5
    },
    // BUTTON
    buttonContainer: {
        paddingHorizontal: 15,
        paddingVertical: 6,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.greyOne,
        borderRadius: 40,
    },
    buttonText: {
        color: colors.black,
        ...fonts.openSans
    },
    // INPUT ROW
    inputRowContainer: {
        marginBottom: 15,
        width: "100%"
    },
    inputRowDirection: {flexDirection: 'row', marginBottom: 5},
    // LABEL
    labelText: {
        ...fonts.openSans,
        color: colors.black,
    },
    labelRowDirection: {
        width: 100,
    },
    // VESSEL
    vesselItemContainer: {
        padding: 10,
        borderColor: colors.greyOne,
        borderWidth: 1,
        borderRadius: 5,
        flexDirection: 'row',
        marginBottom: 10
    },
    vesselInfoContainer: {
        flex: 1
    },
    vesselNameText: {
        ...fonts.openSansSemiBold,
        fontSize: 16,
        color: colors.black
    },
    vesselDataText: {
        ...fonts.openSansSemiBold,
        color: colors.black
    },
    // DATE PICKER
    datePickerContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 3,
        paddingVertical: 8
    },
    datePickerText: {
        flex: 1,
        padding: 5,
        color: colors.black,
        ...fonts.openSans,
        borderBottomColor: colors.black,
        borderBottomWidth: 1,
        marginRight: 10
    },
    datePickerPlaceholderText: {
        color: colors.greyTwo,
    },
    // TEXT INPUT
    textInput: {
        flex: 1
    },
});

export default styles