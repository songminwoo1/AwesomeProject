import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Image} from 'react-native';
import {Dimensions} from 'react-native';

class EventCreation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            category: "", //taxi, food, purchase
            place: "",
        }
    }

    //category = ""; //taxi, food, purchase
    title = "";
    body = "";
    //place = "";
    time = 0;
    num_mem = 0;

    onChangeTitle = (text) => {
        this.title = text;
    }
    onChangeBody = (text) => {
        this.body = text;
    }

    pickCategory = (cat) => {
        this.setState({category: cat});
        //this.category = cat;
    }

    pickPlace = (place) => {
        this.setState({place: place});
        //this.place = place;
    }

    onSubmit = () => {
        //TODO: submit event creation request to the back end.
        
        this._PostEventXHR(this.props.email, this.props.password, this.state.category, this.title, this.body, this.state.place, this.event_time, this.num_mem);
    }

    _PostEventXHR = (email, password, category, title, content, place, event_time, num_mem) => {
        let request = new XMLHttpRequest();
        request.onload = () => {
            let responseObj = request.response;
            //alert(responseObj); //print out response.
            let parsed_response = JSON.parse(responseObj);
            if(parsed_response.exit_code == 0) {
                //TODO: post fail
                // alert("event post failed");
                alert(responseObj); //print out response.
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
                    <Text style={pageStyles.page_title}>
                        [] Posting New Event
                    </Text>
                    <View style={pageStyles.common}>
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
                            DATE & TIME: <Text style={pageStyles.context}>
                                {/*{this.props.eventDT}*/}
                                2022/11/16 13:30:00
                                </Text>
                        </Text>
                        <Text style={pageStyles.title}>
                               BODY
                        </Text>
                        <View style={pageStyles.postContent}> 
                            <TextInput
                                editable={true}
                                maxLength={500}
                                style={pageStyles.input_body}
                                onChangeText={newText => this.onChangeBody(newText)}
                                placeholder={'Be Creative!'}
                                keyboardType="default"
                                textAlign='left'
                                multiline={true}
                            />
                        </View>
                        <Text style={pageStyles.title}>
                            CATEGORY: {this.state.category}
                        </Text>
                        <View style={pageStyles.cat_button_list}>
                            <TouchableOpacity onPress = {() => {this.pickCategory("taxi")}}>
                                <Text style={pageStyles.cat_button}>
                                    taxi
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress = {() => {this.pickCategory("food")}}>
                                <Text style={pageStyles.cat_button}>
                                    food
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress = {() => {this.pickCategory("purchase")}}>
                                <Text style={pageStyles.cat_button}>
                                    purchase
                                </Text>
                            </TouchableOpacity>
                        </View>
                        <Text style={pageStyles.title}>
                            PLACE: {this.state.place}
                        </Text>
                        <View style={pageStyles.cat_button_list}>
                            <TouchableOpacity onPress = {() => {this.pickPlace("E1")}}>
                                <Text style={pageStyles.cat_button}>
                                    E1
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress = {() => {this.pickPlace("E2")}}>
                                <Text style={pageStyles.cat_button}>
                                    E2
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress = {() => {this.pickPlace("E3")}}>
                                <Text style={pageStyles.cat_button}>
                                    E3
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress = {() => {this.pickPlace("E4")}}>
                                <Text style={pageStyles.cat_button}>
                                    E4
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress = {() => {this.pickPlace("E5")}}>
                                <Text style={pageStyles.cat_button}>
                                    E5
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress = {() => {this.pickPlace("E6")}}>
                                <Text style={pageStyles.cat_button}>
                                    E6
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress = {() => {this.pickPlace("E7")}}>
                                <Text style={pageStyles.cat_button}>
                                    E7
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress = {() => {this.pickPlace("E8")}}>
                                <Text style={pageStyles.cat_button}>
                                    E8
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress = {() => {this.pickPlace("E9")}}>
                                <Text style={pageStyles.cat_button}>
                                    E9
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress = {() => {this.pickPlace("E9-1")}}>
                                <Text style={pageStyles.cat_button}>
                                    E9-1
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress = {() => {this.pickPlace("E10")}}>
                                <Text style={pageStyles.cat_button}>
                                    E10
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress = {() => {this.pickPlace("E11")}}>
                                <Text style={pageStyles.cat_button}>
                                    E11
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress = {() => {this.pickPlace("E12")}}>
                                <Text style={pageStyles.cat_button}>
                                    E12
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress = {() => {this.pickPlace("E13")}}>
                                <Text style={pageStyles.cat_button}>
                                    E13
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress = {() => {this.pickPlace("E14")}}>
                                <Text style={pageStyles.cat_button}>
                                    E14
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress = {() => {this.pickPlace("E15")}}>
                                <Text style={pageStyles.cat_button}>
                                    E15
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress = {() => {this.pickPlace("E16")}}>
                                <Text style={pageStyles.cat_button}>
                                    E16
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress = {() => {this.pickPlace("E17")}}>
                                <Text style={pageStyles.cat_button}>
                                    E17
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress = {() => {this.pickPlace("E18-1")}}>
                                <Text style={pageStyles.cat_button}>
                                    E18-1
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress = {() => {this.pickPlace("E18-2")}}>
                                <Text style={pageStyles.cat_button}>
                                    E18-2
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress = {() => {this.pickPlace("E19")}}>
                                <Text style={pageStyles.cat_button}>
                                    E19
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress = {() => {this.pickPlace("E20")}}>
                                <Text style={pageStyles.cat_button}>
                                    E20
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress = {() => {this.pickPlace("E21")}}>
                                <Text style={pageStyles.cat_button}>
                                    E21
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress = {() => {this.pickPlace("N0")}}>
                                <Text style={pageStyles.cat_button}>
                                    N0
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress = {() => {this.pickPlace("N1")}}>
                                <Text style={pageStyles.cat_button}>
                                    N1
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress = {() => {this.pickPlace("N2")}}>
                                <Text style={pageStyles.cat_button}>
                                    N2
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress = {() => {this.pickPlace("N3")}}>
                                <Text style={pageStyles.cat_button}>
                                    N3
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress = {() => {this.pickPlace("N4")}}>
                                <Text style={pageStyles.cat_button}>
                                    N4
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress = {() => {this.pickPlace("N5")}}>
                                <Text style={pageStyles.cat_button}>
                                    N5
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress = {() => {this.pickPlace("N6")}}>
                                <Text style={pageStyles.cat_button}>
                                    N6
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress = {() => {this.pickPlace("N7")}}>
                                <Text style={pageStyles.cat_button}>
                                    N7
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress = {() => {this.pickPlace("N9")}}>
                                <Text style={pageStyles.cat_button}>
                                    N9
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress = {() => {this.pickPlace("N10")}}>
                                <Text style={pageStyles.cat_button}>
                                    N10
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress = {() => {this.pickPlace("N11")}}>
                                <Text style={pageStyles.cat_button}>
                                    N11
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress = {() => {this.pickPlace("N12")}}>
                                <Text style={pageStyles.cat_button}>
                                    N12
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress = {() => {this.pickPlace("N13")}}>
                                <Text style={pageStyles.cat_button}>
                                    N13
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress = {() => {this.pickPlace("N14")}}>
                                <Text style={pageStyles.cat_button}>
                                    N14
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress = {() => {this.pickPlace("N15")}}>
                                <Text style={pageStyles.cat_button}>
                                    N15
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress = {() => {this.pickPlace("N16")}}>
                                <Text style={pageStyles.cat_button}>
                                    N16
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress = {() => {this.pickPlace("N17")}}>
                                <Text style={pageStyles.cat_button}>
                                    N17
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress = {() => {this.pickPlace("N18")}}>
                                <Text style={pageStyles.cat_button}>
                                    N18
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress = {() => {this.pickPlace("N19")}}>
                                <Text style={pageStyles.cat_button}>
                                    N19
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress = {() => {this.pickPlace("N20")}}>
                                <Text style={pageStyles.cat_button}>
                                    N20
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress = {() => {this.pickPlace("N21")}}>
                                <Text style={pageStyles.cat_button}>
                                    N21
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress = {() => {this.pickPlace("N22")}}>
                                <Text style={pageStyles.cat_button}>
                                    N22
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress = {() => {this.pickPlace("N23")}}>
                                <Text style={pageStyles.cat_button}>
                                    N23
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress = {() => {this.pickPlace("N24")}}>
                                <Text style={pageStyles.cat_button}>
                                    N24
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress = {() => {this.pickPlace("N25")}}>
                                <Text style={pageStyles.cat_button}>
                                    N25
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress = {() => {this.pickPlace("N26")}}>
                                <Text style={pageStyles.cat_button}>
                                    N26
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress = {() => {this.pickPlace("N27")}}>
                                <Text style={pageStyles.cat_button}>
                                    N27
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress = {() => {this.pickPlace("N28")}}>
                                <Text style={pageStyles.cat_button}>
                                    N28
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress = {() => {this.pickPlace("W1")}}>
                                <Text style={pageStyles.cat_button}>
                                    W1
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress = {() => {this.pickPlace("W2")}}>
                                <Text style={pageStyles.cat_button}>
                                    W2
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress = {() => {this.pickPlace("W3")}}>
                                <Text style={pageStyles.cat_button}>
                                    W3
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress = {() => {this.pickPlace("W4-1")}}>
                                <Text style={pageStyles.cat_button}>
                                    W4-1
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress = {() => {this.pickPlace("W4-2")}}>
                                <Text style={pageStyles.cat_button}>
                                    W4-2
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress = {() => {this.pickPlace("W4-3")}}>
                                <Text style={pageStyles.cat_button}>
                                    W4-3
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress = {() => {this.pickPlace("W4-4")}}>
                                <Text style={pageStyles.cat_button}>
                                    W4-4
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress = {() => {this.pickPlace("W5-1")}}>
                                <Text style={pageStyles.cat_button}>
                                    W5-1
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress = {() => {this.pickPlace("W5-2")}}>
                                <Text style={pageStyles.cat_button}>
                                    W5-2
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress = {() => {this.pickPlace("W6")}}>
                                <Text style={pageStyles.cat_button}>
                                    W6
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress = {() => {this.pickPlace("W7")}}>
                                <Text style={pageStyles.cat_button}>
                                    W7
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress = {() => {this.pickPlace("W8")}}>
                                <Text style={pageStyles.cat_button}>
                                    W8
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress = {() => {this.pickPlace("W9")}}>
                                <Text style={pageStyles.cat_button}>
                                    W9
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress = {() => {this.pickPlace("W10")}}>
                                <Text style={pageStyles.cat_button}>
                                    W10
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress = {() => {this.pickPlace("W11")}}>
                                <Text style={pageStyles.cat_button}>
                                    W11
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress = {() => {this.pickPlace("W16")}}>
                                <Text style={pageStyles.cat_button}>
                                    W16
                                </Text>
                            </TouchableOpacity>
                            {/* W1 ~ 11, 2-1, x4 4-1, 4-2, 4-3, 4-4, x5 5-1, 5-2, 16 */}
                        </View>
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
    },
    common: {
        width: '100%',
    },
    hidden: {
        display: 'none',
    },
    page_title: {
        paddingHorizontal: 60,
        fontSize: 25,
        fontWeight: '300',
        marginBottom: 15,
        color: '#007'
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
        maxHeight: '30%',
        flexDirection: 'row',
        borderWidth: 2,
        borderRadius: 10,
        margin: 0,
        marginBottom: 5,
        marginHorizontal: 60,
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
        paddingHorizontal: 60,
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
        justifyContent: 'flex-end',
        paddingHorizontal: 60,
    },
    cat_button_list: {
        paddingHorizontal: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        flexWrap: 'wrap',
    },
    cat_button: {
        fontSize: 16,
        textAlign: 'center',
        // borderWidth: 1,
        borderRadius: 8,
        backgroundColor: '#ddf',
        margin: 5,
        marginBottom: 0,
        paddingHorizontal: 7,
        paddingBottom: 2,
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