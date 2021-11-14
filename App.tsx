import {StatusBar} from 'expo-status-bar';
import React, {useState} from 'react';
import {
    StyleSheet,
    View,
    SafeAreaView,
} from 'react-native';
import {GoalList, GoalListProps} from "./components/GoalList";
import {GoalInput} from "./components/GoalInput";

type GoalListType = GoalListProps['courseGoals'];

export default function App() {
    /*State Hooks*/
    const [courseGoals, setCourseGoals] = useState<GoalListType>([]);

    return (
        <View style={styles.container}>
            <SafeAreaView>
                <GoalInput setCourseGoals={setCourseGoals} />
                <GoalList courseGoals={courseGoals} />
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
