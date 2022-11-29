import React from 'react';
import { StyleSheet, Button, Text, View, TouchableOpacity, TextInput, Image, SafeAreaView, ScrollView } from 'react-native';
import { Dimensions } from 'react-native';


class Comment extends React.Component {
    constructor(props) {
        super(props);
    }
    
    //props.data: [1, 'commentmailA@kaist.ac.kr', 'commenterA', 'this is A comment.', 42]
    //props.eraseFunc: suppose that by calling eraseFunc() when the writer of this comment presses button, the comment gets erased and page is refreshed.
    //you don't have to implement refreshing sequence. we just need button for it.

    //TODO: design displaying commenter/comment body and erasing button, optionally when props.data[1] == props.email
    render() {
        return (
            <View style={pageStyles.container}>
                <Text>
                    {this.props.data[2]}
                </Text>
                <Text>
                    {this.props.data[3]}
                </Text>
            </View>
        );
    }
}


const pageStyles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        width: '100%',
        borderWidth: 1,
        justifyContent: 'center',
    },
});

export default Comment;