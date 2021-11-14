import {Button, TextInput, View, StyleSheet, Modal, Text} from "react-native";
import React, {useState} from "react";
import {GoalListProps} from "./GoalList";

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
    addButton: {
        flex: 2,
    },
    modalContainer: {
        justifyContent: 'flex-start',
        flexDirection: 'column',
    },
    closeButton: {

    },
    modalHeaderText: {
        fontSize: 36,
        textAlign: 'center',
    },
    modalHeader: {
        paddingHorizontal: PADDING_HORIZONTAL,
        paddingTop: 36,
        paddingBottom: 26,
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
        <Modal visible={isAddMode} animationType={'slide'} presentationStyle={'formSheet'} >
            <View style={styles.modalContainer}>
                <View style={styles.modalHeader}>
                    <Text style={styles.modalHeaderText}>Add New Task</Text>
                </View>
                <View style={styles.addContainer}>
                    <TextInput
                        onChangeText={goalInputHandler}
                        style={styles.goalInput}
                        value={enteredGoal}
                    />
                    <View style={styles.addButton}><Button title={'Add'} onPress={addGoal}/></View>
                </View>
                <View style={styles.closeButton}>
                    <Button title={'Cancel'} onPress={closeModal}/>
                </View>
            </View>
        </Modal>
    );
}
