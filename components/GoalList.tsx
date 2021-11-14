import React from "react";
import {FlatList, StyleSheet} from "react-native";
import {GoalItem} from "./GoalItem";

const styles = StyleSheet.create({
    goalList: {
        paddingHorizontal: 24,
    },
});

export type GoalListProps = {
    courseGoals: Array<{id: string, value: string}>
};

export const GoalList = ({ courseGoals }: GoalListProps) => (
    <FlatList
        style={styles.goalList}
        data={courseGoals}
        keyExtractor={(item) => item.id}
        renderItem={(itemData) => <GoalItem value={itemData.item.value} />}
    />
);

