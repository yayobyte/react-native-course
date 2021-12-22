import {StyleSheet} from "react-native";
import {globalStyles} from "../../global.styles";

export const styles = StyleSheet.create({
    addContainer: {
        paddingHorizontal: globalStyles.spacing.xl,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: globalStyles.spacing.xl,
        alignItems: 'center',
    },
    goalInput: {
        flex: 9,
        borderWidth: 2,
        borderColor: '#FFF',
        borderBottomColor: "#E0E0E0",
        marginEnd: globalStyles.spacing.medium,
        paddingVertical: globalStyles.spacing.medium,
    },
    modalContainer: {
        justifyContent: 'flex-start',
        flexDirection: 'column',
    },
    buttonGroup: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: globalStyles.spacing.xl,
    },
});
