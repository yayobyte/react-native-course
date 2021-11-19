import {Button, TextInput, View} from "react-native";
import React from "react";
import { BottomSheetModal } from "../../ui/bottom-sheet-modal/bottom-sheet-modal";
import { RED } from "../../global.styles";
import {styles} from "./goal-input.styles";

export type GoalInputViewProps = {
    goalInputHandler: (f: string) => void,
    enteredGoal: string,
    addGoal: () => void,
    isAddMode: boolean,
    closeModal: () => void,
}

export const GoalInputView = ({ goalInputHandler, enteredGoal, addGoal, closeModal, isAddMode }: GoalInputViewProps) => {
    return (
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
    );
}
