import React from 'react';
import { StyleSheet, Button, Text, View, TouchableOpacity, TextInput, Image, SafeAreaView, ScrollView } from 'react-native';
import { Dimensions } from 'react-native';

class EventPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            page: 'beforeJoin', //'Joined', 'beforeJoin', 'Comment'
            ownerPage: 'Open' // 'Closed'
        }
    }
    checkPoster = true;
    onJoin = () => {
        this.setState({ page: 'Joined' })
        this._JoinXHR(this.props.email, this.props.password, this.props.event_id)
    }

    onLeave = () => {
        this.setState({ page: 'beforeJoin' })
        this._LeaveXHR(this.props.email, this.props.password, this.props.event_id)
    }

    onComment = () => {
        this.setState({ page: 'Comment' })
    }

    onBack = () => { //to get out of the Comment page 
        this.props.mainPageFunc()
    }

    onClose = () => {
        this.setState({ page: 'Closed'})
        this._CloseXHR(this.props.email, this.props.password, this.props.event_id)
    }

    onDisable = () => {
        this.setState({ page: 'Disabled'})
        this._DisableXHR(this.props.email, this.props.password, this.props.event_id)
        this.props.mainPageFunc()
    }

    onCheckPoster = () => {
        let parsed_response = this._CheckPosterXHR(this.props.email, this.props.password, this.props.event_id)
        if (parsed_response == 'T') {
            this.checkPoster = true
        } else {
            this.checkPoster = false
        }
    }

    getEventInfo = (info) => { //for more information about info, refer to the comment in _getEventInfoXHR
        this._GetEventInfoXHR(this.props.email, this.props.password, this.props.event_id, info)
    }

    _CheckPosterXHR = (email, password, event_id) => {
        let request = new XMLHttpRequest();
        request.onload = () => {
            let parsed_response = JSON.parse(responseObj);
            if (parsed_response.exit_code == 0) {
                alert(responseObj);
            } else if (parsed_response.exit_code == 1) {
                return parsed_response.data
            }
        };
        request.open('POST', 'http://13.115.154.88:5000/resource');
        request.setRequestHeader("content-type", "application/json");
        request.setRequestHeader("data-type", "json");
        request.setRequestHeader("data", "my_test_data_section");
        request.setRequestHeader("output", "json");
        request.send(JSON.stringify({
            'function-name': 'CheckPoster',
            'argument': {
                'event-id' : event_id,
                'email': email
            },
            'user-info': {
                'email': email,
                'password': password,
            }
        }
        ));
    }

    _JoinXHR = (email, password, event_id) => {
        let request = new XMLHttpRequest();
        request.onload = () => {
            let responseObj = request.response;
            //alert(responseObj); //print out response.
            let parsed_response = JSON.parse(responseObj);
            if (parsed_response.exit_code == 0) {
                alert(responseObj); //print out response.
            } else if (parsed_response.exit_code == 1) {
                alert("Joined!");
            }

        };
        request.open('POST', 'http://13.115.154.88:5000/resource');
        request.setRequestHeader("content-type", "application/json");
        request.setRequestHeader("data-type", "json");
        request.setRequestHeader("data", "my_test_data_section");
        request.setRequestHeader("output", "json");
        request.send(JSON.stringify({
            'function-name': 'JoinEvent',
            'argument': {
                'email': email,
                'event-id': event_id
            },
            'user-info': {
                'email': email,
                'password': password,
            }
        }
        ));
    }

    _LeaveXHR = (email, password, event_id) => {
        let request = new XMLHttpRequest();
        request.onload = () => {
            let responseObj = request.response;
            //alert(responseObj); //print out response.
            let parsed_response = JSON.parse(responseObj);
            if (parsed_response.exit_code == 0) {
                alert(responseObj); //print out response.
            } else if (parsed_response.exit_code == 1) {
                alert("Left!");
            }

        };
        request.open('POST', 'http://13.115.154.88:5000/resource');
        request.setRequestHeader("content-type", "application/json");
        request.setRequestHeader("data-type", "json");
        request.setRequestHeader("data", "my_test_data_section");
        request.setRequestHeader("output", "json");
        request.send(JSON.stringify({
            'function-name': 'LeaveEvent',
            'argument': {
                'email': email,
                'event-id': event_id
            },
            'user-info': {
                'email': email,
                'password': password,
            }
        }
        ));
    }

    _CloseXHR = (email, password, event_id) => {
        let request = new XMLHttpRequest();
        request.onload = () => {
            let responseObj = request.response;
            //alert(responseObj); //print out response.
            let parsed_response = JSON.parse(responseObj);
            if (parsed_response.exit_code == 0) {
                alert(responseObj); //print out response.
            } else if (parsed_response.exit_code == 1) {
                alert("Closed!");
            }

        };
        request.open('POST', 'http://13.115.154.88:5000/resource');
        request.setRequestHeader("content-type", "application/json");
        request.setRequestHeader("data-type", "json");
        request.setRequestHeader("data", "my_test_data_section");
        request.setRequestHeader("output", "json");
        request.send(JSON.stringify({
            'function-name': 'CloseEvent',
            'argument': {
                'email': email,
                'event-id': event_id
            },
            'user-info': {
                'email': email,
                'password': password,
            }
        }
        ));
    }

    _DisableXHR = (email, password, event_id) => {
        let request = new XMLHttpRequest();
        request.onload = () => {
            let responseObj = request.response;
            //alert(responseObj); //print out response.
            let parsed_response = JSON.parse(responseObj);
            if (parsed_response.exit_code == 0) {
                alert(responseObj); //print out response.
            } else if (parsed_response.exit_code == 1) {
                alert("Disabled!");
            }

        };
        request.open('POST', 'http://13.115.154.88:5000/resource');
        request.setRequestHeader("content-type", "application/json");
        request.setRequestHeader("data-type", "json");
        request.setRequestHeader("data", "my_test_data_section");
        request.setRequestHeader("output", "json");
        request.send(JSON.stringify({
            'function-name': 'DisableEvent',
            'argument': {
                'email': email,
                'event-id': event_id
            },
            'user-info': {
                'email': email,
                'password': password,
            }
        }
        ));
    }

    _GetEventInfoXHR = (email, password, event_id, info) => {
        /*
        If info == 'cur' => get current number of members
        If info == 'num' => get the number of members set by the poster
        If info == 'category' => get the category 
        If info == 'place' => get the place 
        If info == 'et' => get event time
        If info == 'content' => get the body content of the event 
        If info == 'pt' => get posting time 
        If info == 'ue' => get poster's email
        If info == 'un' => get poster's username
        If info == 'title' => get title of event 
        */
        let request = new XMLHttpRequest();
        request.onload = () => {
            let responseObj = request.response;
            //alert(responseObj); //print out response.
            let parsed_response = JSON.parse(responseObj);
            if (parsed_response.exit_code == 1) {
                if (parsed_response.hasOwnProperty('data') && info == 'cur') {
                    return (parsed_response.data).cur_member
                } else if (parsed_response.hasOwnProperty('data') && info == 'num') {
                    return (parsed_response.data).num_member
                } else if (parsed_response.hasOwnProperty('data') && info == 'category') {
                    return (parsed_response.data).category
                } else if (parsed_response.hasOwnProperty('data') && info == 'place') {
                    return (parsed_response.data).place
                } else if (parsed_response.hasOwnProperty('data') && info == 'et') {
                    return (parsed_response.data).event_time
                } else if (parsed_response.hasOwnProperty('data') && info == 'content') {
                    return (parsed_response.data).content
                } else if (parsed_response.hasOwnProperty('data') && info == 'pt') {
                    return (parsed_response.data).posting_time
                } else if (parsed_response.hasOwnProperty('data') && info == 'ue') {
                    return (parsed_response.data).uploader_email
                } else if (parsed_response.hasOwnProperty('data') && info == 'un') {
                    return (parsed_response.data).username
                } else if (parsed_response.hasOwnProperty('data') && info == 'title') {
                    return (parsed_response.data).title
                }

            } else {
                alert(responseObj); //print out response.
            }
        };
        request.open('POST', 'http://13.115.154.88:5000/resource');
        request.setRequestHeader("content-type", "application/json");
        request.setRequestHeader("data-type", "json");
        request.setRequestHeader("data", "my_test_data_section");
        request.setRequestHeader("output", "json");
        request.send(JSON.stringify({
            'function-name': 'GetEventInfo',
            'argument': {
                'event-id': event_id
            },
            'user-info': {
                'email': email,
                'password': password,
            }
        }
        ));
    }

    render() {
        if (this.props.page == "event-page") {
            {this.onCheckPoster()}
            if (this.checkPoster) {
                if (this.state.ownerPage == 'Open') {
                    return (
                        <View style={pageStyles.container}>
                            <View style={{ justifyContent: 'flex-start', marginBottom: 20 }}>
                                <TouchableOpacity onPress={this.onBack}>
                                    <Image
                                        style={{ width: 40, height: 40 }}
                                        source={{
                                            uri: 'https://cdn-icons-png.flaticon.com/512/93/93634.png'
                                        }}
                                    />
                                </TouchableOpacity>
                            </View>
                            <View style={pageStyles.sec1}>
                                <Image
                                    style={{ width: 50, height: 50 }}
                                    source={{
                                        uri: 'https://cdn-icons-png.flaticon.com/512/1946/1946429.png'
                                    }}
                                />
                                <Text style={{ fontSize: 18, marginLeft: 20 }}>
]                                    {this.getEventInfo('un')}
                                    {/*zzlinnn*/}
                                </Text>
                            </View>
                            <View style={pageStyles.sec2}>
                                <TouchableOpacity onPress={this.onClose}>
                                    <Text style={pageStyles.button2}>
                                        CLOSE 
                                    </Text>
                                </TouchableOpacity>
                                <Image
                                    style={{ width: 20, height: 20 }}
                                    source={{
                                        uri: 'https://cdn-icons-png.flaticon.com/512/25/25634.png'
                                    }}
                                />
                                <Text style={{ marginLeft: 5 }}>
                                    {this.getEventInfo('cur')}/{this.getEventInfo('num')}
                                    {/*3/6*/}
                                </Text>
                            </View>
                            <View>
                                <Text style={pageStyles.title}>
                                    POST TITLE: <Text style={pageStyles.context}>
                                        {this.getEventInfo('title')}
                                        {/*Pizza at 5?*/}
                                    </Text>
                                </Text>
                                <Text style={pageStyles.title}>
                                    CATEGORY: <Text style={pageStyles.context}>
                                        {this.getEventInfo('category')}
                                        {/*Food delivery*/}
                                    </Text>
                                </Text>
                                <Text style={pageStyles.title}>
                                    PLACE: <Text style={pageStyles.context}>
                                        {this.getEventInfo('place')}
                                        {/*N1*/}
                                    </Text>
                                </Text>
                                <Text style={pageStyles.title}>
                                    DATE & TIME: <Text style={pageStyles.context}>
                                        {this.getEventInfo('et')}
                                        {/*2022/11/16 13:30:00*/}
                                    </Text>
                                </Text>
                            </View>
                            <View style={pageStyles.postContent}>
                                <Text style={pageStyles.postText}>
                                    {this.getEventInfo('content')}
                                    {/*The pizza shop in KAIST is offering 10% discount!!
                            {'\n'}
                            Does anyone wanna get pizza tgt?*/}
                                </Text>
                            </View>
                            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 }}>
                                <Text style={{ fontSize: 12, fontWeight: "300" }}>
                                    Posted on: {this.getEventInfo('pt')} {/*2022/11/16 12:01:31*/}
                                </Text>
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
                                <TouchableOpacity onPress={this.onComment}>
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
                }else if (this.state.ownerPage == 'Closed'){
                    return (
                        <View style={pageStyles.container}>
                            <View style={{ justifyContent: 'flex-start', marginBottom: 20 }}>
                                <TouchableOpacity onPress={this.onBack}>
                                    <Image
                                        style={{ width: 40, height: 40 }}
                                        source={{
                                            uri: 'https://cdn-icons-png.flaticon.com/512/93/93634.png'
                                        }}
                                    />
                                </TouchableOpacity>
                            </View>
                            <View style={pageStyles.sec1}>
                                <Image
                                    style={{ width: 50, height: 50 }}
                                    source={{
                                        uri: 'https://cdn-icons-png.flaticon.com/512/1946/1946429.png'
                                    }}
                                />
                                <Text style={{ fontSize: 18, marginLeft: 20 }}>
                                    {this.getEventInfo('un')}
                                    {/*zzlinnn*/}
                                </Text>
                            </View>
                            <View style={pageStyles.sec2}>
                                <TouchableOpacity onPress={this.onDisable}>
                                    <Text style={pageStyles.button2}>
                                        DISABLE
                                    </Text>
                                </TouchableOpacity>
                                <Image
                                    style={{ width: 20, height: 20 }}
                                    source={{
                                        uri: 'https://cdn-icons-png.flaticon.com/512/25/25634.png'
                                    }}
                                />
                                <Text style={{ marginLeft: 5 }}>
                                    {this.getEventInfo('cur')}/{this.getEventInfo('num')}
                                    {/*3/6*/}
                                </Text>
                            </View>
                            <View>
                                <Text style={pageStyles.title}>
                                    POST TITLE: <Text style={pageStyles.context}>
                                        {this.getEventInfo('title')}
                                        {/*Pizza at 5?*/}
                                    </Text>
                                </Text>
                                <Text style={pageStyles.title}>
                                    CATEGORY: <Text style={pageStyles.context}>
                                        {this.getEventInfo('category')}
                                        {/*Food delivery*/}
                                    </Text>
                                </Text>
                                <Text style={pageStyles.title}>
                                    PLACE: <Text style={pageStyles.context}>
                                        {this.getEventInfo('place')}
                                        {/*N1*/}
                                    </Text>
                                </Text>
                                <Text style={pageStyles.title}>
                                    DATE & TIME: <Text style={pageStyles.context}>
                                        {this.getEventInfo('et')}
                                        {/*2022/11/16 13:30:00*/}
                                    </Text>
                                </Text>
                            </View>
                            <View style={pageStyles.postContent}>
                                <Text style={pageStyles.postText}>
                                    {this.getEventInfo('content')}
                                    {/*The pizza shop in KAIST is offering 10% discount!!
                            {'\n'}
                            Does anyone wanna get pizza tgt?*/}
                                </Text>
                            </View>
                            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 }}>
                                <Text style={{ fontSize: 12, fontWeight: "300" }}>
                                    Posted on: {this.getEventInfo('pt')} {/*2022/11/16 12:01:31*/}
                                </Text>
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
                                <TouchableOpacity onPress={this.onComment}>
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
                }
            } else {
                if (this.state.page == 'beforeJoin') {
                    return (
                        <View style={pageStyles.container}>
                            <View style={{ justifyContent: 'flex-start', marginBottom: 20 }}>
                                <TouchableOpacity onPress={this.onBack}>
                                    <Image
                                        style={{ width: 40, height: 40 }}
                                        source={{
                                            uri: 'https://cdn-icons-png.flaticon.com/512/93/93634.png'
                                        }}
                                    />
                                </TouchableOpacity>
                            </View>
                            <View style={pageStyles.sec1}>
                                <Image
                                    style={{ width: 50, height: 50 }}
                                    source={{
                                        uri: 'https://cdn-icons-png.flaticon.com/512/1946/1946429.png'
                                    }}
                                />
                                <Text style={{ fontSize: 18, marginLeft: 20 }}>
                                    {this.getEventInfo('un')}
                                    {/*zzlinnn*/}
                                </Text>
                            </View>
                            <View style={pageStyles.sec2}>
                                <TouchableOpacity onPress={this.onJoin}>
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
                                    {this.getEventInfo('cur')}/{this.getEventInfo('num')}
                                    {/*3/6*/}
                                </Text>
                            </View>
                            <View>
                                <Text style={pageStyles.title}>
                                    POST TITLE: <Text style={pageStyles.context}>
                                        {this.getEventInfo('title')}
                                        {/*Pizza at 5?*/}
                                    </Text>
                                </Text>
                                <Text style={pageStyles.title}>
                                    CATEGORY: <Text style={pageStyles.context}>
                                        {this.getEventInfo('category')}
                                        {/*Food delivery*/}
                                    </Text>
                                </Text>
                                <Text style={pageStyles.title}>
                                    PLACE: <Text style={pageStyles.context}>
                                        {this.getEventInfo('place')}
                                        {/*N1*/}
                                    </Text>
                                </Text>
                                <Text style={pageStyles.title}>
                                    DATE & TIME: <Text style={pageStyles.context}>
                                        {this.getEventInfo('et')}
                                        {/*2022/11/16 13:30:00*/}
                                    </Text>
                                </Text>
                            </View>
                            <View style={pageStyles.postContent}>
                                <Text style={pageStyles.postText}>
                                    {this.getEventInfo('content')}
                                    {/*The pizza shop in KAIST is offering 10% discount!!
                                {'\n'}
                                Does anyone wanna get pizza tgt?*/}
                                </Text>
                            </View>
                            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 }}>
                                <Text style={{ fontSize: 12, fontWeight: "300" }}>
                                    Posted on: {this.getEventInfo('pt')} {/*2022/11/16 12:01:31*/}
                                </Text>
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
                                <TouchableOpacity onPress={this.onComment}>
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
                } else if (this.state.page == 'Joined') {
                    return (
                        <View style={pageStyles.container}>
                            <View style={{ justifyContent: 'flex-start', marginBottom: 20 }}>
                                <TouchableOpacity onPress={this.onBack}>
                                    <Image
                                        style={{ width: 40, height: 40 }}
                                        source={{
                                            uri: 'https://cdn-icons-png.flaticon.com/512/93/93634.png'
                                        }}
                                    />
                                </TouchableOpacity>
                            </View>
                            <View style={pageStyles.sec1}>
                                <Image
                                    style={{ width: 50, height: 50 }}
                                    source={{
                                        uri: 'https://cdn-icons-png.flaticon.com/512/1946/1946429.png'
                                    }}
                                />
                                <Text style={{ fontSize: 18, marginLeft: 20 }}>
                                    {this.getEventInfo('ue')}
                                    {/*zhilin@kaist.ac.kr*/}
                                </Text>
                            </View>
                            <View style={pageStyles.sec2}>
                                <TouchableOpacity onPress={this.onLeave}>
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
                                    {this.getEventInfo('cur')}/{this.getEventInfo('num')}
                                    {/*4/6*/}
                                </Text>
                            </View>
                            <View>
                                <Text style={pageStyles.title}>
                                    POST TITLE: <Text style={pageStyles.context}>
                                        {this.props.postTitle}
                                        {/*Pizza at 5?*/}
                                    </Text>
                                </Text>
                                <Text style={pageStyles.title}>
                                    CATEGORY: <Text style={pageStyles.context}>
                                        {this.getEventInfo('category')}
                                        {/*Food delivery*/}
                                    </Text>
                                </Text>
                                <Text style={pageStyles.title}>
                                    PLACE: <Text style={pageStyles.context}>
                                        {this.getEventInfo('place')}
                                        {/*N1*/}
                                    </Text>
                                </Text>
                                <Text style={pageStyles.title}>
                                    DATE & TIME: <Text style={pageStyles.context}>
                                        {this.getEventInfo('et')}
                                        {/*2022/11/16 13:30:00*/}
                                    </Text>
                                </Text>
                            </View>
                            <View style={pageStyles.postContent}>
                                <Text style={pageStyles.postText}>
                                    {this.getEventInfo('content')}
                                    {/*The pizza shop in KAIST is offering 10% discount!!
                                {'\n'}
                                Does anyone wanna get pizza tgt?*/}
                                </Text>
                            </View>
                            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 }}>
                                <Text style={{ fontSize: 12, fontWeight: "300" }}>
                                    Posted on: {this.getEventInfo('pt')} {/*2022/11/16 12:01:31*/}
                                </Text>
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
                                <TouchableOpacity onPress={this.onComment}>
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
        } else {
            <View style={pageStyles.hidden}>
            </View>
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
    container2: {
        flexDirection: 'column',
        minWidth: Dimensions.get('window').width,
        minHeight: Dimensions.get('window').height,
        padding: 60,
    },
    hidden: {
        display: 'none',
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
