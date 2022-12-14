import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';

const GMTToKorTime = (t) => {
    return t + 32400;
}
const TimeAsString = (t) => {
    var date = new Date(t * 1000);

    var year = date.getUTCFullYear();
    var month = date.getUTCMonth() + 1;
    var day = date.getUTCDate();

    // Hours part from the timestamp
    var hours = date.getUTCHours();
    // Minutes part from the timestamp
    var minutes = "0" + date.getUTCMinutes();

    // Will display time in 10:30:23 format
    return year + "/" + month + "/" + day + " " + hours + ':' + minutes.substr(-2);
}

class RenderItem extends React.Component {
    constructor(props) {
        super(props);
    }

    onPressAction = () => {
        this.props.eventPageFunc({event_id:this.props.event_id});
    }

    render() {
        return (
            <View style={itemStyles.container}>
                <TouchableOpacity onPress={this.onPressAction}>
                    <View style={itemStyles.topper}>
                        <Text style={itemStyles.title}>{this.props.title}</Text>
                    </View>
                    <View style={itemStyles.body}>
                        <Text style={itemStyles.body_text}>{this.props.body}</Text>
                    </View>
                    <View style={itemStyles.footer}>
                        <Text style={itemStyles.footerText}>{ TimeAsString(GMTToKorTime(this.props.eventtime))}</Text>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }
}

const itemStyles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        borderWidth: 0,
        borderBottomWidth: 0.5,
        borderColor: 'grey',
        padding: 5,
        paddingLeft: 10,
        margin: 0,
        width: '100%',
    },
    //top section
    topper: {
        flexDirection: 'row',
        padding: 0,
        margin: 0,
        alignItems: 'center',
        height: 26,
    },
    title: {
        fontWeight: 'light',
        fontSize: 18,
        padding: 0,
        margin: 0,
    },
    //body section
    body: {
        flexDirection: 'row',
        padding: 0,
        margin: 0,
        alignItems: 'center',
        height: 20,
    },
    body_text: {
        padding: 0,
        margin: 0,
        color: '#333',
        fontSize: 13,
    },
    //footer
    footer: {
        flexDirection: 'row',
        padding: 0,
        margin: 0,
        alignItems: 'center',
        height: 20,
    },
    footerText: {
        color: 'gray',
        fontSize: 13,
    }
});

export default RenderItem;