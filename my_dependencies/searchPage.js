import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput} from 'react-native';
import {Dimensions} from 'react-native';

class SearchPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            is_loggedin: false,
        }
    }

    render() {
        if(this.props.page == "search-page") {
            <View style={pageStyles.container}>
                <Text>
                    this is the search page
                </Text>
            </View>
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
    },
    hidden: {
        display: 'none',
    },
});

export default SearchPage;