import {Button} from "react-native";
import React from "react";

type AddButtonProp = {
    openModal: () => void,
}

export const AddButton = ({ openModal }: AddButtonProp) => {
    return (
        <Button title={'Add task'} onPress={openModal} />
    )
}
