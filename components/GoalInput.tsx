import {Button, TextInput, View, StyleSheet} from "react-native";
import React, {useState} from "react";
import {GoalListProps} from "./GoalList";
import { BottomSheetModal } from "./ui/bottom-sheet-modal/bottom-sheet-modal";
import { RED } from "../global.styles";

const PADDING_HORIZONTAL = 24;

const styles = StyleSheet.create({
    addContainer: {
        paddingHorizontal: PADDING_HORIZONTAL,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 26,
        alignItems: 'center',
    },
    goalInput: {
        flex: 9,
        borderWidth: 2,
        borderColor: '#FFF',
        borderBottomColor: "#E0E0E0",
        marginEnd: 8,
        paddingVertical: 6,
    },
    modalContainer: {
        justifyContent: 'flex-start',
        flexDirection: 'column',
    },
    buttonGroup: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: PADDING_HORIZONTAL,
    },
    closeButton: {
    },
    addButton: {
    },
});

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
                    <View style={styles.closeButton}>
                        <Button color={RED["500"]} title={'Cancel'} onPress={closeModal}/>
                    </View>
                    <View style={styles.addButton}>
                        <Button title={'Add'} onPress={addGoal}/>
                    </View>
                </View>
            </View>
        </BottomSheetModal>
        // </Modal>
    );
}
