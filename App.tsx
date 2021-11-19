import {StatusBar} from 'expo-status-bar';
import React, {useState} from 'react';
import {
    View,
    SafeAreaView,
} from 'react-native';
import {Header} from "./components/header/header";
import {AddButton} from "./components/add-button/add-button";
import {styles} from "./App.styles";
import {GoalInput} from "./screens/goal-input/";
import {GoalList, GoalListType} from "./screens/goal-list";

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

