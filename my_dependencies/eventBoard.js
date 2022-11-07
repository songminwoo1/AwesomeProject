import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {Dimensions} from 'react-native';

import Topper from './topper';
import SubTopper from './sub_topper';
import BoardItems from './boardItems';

const bottomButtonText = {
    a: "_",
    ah: "ㅡ",
    b: "_",
    bh: "ㅡ",
    c: "_",
    ch: "ㅡ",
}

class EventBoard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            itemTableA:  [["Taxi", "5:30 today?", "22 min ago"],
            ["Food", "6:30 today?", "24 min ago"],
            ["Taxi", "7:30 today?", "26 min ago"],
            ["Food", "8:30 today?", "28 min ago"],
            ["Food", "6:30 today?", "24 min ago"],
            ["Taxi", "7:30 today?", "26 min ago"],
            ["Food", "8:30 today?", "28 min ago"],
            ["Food", "6:30 today?", "24 min ago"],
            ["Taxi", "7:30 today?", "26 min ago"],
            ["Food", "8:30 today?", "28 min ago"],
            ["Taxi", "9:30 today?", "30 min ago"]],

            itemTableB:  [["BBBBBBBBB", "5:30 today?", "22 min ago"],
            ["Food", "6:30 today?", "24 min ago"],
            ["Food", "8:30 today?", "28 min ago"],
            ["Taxi", "9:30 today?", "30 min ago"]],

            itemTableC:  [["CCCCCCCCC", "5:30 today?", "22 min ago"],
            ["Food", "6:30 today?", "24 min ago"],
            ["Taxi", "9:30 today?", "30 min ago"]],

            page: boardStyles.bbsb,

            bottomA: bottomButtonText.a,
            bottomB: bottomButtonText.bh,
            bottomC: bottomButtonText.c,
        }
    }
    _BoardRefresh = () => {
        let request = new XMLHttpRequest();
        request.onload = function() {
            alert("XHR responded");
            let responseObj = request.response;
            alert(responseObj); //print out response.
        };
        
        request.open('GET', 'https://jsonplaceholder.typicode.com');
        request.setRequestHeader("content-type", "application/json");
        request.send();
    }
    
    GotoPageA = () => {
        this.setState({page: boardStyles.bbsa, bottomA: bottomButtonText.ah, bottomB: bottomButtonText.b, bottomC: bottomButtonText.c});
    }
    GotoPageB = () => {
        this.setState({page: boardStyles.bbsb, bottomA: bottomButtonText.a, bottomB: bottomButtonText.bh, bottomC: bottomButtonText.c});
    }
    GotoPageC = () => {
        this.setState({page: boardStyles.bbsc, bottomA: bottomButtonText.a, bottomB: bottomButtonText.b, bottomC: bottomButtonText.ch});
    }

    render() {
        return (
            <View style={boardStyles.container}>
                <View style={boardStyles.over_topper}>{}</View>
                <Topper mainPageFunc = {this.props.mainPageFunc} userPageFunc = {this.props.userPageFunc}>{}</Topper>

                <View style={[boardStyles.board_body_scroller, this.state.page]}>
                    <View style={boardStyles.board_body}>
                        <View style={boardStyles.sub_topper}>
                            <SubTopper>{}</SubTopper>
                        </View>
                        <BoardItems itemTable={this.state.itemTableA} eventPageFunc = {this.props.eventPageFunc}/>
                    </View>
                    <View style={boardStyles.board_body}>
                        <View style={boardStyles.sub_topper}>
                            <SubTopper>{}</SubTopper>
                        </View>
                        <BoardItems itemTable={this.state.itemTableB} eventPageFunc = {this.props.eventPageFunc}/>
                    </View>
                    <View style={boardStyles.board_body}>
                        <View style={boardStyles.sub_topper}>
                            <SubTopper>{}</SubTopper>
                        </View>
                        <BoardItems itemTable={this.state.itemTableC} eventPageFunc = {this.props.eventPageFunc}/>
                    </View>
                </View>
                
                <View style={boardStyles.footer}>
                    <TouchableOpacity onPress={this.GotoPageA} style={boardStyles.bbb_button}>
                        <Text style={boardStyles.bigBlue}>{this.state.bottomA}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this.GotoPageB} style={boardStyles.bbb_button}>
                        <Text style={boardStyles.bigBlue}>{this.state.bottomB}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this.GotoPageC} style={boardStyles.bbb_button}>
                        <Text style={boardStyles.bigBlue}>{this.state.bottomC}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const boardStyles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        minWidth: Dimensions.get('window').width,
        minHeight: Dimensions.get('window').height,
    },
    board_body_scroller: {
        flex: 23,
        width: Dimensions.get('window').width,
        flexDirection: 'row',
        alignItems: 'center',
        //justifyContent: 'flex-start', //this is the page controller.
    },
    bbsa: {
        justifyContent: 'flex-start'
    },
    bbsb: {
        justifyContent: 'center'
    },
    bbsc: {
        justifyContent: 'flex-end'
    },
    bbb_button: {
        width: '20%',
        height: '100%',
        alignItems: 'center',
    },
    board_body: {
        height: '100%',
        width: Dimensions.get('window').width,
    },
    over_topper: {
        flex: 0.2,
        margin: 0,
    },
    sub_topper: {
        width: '100%',
        flex: 3,
        padding: 10,
        paddingBottom: 5,
        margin: 0,
    },
    body: {
        flex: 22,
        flexDirection: 'column',
        alignItems: 'center',
    },
    footer: {
        borderTopWidth: 0.5,
        borderTopColor: '#555',
        flex: 2.5,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    //temporary
    bigBlue: {
        color: 'blue',
        fontWeight: 'bold',
        fontSize: 30,
    },
    red: {
        color: 'red',
    },
});

export default EventBoard;