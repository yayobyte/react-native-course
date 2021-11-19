import React from "react";
import { GoalListController, GoalListControllerProps, GoalListType} from "./goal-list.controller";
import { GoalListView } from "./goal-list.view";

export { GoalListType };

export const GoalList = (props: GoalListControllerProps) => {
    const viewProps = GoalListController(props);
    return (
        <GoalListView {...viewProps} />
    )
}
