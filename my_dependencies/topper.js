import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';


class Topper extends React.Component {
    constructor(props) {
        super(props);
    }
    _onPressAlarm = () => {
        alert('You tapped the button!')
    };
    
    _onPressProfile = () => {
        this.props.userPageFunc();
    };

    render() {
        return (
            <View style={topperStyles.container}>
                <View style={topperStyles.logo}>
                    <Text style={topperStyles.bigBlue}>KAIShare</Text>
                </View>
                <View style={topperStyles.gap}/>
                <View style={topperStyles.buttons}>
                    <Text></Text>
                </View>
                <View style={topperStyles.buttons}>
                    <TouchableOpacity onPress={this._onPressAlarm}>
                        <Image
                            style={topperStyles.bellIcon}
                            source={require("../resources/bell.png")}
                        />
                    </TouchableOpacity>
                </View>
                <View style={topperStyles.buttons}>
                    <TouchableOpacity onPress={this._onPressProfile}>
                        <Image
                            style={topperStyles.profileIcon}
                            source={require("../resources/user.png")}
                        />
                    </TouchableOpacity>
                </View>
                <View style={topperStyles.rightGap}>
                </View>
            </View>
        );
    }
}

const topperStyles = StyleSheet.create({
    container: {
        flex: 1.8,
        flexDirection: 'row',
        backgroundColor: '#c6e2e9',
    },
    logo: {
        flex: 3,
        alignItems: 'center',
        justifyContent: 'center',
    },
    gap: {
        flex: 1.5,
    },
    buttons: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    bellIcon: {
        width: 29,
        height: 29,
    },
    profileIcon: {
        width: 27,
        height: 27,
    },
    rightGap:{
        width: 3,
    },
    //temporary
    bigBlue: {
        color: 'blue',
        fontWeight: 'bold',
        fontSize: 30,
    },
});

export default Topper;