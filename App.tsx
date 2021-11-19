import {StatusBar} from 'expo-status-bar';
import React, {useState} from 'react';
import {
    View,
    SafeAreaView,
} from 'react-native';
import {GoalList, GoalListProps} from "./components/goal-list/goal-list";
import {GoalInput} from "./components/goal-input/goal-input";
import {Header} from "./components/header/header";
import {AddButton} from "./components/add-button/add-button";
import {styles} from "./App.styles";

type GoalListType = GoalListProps['courseGoals'];

export default function App() {
    /*State Hooks*/
    const [courseGoals, setCourseGoals] = useState<GoalListType>([]);
    const [isAddMode, setIsAddMode] = useState(false);

    return (
        <View style={styles.container}>
            <SafeAreaView>
                <Header />
                <AddButton openModal={() => setIsAddMode(true)} />
                <GoalInput setCourseGoals={setCourseGoals} isAddMode={isAddMode} closeModal={() => setIsAddMode(false)}/>
                <GoalList courseGoals={courseGoals} setCourseGoals={setCourseGoals} />
            </SafeAreaView>
            <StatusBar style="auto"/>
        </View>
    );
}

