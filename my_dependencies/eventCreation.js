import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Image} from 'react-native';
import {Dimensions} from 'react-native';

class EventCreation extends React.Component {
    constructor(props) {
        super(props);
    }

    title = "";
    body = "";

    onChangeTitle = (text) => {
        this.title = text;
    }
    onChangeBody = (text) => {
        this.body = text;
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
                            style={pageStyles.input}
                            onChangeText={newText => this.onChangeBody(newText)}
                            placeholder={'You can write anything here. \n GetCreative!'}
                            keyboardType="default"
                        />
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
        borderWidth: 2,
        borderRadius: 10,
        marginTop: 20
    },
    postText: {
        color: 'black',
        fontSize:16,
        textAlign: 'left',
        margin: 15 
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
        fontSize:16,
        textAlign: 'left',
        fontWeight: 'normal'
    },
    input: {
        //width: '100%',
        width: 200,
        flexDirection: 'column',
        flexWrap: 'wrap',
        flexShrink: 1,
        fontSize: 20,
        textAlign: 'center',
        marginBottom: 8,
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
        color: "green",
        textAlign: 'center',
        marginRight: 10,
        marginHorizontal: '0%',
        padding: 10
    },
});

export default EventCreation;