import {StyleSheet} from "react-native";
import {globalStyles, GRAY} from "../../global.styles";

export const styles = StyleSheet.create({
    goalItem: {
        backgroundColor: GRAY["0"],
        padding: globalStyles.spacing.large,
        marginVertical: 0,
        ...globalStyles.components.box.grayBorder,
    },
    goalText: {
        fontSize: globalStyles.fontSize.regular,
    }
})
