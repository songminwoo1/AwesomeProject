import React from 'react';
import { StyleSheet, Button, Text, View, TouchableOpacity, TextInput, Image, SafeAreaView, ScrollView } from 'react-native';
import { Dimensions } from 'react-native';
import Comment from './comment';

class CommentPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            page: 'event', // 'event', 'Comment'
        }
    }
    
    onBack = () => { //to get out of the Comment page 
        this.props.eventPageFunc()
    }
    comment_text = "";
    onCommentWrite = (text) => {
        this.comment_text = text;
    }
    PostComment = () => {
        let text = this.comment_text;
        this.textInput.clear();
        this.props.commentFunc(text);
    }
    render() {
        if (this.props.page == "comment-page") {
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
                    <TextInput
                        editable={true}
                        maxLength={120}
                        style={pageStyles.input_body}
                        onChangeText={newText => this.onCommentWrite(newText)}
                        placeholder={'you comment here'}
                        keyboardType="default"
                        textAlign='left'
                        multiline={true}
                        ref={input => { this.textInput = input }}
                    />
                    <TouchableOpacity onPress={this.PostComment}>
                        <Text style={pageStyles.button}>
                                Post
                        </Text>
                    </TouchableOpacity>
                    {this.props.comment_data.map((e) => <Comment data={e} email={this.props.email} eraseFunc={this.props.commentDeleteFunc}/>)}
                </View>
            );
        } else {
            return (
                <View style={pageStyles.hidden}>
                </View>
            );
        }
    }
}

const pageStyles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        minWidth: Dimensions.get('window').width,
        minHeight: Dimensions.get('window').height,
        justifyContent: 'center',
        padding: 60
    },
    hidden: {
        display: 'none',
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
    button: {
        borderWidth: 2,
        borderRadius: 10,
        borderColor: '#CBC3E3',
        color: 'black',
        fontSize: 16,
        textAlign: 'center',
        marginLeft: 5,
        marginHorizontal: '0%',
        padding: 10,
        backgroundColor: '#CBC3E3',
        overflow: 'hidden'
    },
});

export default CommentPage;