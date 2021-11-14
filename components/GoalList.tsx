import React from "react";
import {FlatList, StyleSheet} from "react-native";
import {GoalItem} from "./GoalItem";

const styles = StyleSheet.create({
    goalList: {
        paddingTop: 26,
        paddingHorizontal: 24,
        height: '100%'
    },
});

export type GoalListProps = {
    courseGoals: Array<{id: string, value: string}>
    setCourseGoals: React.Dispatch<React.SetStateAction<{id: string, value: string}[]>>
};

export const GoalList = ({ courseGoals, setCourseGoals }: GoalListProps) => {
    const onDelete = (goalId: string) => {
        const newArray = courseGoals.filter(({ id }) => id!== goalId);
        setCourseGoals(newArray);
    }
    return (
        <FlatList
            style={styles.goalList}
            data={courseGoals}
            keyExtractor={(item) => item.id}
            renderItem={(itemData) => <GoalItem itemData={itemData} onDelete={onDelete} />}
        />
    );
}

