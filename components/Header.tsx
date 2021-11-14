import {View, Text, StyleSheet} from "react-native";
import React from "react";

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        paddingHorizontal: 24,
        justifyContent: 'center',
        paddingTop: 16,
    },
    text: {
        fontSize: 48,
    }
})

export const Header = () => (
    <View style={styles.header}><Text style={styles.text}>To Do</Text></View>
)
