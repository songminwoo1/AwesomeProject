import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';


class Topper extends React.Component {
    constructor(props) {
        super(props);
    }
    _onPressSearch = () => {
        this.props.toSearch();
    };

    _onPressAdd = () => {
        this.props.toEventCreation();
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
                    <TouchableOpacity onPress={this._onPressSearch}>
                        <Image
                            style={topperStyles.searchIcon}
                            source={require("../resources/search.png")}
                        />
                    </TouchableOpacity>
                </View>
                <View style={topperStyles.buttons}>
                    <TouchableOpacity onPress={this._onPressAdd}>
                        <Image
                            style={topperStyles.addIcon}
                            source={require("../resources/add.png")}
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
    searchIcon : {
        width: 28,
        height: 28,
    },
    addIcon: {
        width: 31,
        height: 31,
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