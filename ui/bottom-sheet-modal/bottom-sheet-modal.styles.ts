import {StyleSheet} from "react-native";
import {globalStyles} from "../../global.styles";

export const styles = StyleSheet.create({
    modalHeaderText: {
        fontSize: globalStyles.fontSize.medium,
        textAlign: 'center',
    },
    modalHeader: {
        paddingHorizontal: globalStyles.spacing.xl,
        paddingTop: globalStyles.spacing.medium,
        paddingBottom: globalStyles.spacing.xl,
    },
});
