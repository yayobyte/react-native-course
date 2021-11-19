import React from "react";
import {FlatList} from "react-native";
import {GoalItem} from "../goal-item/goal-item";
import {styles} from "./goal-list.styles";

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
