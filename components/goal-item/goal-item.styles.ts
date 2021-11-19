import {StyleSheet} from "react-native";
import {globalStyles, GRAY} from "../../global.styles";

export const styles = StyleSheet.create({
    goalItem: {
        backgroundColor: GRAY["100"],
        padding: 10,
        marginVertical: 10,
        ...globalStyles.components.box.shadow,
        ...globalStyles.components.box.grayBorder,
    }
})
