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
        fontSize: 18
    }
});

export default styles