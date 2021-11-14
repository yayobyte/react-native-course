import React from "react";
import {Text, View, StyleSheet, TouchableOpacity, ListRenderItemInfo} from "react-native";
import { globalStyles, GRAY } from '../global.styles';

type GoalItemProps = {
    itemData:  ListRenderItemInfo<{id: string, value: string}>,
    onDelete: (n: string) => void,
};

const styles = StyleSheet.create({
    goalItem: {
        backgroundColor: GRAY["100"],
        padding: 10,
        marginVertical: 10,
        ...globalStyles.components.box.shadow,
        ...globalStyles.components.box.grayBorder,
    }
})

export const GoalItem = ({ itemData, onDelete } : GoalItemProps) => {
    return (
        <TouchableOpacity activeOpacity={0.3} onPress={() => onDelete(itemData.item.id)}>
            <View style={styles.goalItem}>
                <Text>{itemData.item.value}</Text>
            </View>
        </TouchableOpacity>
    );
}
