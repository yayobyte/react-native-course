import {Button, TextInput, View, StyleSheet} from "react-native";
import React, {useState} from "react";
import {GoalListProps} from "./GoalList";

const styles = StyleSheet.create({
    addContainer: {
        paddingHorizontal: 24,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 18,
    },
    goalInput: {
        flex: 9,
        borderWidth: 2,
        borderColor: '#FFF',
        borderBottomColor: "#E0E0E0",
        marginEnd: 8,
    },
    addButton: {
        flex: 2,
    },
});

type GoalListType = GoalListProps['courseGoals'];

type GoalInputProps = {
    setCourseGoals:  React.Dispatch<React.SetStateAction<{id: string, value: string}[]>>,
}

export const GoalInput = ({ setCourseGoals }: GoalInputProps) => {
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
    }

    return (
        <View style={styles.addContainer}>
            <TextInput onChangeText={goalInputHandler} style={styles.goalInput} value={enteredGoal}/>
            <View style={styles.addButton}><Button title={'Add'} onPress={addGoal}/></View>
        </View>
    );
}
