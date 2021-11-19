import React from "react";
import { GoalListViewProps } from './goal-list.view';

export type GoalListControllerProps = {
    courseGoals: Array<{id: string, value: string}>
    setCourseGoals: React.Dispatch<React.SetStateAction<{id: string, value: string}[]>>
};

export type GoalListType = GoalListControllerProps['courseGoals'];

export const GoalListController = ({ courseGoals, setCourseGoals }: GoalListControllerProps) : GoalListViewProps => {
    const onDelete = (goalId: string) => {
        const newArray = courseGoals.filter(({ id }) => id!== goalId);
        setCourseGoals(newArray);
    }

    return {
        onDelete,
        courseGoals,
    }
}

