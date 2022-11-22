import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Image} from 'react-native';
import {Dimensions} from 'react-native';

class EventCreation extends React.Component {
    constructor(props) {
        super(props);
    }

    category = "";
    title = "";
    body = "";
    place = "";
    time = 0;
    num_mem = 0;

    onChangeTitle = (text) => {
        this.title = text;
    }
    onChangeBody = (text) => {
        this.body = text;
    }

    onSubmit = () => {
        //TODO: submit event creation request to the back end.
        
        this._PostEventXHR(this.props.email, this.props.password, this.category, this.title, this.body, this.place, this.event_time, this.num_mem);
    }

    _PostEventXHR = (email, password, category, title, content, place, event_time, num_mem) => {
        let request = new XMLHttpRequest();
        request.onload = () => {
            let responseObj = request.response;
            //alert(responseObj); //print out response.
            let parsed_response = JSON.parse(responseObj);
            if(parsed_response.exit_code == 0) {
                //TODO: post fail
                alert("event post failed");
            }else if(parsed_response.exit_code == 1) {
                //TODO: post success
                alert("event post success!");
            }
        };
        
        request.open('POST', 'http://13.115.154.88:5000/resource');
        request.setRequestHeader("content-type", "application/json");
        request.setRequestHeader("data-type", "json");
        request.setRequestHeader("data", "my_test_data_section");
        request.setRequestHeader("output", "json");
        request.send(JSON.stringify({
            'function-name': 'PostEvent',
            'argument': {
                'email': email,
                'category': category,
                'title': title,
                'content': content,
                'place': place,
                'event-time': event_time,
                'num-member': num_mem,
            },
            'user-info': {
                'email': email,
                'password': password,
            }
        }
        ));
    }

    render() {
        if(this.props.page == "event-creation") {
            return (
                <View style={pageStyles.container}>
                    <View>
                        <Text style={pageStyles.title}>
                               POST TITLE
                        </Text>
                        <TextInput
                                    editable={true}
                                    maxLength={30}
                                    style={pageStyles.input}
                                    onChangeText={newText => this.onChangeTitle(newText)}
                                    placeholder="type event title here"
                                    keyboardType="default"
                                />
                        <Text style={pageStyles.title}>
                            CATEGORY
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
                        <TextInput
                            editable={true}
                            maxLength={500}
                            style={pageStyles.input_body}
                            onChangeText={newText => this.onChangeBody(newText)}
                            placeholder={'GetCreative!'}
                            keyboardType="default"
                            textAlign='left'
                            multiline={true}
                        />
                    </View>
                    <View style={pageStyles.submitDiv}>
                        <TouchableOpacity onPress = {this.onSubmit}>
                            <Text style={pageStyles.button}>
                                Submit
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            )
        }else {
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
        maxWidth: Dimensions.get('window').width,
        maxHeight: Dimensions.get('window').height,
        justifyContent: 'center',
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
        maxHeight: '90%',
        flexDirection: 'row',
        borderWidth: 2,
        borderRadius: 10,
        marginTop: 20,
        padding: 0,
    },
    postText: {
        color: 'black',
        fontSize:16,
        textAlign: 'left',
        margin: 15,
    },
    center: {
        backgroundColor: "fffff"
        //backgroundColor: "#d0f0ff",
    },
    title: {
        color: 'black',
        fontSize:16,
        textAlign: 'left',
        fontWeight: '500',
        
    },
    context: {
        color: 'black',
        fontSize: 16,
        textAlign: 'left',
        fontWeight: 'normal',
    },
    input: {
        //width: '100%',
        width: '100%',
        flexDirection: 'column',
        flexWrap: 'wrap',
        flexShrink: 1,
        fontSize: 20,
        textAlign: 'center',
        marginBottom: 8,
    },
    input_body: {
        width: '100%',
        maxWidth: '100%',
        minHeight: 100,
        fontSize: 20,
        textAlign: 'left',
        paddingHorizontal: 10,

        flexShrink: 1,
        flexWrap: 'wrap',
        
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
    submitDiv: {
        paddingTop: 15,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'flex-end'
    },
    button: {
        borderWidth: 2,
        width: 80,
        borderRadius: 10,
        color: "#03f",
        fontSize: 18,
        textAlign: 'center',
        marginRight: 10,
        padding: 2,
        paddingBottom: 0,
    },
});

export default EventCreation;