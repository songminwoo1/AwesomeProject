import React from 'react';
import { StyleSheet, View, ScrollView} from 'react-native';
import RenderItem from './eventItem';
import {Dimensions} from 'react-native';

const thatTitle = 'Taxi ride to Daejeon stn';
const thatBody = '5:30 today? 5:30 today? 5:30 today? 5:30 today? 5:30 today?';
const thatPostTime = '22min ago';

class BoardItems extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>
                <ScrollView style={styles.scroller}>
                    {this.props.itemTable.map((e) => <RenderItem title={e[3]} body={e[4]} eventtime={e[6]} event_id={e[0]} 
                    eventPageFunc = {this.props.eventPageFunc}/>)}
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 23,
        alignItems: 'center',
        justifyContent: 'center',
        width: "100%",
    },
    scroller: {
        width: "100%",
        paddingLeft: "2.5%",
        paddingRight: "2.5%",
        flexDirection: 'column',
    }
});

export default BoardItems;