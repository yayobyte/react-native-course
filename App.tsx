import {StatusBar} from 'expo-status-bar';
import React, {useState} from 'react';
import {
    StyleSheet,
    View,
    SafeAreaView,
} from 'react-native';
import {GoalList, GoalListProps} from "./components/GoalList";
import {GoalInput} from "./components/GoalInput";
import {Header} from "./components/Header";
import {AddButton} from "./components/AddButton";

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

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'flex-start',
    },
});
