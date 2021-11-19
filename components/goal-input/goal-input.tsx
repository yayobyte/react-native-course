import {Button, TextInput, View} from "react-native";
import React, {useState} from "react";
import {GoalListProps} from "../goal-list/goal-list";
import { BottomSheetModal } from "../ui/bottom-sheet-modal/bottom-sheet-modal";
import { RED } from "../../global.styles";
import {styles} from "./goal-input.styles";

type GoalListType = GoalListProps['courseGoals'];

type GoalInputProps = {
    setCourseGoals:  React.Dispatch<React.SetStateAction<{id: string, value: string}[]>>,
    isAddMode: boolean;
    closeModal: () => void,
}

export const GoalInput = ({ setCourseGoals, isAddMode, closeModal }: GoalInputProps) => {
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

    return (
        // <Modal visible={isAddMode} animationType={'slide'} presentationStyle={'formSheet'} >
        <BottomSheetModal
            isVisible={isAddMode}
            onCloseEnd={closeModal}
        >
            <View style={styles.modalContainer}>
                <View style={styles.addContainer}>
                    <TextInput
                        onChangeText={goalInputHandler}
                        style={styles.goalInput}
                        value={enteredGoal}
                        placeholder={'Sample: Do the bed'}
                    />
                </View>
                <View style={styles.buttonGroup}>
                    <View>
                        <Button color={RED["500"]} title={'Cancel'} onPress={closeModal}/>
                    </View>
                    <View>
                        <Button title={'Add'} onPress={addGoal}/>
                    </View>
                </View>
            </View>
        </BottomSheetModal>
        // </Modal>
    );
}
