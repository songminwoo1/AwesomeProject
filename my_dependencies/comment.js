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
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <View style={{ flexDirection: 'column' }}>
                        <Text style={{ color: 'blue', fontSize: 16, fontWeight: '500'}}>
                            {this.props.data[2]}
                        </Text>
                        <Text style={{maxWidth: 320}}>
                            {this.props.data[3]}
                        </Text>
                    </View>
                    <View style={{ justifyContent: 'flex-end' }}>
                        <TouchableOpacity onPress={this.props.eraseFunc()}>
                            <Image
                                style={{ width: 20, height: 20 }}
                                source={{
                                    uri: 'https://cdn-icons-png.flaticon.com/512/1214/1214428.png'
                                }}
                            />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }
}


const pageStyles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        width: '100%',
        justifyContent: 'center',
        marginTop: 10
    },
});

export default Comment;