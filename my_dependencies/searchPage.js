import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput } from 'react-native';
import { Dimensions } from 'react-native';

class SearchPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            page: 'beforeSearch' // afterSearch
        }
    }
    searchText = ''

    onSearchText = (text) => {
        this.searchText = text
    }

    render() {
        if (this.props.page == "search-page") {
            if (this.state.page == 'beforeSearch') {
                return (
                    <View style={pageStyles.container}>
                        <View style={{ flexDirection: 'row' }}>
                            <Image
                                style={{ width: 30, height: 30, marginRight: 10 }}
                                source={{
                                    uri: 'https://cdn-icons-png.flaticon.com/512/61/61088.png'
                                }}
                            />
                            <TextInput
                                style={{ maxWidth: 260 }}
                                onChangeText={(newText) => this.onSearchText(newText)}
                                editable={true}
                                placeholder="Search..."
                                keyboardType="default"
                            />
                        </View>
                        <View style={{ flexDirection: 'row', marginTop: 10, alignItems: 'top' }}>
                            <Text style={pageStyles.text}>
                                CATEGORY :
                            </Text>
                            <View style={{flexDirection: 'row'}}>
                                <TouchableOpacity style={{ alignItems: 'center', marginRight: 30 }}>
                                    <Image
                                        style={{ width: 35, height: 35 }}
                                        source={{
                                            uri: 'https://cdn-icons-png.flaticon.com/512/1801/1801444.png'
                                        }}
                                    />
                                    <Text>
                                        Taxi
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={{ alignItems: 'center', marginRight: 30 }}>
                                    <Image
                                        style={{ width: 35, height: 35 }}
                                        source={{
                                            uri: 'https://cdn-icons-png.flaticon.com/512/3063/3063252.png'
                                        }}
                                    />
                                    <Text>
                                        Food
                                    </Text>
                                    <Text>
                                        Delivery
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={{ alignItems: 'center' }}>
                                    <Image
                                        style={{ width: 35, height: 35 }}
                                        source={{
                                            uri: 'https://cdn-icons-png.flaticon.com/512/2649/2649263.png'
                                        }}
                                    />
                                    <Text>
                                        Group
                                    </Text>
                                    <Text>
                                        Purchase
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={{flexDirection: 'row', marginTop: 10}}>
                            <Text style={pageStyles.text}>
                                EVENT DATE :        
                            </Text>
                        </View>
                    </View>
                )
            } else {
                return (
                    <View style={pageStyles.container}>
                        <Text>
                            this is the search page
                        </Text>
                    </View>
                )
            }
        } else {
            return (
                <View style={pageStyles.hidden}>
                </View>
            )
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
    text: {
        color: 'black',
        fontSize: 16,
        textAlign: 'left',
        fontWeight: '500',
        lineHeight: 30,
        marginRight: 10
    },
    button: {
        borderWidth: 2,
        borderRadius: 10,
        borderColor: 'white',
        color: 'white',
        textAlign: 'center',
        marginRight: 10,
        marginHorizontal: '0%',
        padding: 10,
        backgroundColor: '#000080',
        overflow: 'hidden'
    }
});

export default SearchPage;