import React from "react";
import {Text, View, TouchableOpacity, ListRenderItemInfo} from "react-native";
import {styles} from "./goal-item.styles";

type GoalItemProps = {
    itemData:  ListRenderItemInfo<{id: string, value: string}>,
    onDelete: (n: string) => void,
};

export const GoalItem = ({ itemData, onDelete } : GoalItemProps) => {
    return (
        <TouchableOpacity activeOpacity={0.3} onPress={() => onDelete(itemData.item.id)}>
            <View style={styles.goalItem}>
                <Text>{itemData.item.value}</Text>
            </View>
        </TouchableOpacity>
    );
}
