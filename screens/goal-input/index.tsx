import React from 'react';
import {GoalInputView} from "./goal-input.view";
import {GoalInputController, GoalInputControllerProps} from "./goal-input.controller";

export const GoalInput = (props: GoalInputControllerProps) => {
    const viewProps = GoalInputController(props);
    return (
        <GoalInputView {...viewProps} />
    )
}
