import {StyleSheet} from "react-native";

const PADDING_HORIZONTAL = 24;

export const styles = StyleSheet.create({
    addContainer: {
        paddingHorizontal: PADDING_HORIZONTAL,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 26,
        alignItems: 'center',
    },
    goalInput: {
        flex: 9,
        borderWidth: 2,
        borderColor: '#FFF',
        borderBottomColor: "#E0E0E0",
        marginEnd: 8,
        paddingVertical: 6,
    },
    modalContainer: {
        justifyContent: 'flex-start',
        flexDirection: 'column',
    },
    buttonGroup: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: PADDING_HORIZONTAL,
    },
});
