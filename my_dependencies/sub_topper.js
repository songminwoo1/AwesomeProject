import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const SubTopper = () => {
    return (
        <View style={styles.container}>
            <Text>Maybe some featured board / notifications</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#aaa',
        width: '100%',
        height: '100%',
        backgroundColor: '#fdfdff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default SubTopper;