import React, {useEffect, useRef} from "react";
import RBSheet from 'react-native-raw-bottom-sheet'
import {Text, View} from "react-native";
import { styles } from './bottom-sheet-modal.styles';

type BottomSheetModalProps = {
    isVisible: boolean,
    children: React.ReactElement,
    onCloseEnd: () => void,
};

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
