import {FlatList} from "react-native";
import {styles} from "./goal-list.styles";
import React from "react";
import {GoalItem} from "../../components/goal-item/goal-item";

export type GoalListViewProps = {
    courseGoals: Array<{id: string, value: string}>
    onDelete: (f: string) => void,
};

export const GoalListView = ({ courseGoals, onDelete }: GoalListViewProps) => {
    return (
        <FlatList
            style={styles.goalList}
            data={courseGoals}
            keyExtractor={(item) => item.id}
            renderItem={(itemData) => <GoalItem itemData={itemData} onDelete={onDelete} />}
        />
    );
}
