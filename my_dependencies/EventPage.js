import React from 'react';
import { StyleSheet, Button, Text, View, TouchableOpacity, TextInput, Image } from 'react-native';
import { Dimensions } from 'react-native';

class EventPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            page: 'beforeJoin'
        }
    }

    onJoin = () => {
        this.setState({ page: 'Joined' })
    }

    onLeave = () => {
        this.setState({ page: 'beforeJoin'})
    }

    render() {
        if (this.state.page == 'beforeJoin') {
            return (
                <View style={pageStyles.container}>
                    <View style={pageStyles.sec1}>
                        <Image
                            style={{ width: 50, height: 50 }}
                            source={{
                                uri: 'https://cdn-icons-png.flaticon.com/512/1946/1946429.png'
                            }}
                        />
                        <Text style={{ fontSize: 18, marginLeft: 20 }}>
                            {/*{this.props.username}*/}
                            zzlinnn
                        </Text>
                    </View>
                    <View style={pageStyles.sec2}>
                        <TouchableOpacity onPress = {this.onJoin}>
                            <Text style={pageStyles.button}>
                                JOIN
                            </Text>
                        </TouchableOpacity>
                        <Image
                            style={{ width: 20, height: 20 }}
                            source={{
                                uri: 'https://cdn-icons-png.flaticon.com/512/25/25634.png'
                            }}
                        />
                        <Text style={{ marginLeft: 5 }}>
                            {/*{this.props.numMembers}*/}3/6{/*{this.props.membersLimit}*/}
                        </Text>
                    </View>
                    <View>
                        <Text style={pageStyles.title}>
                            POST TITLE: <Text style={pageStyles.context}>
                                {/*{this.props.postTitle}*/}
                                Pizza at 5??
                            </Text>
                        </Text>
                        <Text style={pageStyles.title}>
                            CATEGORY: <Text style={pageStyles.context}>
                                {/*{this.props.category}*/}
                                Food delivery
                            </Text>
                        </Text>
                        <Text style={pageStyles.title}>
                            PLACE: <Text style={pageStyles.context}>
                                {/*{this.props.place}*/}
                                N1
                            </Text>
                        </Text>
                        <Text style={pageStyles.title}>
                            DATE & TIME: <Text style={pageStyles.context}>
                                {/*{this.props.eventDT}*/}
                                2022/11/16 13:30:00
                            </Text>
                        </Text>
                    </View>
                    <View style={pageStyles.postContent}>
                        <Text style={pageStyles.postText}>
                            {/*{this.props.postContent}*/}
                            The pizza shop in KAIST is offering 10% discount!!
                            {'\n'}
                            Does anyone wanna get pizza tgt?
                        </Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 }}>
                        <Text style={{ fontSize: 12, fontWeight: "300" }}>
                            Posted on: {/*{this.props.postDT}*/} 2022/11/16 12:01:31
                        </Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
                        <TouchableOpacity>
                            <Image
                                style={{ width: 40, height: 40 }}
                                source={{
                                    uri: 'https://static.thenounproject.com/png/638755-200.png'
                                }}
                            />
                        </TouchableOpacity>
                    </View>
                </View>
            );
        }else if (this.state.page == 'Joined'){
            return (
                <View style={pageStyles.container}>
                    <View style={pageStyles.sec1}>
                        <Image
                            style={{ width: 50, height: 50 }}
                            source={{
                                uri: 'https://cdn-icons-png.flaticon.com/512/1946/1946429.png'
                            }}
                        />
                        <Text style={{ fontSize: 18, marginLeft: 20 }}>
                            {/*{this.props.email}*/}
                            zhilin@kaist.ac.kr
                        </Text>
                    </View>
                    <View style={pageStyles.sec2}>
                        <TouchableOpacity onPress = {this.onLeave}>
                            <Text style={pageStyles.button2}>
                                LEAVE
                            </Text>
                        </TouchableOpacity>
                        <Image
                            style={{ width: 20, height: 20 }}
                            source={{
                                uri: 'https://cdn-icons-png.flaticon.com/512/25/25634.png'
                            }}
                        />
                        <Text style={{ marginLeft: 5 }}>
                            {/*{this.props.numMembers}*/}3/6{/*{this.props.membersLimit}*/}
                        </Text>
                    </View>
                    <View>
                        <Text style={pageStyles.title}>
                            POST TITLE: <Text style={pageStyles.context}>
                                {/*{this.props.postTitle}*/}
                                Pizza at 5??
                            </Text>
                        </Text>
                        <Text style={pageStyles.title}>
                            CATEGORY: <Text style={pageStyles.context}>
                                {/*{this.props.category}*/}
                                Food delivery
                            </Text>
                        </Text>
                        <Text style={pageStyles.title}>
                            PLACE: <Text style={pageStyles.context}>
                                {/*{this.props.place}*/}
                                N1
                            </Text>
                        </Text>
                        <Text style={pageStyles.title}>
                            DATE & TIME: <Text style={pageStyles.context}>
                                {/*{this.props.eventDT}*/}
                                2022/11/16 13:30:00
                            </Text>
                        </Text>
                    </View>
                    <View style={pageStyles.postContent}>
                        <Text style={pageStyles.postText}>
                            {/*{this.props.postContent}*/}
                            The pizza shop in KAIST is offering 10% discount!!
                            {'\n'}
                            Does anyone wanna get pizza tgt?
                        </Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 }}>
                        <Text style={{ fontSize: 12, fontWeight: "300" }}>
                            Posted on: {/*{this.props.postDT}*/} 2022/11/16 12:01:31
                        </Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
                        <TouchableOpacity>
                            <Image
                                style={{ width: 40, height: 40 }}
                                source={{
                                    uri: 'https://static.thenounproject.com/png/638755-200.png'
                                }}
                            />
                        </TouchableOpacity>
                    </View>
                </View>
            )
        }
    }
}

const pageStyles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        minWidth: Dimensions.get('window').width,
        minHeight: Dimensions.get('window').height,
        justifyContent: 'center',
        padding: 60,
    },
    sec1: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    sec2: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end'

    },
    postContent: {
        borderWidth: 2,
        borderRadius: 10,
        marginTop: 20
    },
    postText: {
        color: 'black',
        fontSize: 16,
        textAlign: 'left',
        margin: 15
    },
    center: {
        backgroundColor: "fffff"
        //backgroundColor: "#d0f0ff",
    },
    title: {
        color: 'black',
        fontSize: 16,
        textAlign: 'left',
        fontWeight: '500',
        lineHeight: 30
    },
    context: {
        color: 'black',
        fontSize: 16,
        textAlign: 'left',
        fontWeight: 'normal'
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
        borderWidth: 2,
        borderRadius: 10,
        borderColor: 'green',
        color: 'white',
        textAlign: 'center',
        marginRight: 10,
        marginHorizontal: '0%',
        padding: 10,
        backgroundColor: 'green',
        overflow: 'hidden'
    },
    button2: {
        borderWidth: 2,
        borderRadius: 10,
        borderColor: 'red',
        color: "white",
        textAlign: 'center',
        marginRight: 10,
        marginHorizontal: '0%',
        padding: 10,
        backgroundColor: 'red',
        overflow: 'hidden'
    },
});

export default EventPage;
