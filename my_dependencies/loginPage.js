import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput} from 'react-native';
import {Dimensions} from 'react-native';

class UserPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            is_loggedin: false,
        }
    }

    email = "";
    password = "";

    onChangeEmail = (text) => {
        this.email = text;

    }
    onChangePassword = (text) => {
        this.password = text;
    }

    onTextFixed = () => {
        alert("email: " + this.email + "\npassword: "+ this.password);
        this.setState({is_loggedin: true})
    }

    render() {
        if (this.state.is_loggedin) {
            return (
                <View style={pageStyles.container}>
                    <View style={pageStyles.center}>
                        <Text style={pageStyles.title}>
                            KaiShare User
                        </Text>
                        <View style={pageStyles.inputArea}>
                            <Text style={pageStyles.input}>{this.email}</Text>
                        </View>
                    </View>
                </View>
            );
        }else{
            return (
                <View style={pageStyles.container}>
                    <View style={pageStyles.center}>
                        <Text style={pageStyles.title}>
                            KaiShare Login
                        </Text>
                        <View style={pageStyles.inputArea}>
                            <TextInput
                                editable={true}
                                maxLength={40}
                                textContentType={'emailAddress'}
                                style={pageStyles.input}
                                onChangeText={newText => this.onChangeEmail(newText)}
                                placeholder="Email"
                                keyboardType="default"
                            />
                            <View style={pageStyles.hr}/>
                            <TextInput
                                editable={true}
                                maxLength={40}
                                textContentType={'emailAddress'}
                                style={pageStyles.input}
                                onChangeText={newText => this.onChangePassword(newText)}
                                placeholder="Password"
                                keyboardType="default"
                            />
                        </View>
                        <TouchableOpacity onPress={this.onTextFixed} >
                            <Text style={pageStyles.button}>Login / Sign in</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            );
        }
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

export default UserPage;