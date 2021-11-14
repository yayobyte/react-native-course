import React from "react";
import {Text, View, StyleSheet} from "react-native";
import { globalStyles, GRAY } from '../global.styles';

type GoalItemProps = { value: string};

const styles = StyleSheet.create({
    goalItem: {
        backgroundColor: GRAY["100"],
        padding: 10,
        marginVertical: 10,
        ...globalStyles.components.box.shadow,
        ...globalStyles.components.box.grayBorder,
    }
})

export const GoalItem = ({ value } : GoalItemProps) => (
    <View style={styles.goalItem}><Text>{value}</Text></View>
);
