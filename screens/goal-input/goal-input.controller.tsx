import React, {useState} from "react";
import {GoalListControllerProps} from "../goal-list/goal-list.controller";
import {GoalInputViewProps} from "./goal-input.view";

type GoalListType = GoalListControllerProps['courseGoals'];

export type GoalInputControllerProps = {
    setCourseGoals:  React.Dispatch<React.SetStateAction<{id: string, value: string}[]>>,
    isAddMode: boolean;
    closeModal: () => void,
}

export const GoalInputController = ({ setCourseGoals, isAddMode, closeModal }: GoalInputControllerProps) : GoalInputViewProps => {
    /*State Hooks*/
    const [enteredGoal, setEnteredGoal] = useState('');

    /*Functions*/
    const goalInputHandler = (text: string) => setEnteredGoal(text);
    const addGoal = () => {
        setCourseGoals((prev: GoalListType) => [
            ...prev,
            {
                id: prev.length.toString() + Math.random().toString(),
                value: enteredGoal,
            }
        ]);
        setEnteredGoal('');
        closeModal();
    }

    return {
        goalInputHandler,
        enteredGoal,
        addGoal,
        isAddMode,
        closeModal,
    };
}
