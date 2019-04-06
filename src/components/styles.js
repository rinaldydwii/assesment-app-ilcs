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
        borderColor: "#bdbdbd",
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
    }
});

export default styles