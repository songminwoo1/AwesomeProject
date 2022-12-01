import React from 'react';
import { StyleSheet, Button, Text, View, TouchableOpacity, TextInput, Image, SafeAreaView, ScrollView, RefreshControl} from 'react-native';
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
        this.props.commentFunc(this.comment_text);
    }

    PostCommentAndClearText = () => {
        this.PostComment();
        this.textInput.clear();
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
                    <View style={{ flexDirection: 'row', bottomMargin: 10 }}>
                        <TextInput
                            editable={true}
                            maxLength={120}
                            style={pageStyles.input_body}
                            onChangeText={newText => this.onCommentWrite(newText)}
                            placeholder={'Add a comment...'}
                            keyboardType="default"
                            textAlign='left'
                            borderWidth='2'
                            borderRadius='15'
                            multiline={true}
                            blurOnSubmit={true}
                            ref={input => { this.textInput = input }} 
                        />
                        
                        <TouchableOpacity onPress={this.PostCommentAndClearText}>
                            <Text style={pageStyles.button}>
                                Post
                            </Text>
                        </TouchableOpacity>
                    </View>
                    {this.props.comment_data.map((e) => <Comment data={e} email={this.props.email} eraseFunc={() => { }} />)}
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
        padding: 35
    },
    hidden: {
        display: 'none',
    },
    input_body: {
        width: 280,
        maxWidth: '100%',
        minHeight: 35,
        fontSize: 16,
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