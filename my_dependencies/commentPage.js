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
                    {this.props.comment_data.map((e) => <Comment data={e} email={this.props.email} eraseFunc={() => {}}/>)}
                </View>
            );
        }else{
            return(
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
});

export default CommentPage;