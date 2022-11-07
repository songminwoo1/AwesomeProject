import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput} from 'react-native';
import {Dimensions} from 'react-native';

class EventPage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={pageStyles.container}>
                <View style={pageStyles.center}>
                    <Text style={pageStyles.title}>
                        Title: {this.props.ev_title}
                    </Text>
                    <Text>
                        Body: {this.props.ev_body + '\n'}
                    </Text>
                    <Text>
                        Time: {this.props.ev_time}
                    </Text>
                </View>
            </View>
        );
    }
}

const pageStyles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        minWidth: Dimensions.get('window').width,
        minHeight: Dimensions.get('window').height,
        justifyContent: 'center',
    },
    center: {
        backgroundColor: "#d0f0ff",
    },
    title: {
        color: 'blue',
        fontSize: 35,
        textAlign: 'center',
        margin: 15,
    },
    input: {
        fontSize: 20,
        textAlign: 'center',
    },
    hr: {
        borderWidth: 0.5,
        borderColor: 'gray',
        marginVertical: 5,
    },
    inputArea: {
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 10,
        marginHorizontal: 50,
        paddingHorizontal: 15,
        paddingVertical: 5,
        marginBottom: 10,
    },
    button: {
        borderWidth: 0.5,
        borderRadius: 5,
        color: "#666",
        fontSize: 20,
        textAlign: 'center',
        marginBottom: 10,
        marginHorizontal: '30%',
    },
});

export default EventPage;