import React, {useEffect, useRef} from "react";
import RBSheet from 'react-native-raw-bottom-sheet'
import {StyleSheet, Text, View} from "react-native";

type BottomSheetModalProps = {
    isVisible: boolean,
    children: React.ReactElement,
    onCloseEnd: () => void,
};

const PADDING_HORIZONTAL = 24;

const styles = StyleSheet.create({
    modalHeaderText: {
        fontSize: 18,
        textAlign: 'center',
    },
    modalHeader: {
        paddingHorizontal: PADDING_HORIZONTAL,
        paddingTop: 8,
        paddingBottom: 26,
    },
});

export const BottomSheetModal = ({ isVisible, children, onCloseEnd } : BottomSheetModalProps) => {
    const bottomSheetRef = useRef<RBSheet>(null)

    useEffect(() => {
        const ref = bottomSheetRef.current
        if (ref) {
            if (isVisible) {
                ref.open()
            } else {
                ref.close()
            }
        }
    }, [isVisible, bottomSheetRef]);

    return (
        <RBSheet
            ref={bottomSheetRef}
            animationType="fade"
            closeOnDragDown
            onClose={onCloseEnd}
        >
            <View style={styles.modalHeader}>
                <Text style={styles.modalHeaderText}>Add New Task</Text>
            </View>
            {children}
        </RBSheet>
    )
}
