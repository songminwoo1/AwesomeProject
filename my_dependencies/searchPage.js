import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput} from 'react-native';
import { Dimensions } from 'react-native';

class SearchPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            page: 'beforeSearch' // afterSearch
        }
    }
    search = ""
    category = ""
    place = ""

    // date for the "from" part 
    year_f = ""
    month_f = ""
    day_f = ""
    hour_f = ""
    min_f = ""

    //date for the "to" part
    year_t = ""
    month_t = ""
    day_t = ""
    hour_t = ""
    min_t = ""

    onBack = () => { //to get out of the Comment page 
        this.props.mainPageFunc()
    }

    onChangeSearch = (text) => {
        this.search = text
    }

    onSearch = () => {
        this.setState({ page: 'afterSearch' })
    }

    onSearchAgain = () => {
        this.setState({ page: 'beforeSearch' })
    }

    pickCategory = (cat) => {
        this.category = cat
    }

    pickPlace = (place) => {
        this.place = place;
    }

    onChangeYear_f = (text) => {
        this.year_f = text
    }

    onChangeMonth_f = (text) => {
        this.month_f = text
    }

    onChangeDay_f = (text) => {
        this.day_f = text
    }

    onChangeHour_f = (text) => {
        this.hour_f = text
    }

    onChangeMin_f = (text) => {
        this.min_f = text
    }

    onChangeYear_t = (text) => {
        this.year_t = text
    }

    onChangeMonth_t = (text) => {
        this.month_t = text
    }

    onChangeDay_t = (text) => {
        this.day_t = text
    }

    onChangeHour_t = (text) => {
        this.hour_t = text
    }

    onChangeMin_t = (text) => {
        this.min_t = text
    }

    render() {
        if (this.props.page == "search-page") {
            if (this.state.page == 'beforeSearch') {
                return (
                    <View style={pageStyles.container}>
                        <View style={{ justifyContent: 'flex-start', marginBottom: 20 }}>
                            <TouchableOpacity onPress={this.onBack}>
                                <Image
                                    style={{ width: 40, height: 40 }}
                                    source={{
                                        uri: 'https://cdn-icons-png.flaticon.com/512/2/2144.png'
                                    }}
                                />
                            </TouchableOpacity>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <Image
                                style={{ width: 30, height: 30, marginRight: 10 }}
                                source={{
                                    uri: 'https://cdn-icons-png.flaticon.com/512/61/61088.png'
                                }}
                            />
                            <TextInput
                                style={{ maxWidth: 260 }}
                                onChangeText={(newText) => this.onChangeSearch(newText)}
                                editable={true}
                                placeholder="Search..."
                                keyboardType="default"
                            />
                        </View>
                        <View style={{ flexDirection: 'row', marginTop: 10, alignItems: 'top' }}>
                            <Text style={pageStyles.text}>
                                CATEGORY :
                            </Text>
                            <View style={{ flexDirection: 'row' }}>
                                <TouchableOpacity style={{ alignItems: 'center', marginRight: 30 }}
                                    onPress={this.pickCategory('taxi')} >
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
                                <TouchableOpacity style={{ alignItems: 'center', marginRight: 30 }}
                                    onPress={this.pickCategory('food')}>
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
                                <TouchableOpacity style={{ alignItems: 'center' }}
                                    onPress={this.pickCategory('purchase')}>
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
                        <View style={{ flexDirection: 'row', marginTop: 10, alignItems: 'center' }}>
                            <Text style={pageStyles.text}>
                                EVENT DATE :
                            </Text>
                            <TextInput
                                editable={true}
                                maxLength={4}
                                onChangeText={newText => this.onChangeYear_f(newText)}
                                placeholder={'yyyy'}
                                style={pageStyles.inputText}
                                keyboardType="numeric"
                            />
                            <Text style={{ marginLeft: 5, marginRight: 5, fontSize: 16 }}>
                                /
                            </Text>
                            <TextInput
                                editable={true}
                                maxLength={2}
                                onChangeText={newText => this.onChangeMonth_f(newText)}
                                placeholder={'mm'}
                                style={pageStyles.inputText}
                                keyboardType="numeric"
                            />
                            <Text style={{ marginLeft: 5, marginRight: 5, fontSize: 16 }}>
                                /
                            </Text>
                            <TextInput
                                editable={true}
                                maxLength={2}
                                onChangeText={newText => this.onChangeDay_f(newText)}
                                placeholder={'dd'}
                                style={pageStyles.inputText}
                                keyboardType="numeric"
                            />
                            <Text style={{ marginLeft: 5, marginRight: 5, fontSize: 16 }}>
                                to
                            </Text>
                            <TextInput
                                editable={true}
                                maxLength={4}
                                onChangeText={newText => this.onChangeYear_t(newText)}
                                placeholder={'yyyy'}
                                style={pageStyles.inputText}
                                keyboardType="numeric"
                            />
                            <Text style={{ marginLeft: 5, marginRight: 5, fontSize: 16 }}>
                                /
                            </Text>
                            <TextInput
                                editable={true}
                                maxLength={2}
                                onChangeText={newText => this.onChangeMonth_t(newText)}
                                placeholder={'mm'}
                                style={pageStyles.inputText}
                                keyboardType="numeric"
                            />
                            <Text style={{ marginLeft: 5, marginRight: 5, fontSize: 16 }}>
                                /
                            </Text>
                            <TextInput
                                editable={true}
                                maxLength={2}
                                onChangeText={newText => this.onChangeDay_t(newText)}
                                placeholder={'dd'}
                                style={pageStyles.inputText}
                                keyboardType="numeric"
                            />
                        </View>
                        <View style={{ flexDirection: 'row', marginTop: 10, alignItems: 'center' }}>
                            <Text style={pageStyles.text}>
                                EVENT TIME :
                            </Text>
                            <TextInput
                                editable={true}
                                maxLength={2}
                                onChangeText={newText => this.onChangeHour_f(newText)}
                                placeholder={'hr'}
                                style={pageStyles.inputText}
                                keyboardType="numeric"
                            />
                            <Text style={{ marginLeft: 5, marginRight: 5, fontSize: 16 }}>
                                :
                            </Text>
                            <TextInput
                                editable={true}
                                maxLength={2}
                                onChangeText={newText => this.onChangeMin_f(newText)}
                                placeholder={'min'}
                                style={pageStyles.inputText}
                                keyboardType="numeric"
                            />
                            <Text style={{ marginLeft: 5, marginRight: 5, fontSize: 16 }}>
                                to
                            </Text>
                            <TextInput
                                editable={true}
                                maxLength={2}
                                onChangeText={newText => this.onChangeHour_t(newText)}
                                placeholder={'hr'}
                                style={pageStyles.inputText}
                                keyboardType="numeric"
                            />
                            <Text style={{ marginLeft: 5, marginRight: 5, fontSize: 16 }}>
                                :
                            </Text>
                            <TextInput
                                editable={true}
                                maxLength={2}
                                onChangeText={newText => this.onChangeMin_t(newText)}
                                placeholder={'min'}
                                style={pageStyles.inputText}
                                keyboardType="numeric"
                            />
                        </View>
                        <View style={{ flexDirection: 'row', marginTop: 10, alignItems: 'top', paddingRight:30}}>
                            <Text style={pageStyles.text}>
                                LOCATION :
                            </Text>
                            <View style={pageStyles.locations}>
                                <TouchableOpacity onPress={() => { this.pickPlace("E1") }}>
                                    <Text style={pageStyles.button}>
                                        E1
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => { this.pickPlace("E2") }}>
                                    <Text style={pageStyles.button}>
                                        E2
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => { this.pickPlace("E3") }}>
                                    <Text style={pageStyles.button}>
                                        E3
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => { this.pickPlace("E4") }}>
                                    <Text style={pageStyles.button}>
                                        E4
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => { this.pickPlace("E5") }}>
                                    <Text style={pageStyles.button}>
                                        E5
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => { this.pickPlace("E6") }}>
                                    <Text style={pageStyles.button}>
                                        E6
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => { this.pickPlace("E7") }}>
                                    <Text style={pageStyles.button}>
                                        E7
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => { this.pickPlace("E8") }}>
                                    <Text style={pageStyles.button}>
                                        E8
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => { this.pickPlace("E9") }}>
                                    <Text style={pageStyles.button}>
                                        E9
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => { this.pickPlace("E9-1") }}>
                                    <Text style={pageStyles.button}>
                                        E9-1
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => { this.pickPlace("E10") }}>
                                    <Text style={pageStyles.button}>
                                        E10
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => { this.pickPlace("E11") }}>
                                    <Text style={pageStyles.button}>
                                        E11
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => { this.pickPlace("E12") }}>
                                    <Text style={pageStyles.button}>
                                        E12
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => { this.pickPlace("E13") }}>
                                    <Text style={pageStyles.button}>
                                        E13
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => { this.pickPlace("E14") }}>
                                    <Text style={pageStyles.button}>
                                        E14
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => { this.pickPlace("E15") }}>
                                    <Text style={pageStyles.button}>
                                        E15
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => { this.pickPlace("E16") }}>
                                    <Text style={pageStyles.button}>
                                        E16
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => { this.pickPlace("E17") }}>
                                    <Text style={pageStyles.button}>
                                        E17
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => { this.pickPlace("E18-1") }}>
                                    <Text style={pageStyles.button}>
                                        E18-1
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => { this.pickPlace("E18-2") }}>
                                    <Text style={pageStyles.button}>
                                        E18-2
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => { this.pickPlace("E19") }}>
                                    <Text style={pageStyles.button}>
                                        E19
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => { this.pickPlace("E20") }}>
                                    <Text style={pageStyles.button}>
                                        E20
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => { this.pickPlace("E21") }}>
                                    <Text style={pageStyles.button}>
                                        E21
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => { this.pickPlace("N0") }}>
                                    <Text style={pageStyles.button}>
                                        N0
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => { this.pickPlace("N1") }}>
                                    <Text style={pageStyles.button}>
                                        N1
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => { this.pickPlace("N2") }}>
                                    <Text style={pageStyles.button}>
                                        N2
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => { this.pickPlace("N3") }}>
                                    <Text style={pageStyles.button}>
                                        N3
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => { this.pickPlace("N4") }}>
                                    <Text style={pageStyles.button}>
                                        N4
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => { this.pickPlace("N5") }}>
                                    <Text style={pageStyles.button}>
                                        N5
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => { this.pickPlace("N6") }}>
                                    <Text style={pageStyles.button}>
                                        N6
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => { this.pickPlace("N7") }}>
                                    <Text style={pageStyles.button}>
                                        N7
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => { this.pickPlace("N9") }}>
                                    <Text style={pageStyles.button}>
                                        N9
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => { this.pickPlace("N10") }}>
                                    <Text style={pageStyles.button}>
                                        N10
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => { this.pickPlace("N11") }}>
                                    <Text style={pageStyles.button}>
                                        N11
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => { this.pickPlace("N12") }}>
                                    <Text style={pageStyles.button}>
                                        N12
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => { this.pickPlace("N13") }}>
                                    <Text style={pageStyles.button}>
                                        N13
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => { this.pickPlace("N14") }}>
                                    <Text style={pageStyles.button}>
                                        N14
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => { this.pickPlace("N15") }}>
                                    <Text style={pageStyles.button}>
                                        N15
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => { this.pickPlace("N16") }}>
                                    <Text style={pageStyles.button}>
                                        N16
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => { this.pickPlace("N17") }}>
                                    <Text style={pageStyles.button}>
                                        N17
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => { this.pickPlace("N18") }}>
                                    <Text style={pageStyles.button}>
                                        N18
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => { this.pickPlace("N19") }}>
                                    <Text style={pageStyles.button}>
                                        N19
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => { this.pickPlace("N20") }}>
                                    <Text style={pageStyles.button}>
                                        N20
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => { this.pickPlace("N21") }}>
                                    <Text style={pageStyles.button}>
                                        N21
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => { this.pickPlace("N22") }}>
                                    <Text style={pageStyles.button}>
                                        N22
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => { this.pickPlace("N23") }}>
                                    <Text style={pageStyles.button}>
                                        N23
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => { this.pickPlace("N24") }}>
                                    <Text style={pageStyles.button}>
                                        N24
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => { this.pickPlace("N25") }}>
                                    <Text style={pageStyles.button}>
                                        N25
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => { this.pickPlace("N26") }}>
                                    <Text style={pageStyles.button}>
                                        N26
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => { this.pickPlace("N27") }}>
                                    <Text style={pageStyles.button}>
                                        N27
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => { this.pickPlace("N28") }}>
                                    <Text style={pageStyles.button}>
                                        N28
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => { this.pickPlace("W1") }}>
                                    <Text style={pageStyles.button}>
                                        W1
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => { this.pickPlace("W2") }}>
                                    <Text style={pageStyles.button}>
                                        W2
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => { this.pickPlace("W3") }}>
                                    <Text style={pageStyles.button}>
                                        W3
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => { this.pickPlace("W4-1") }}>
                                    <Text style={pageStyles.button}>
                                        W4-1
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => { this.pickPlace("W4-2") }}>
                                    <Text style={pageStyles.button}>
                                        W4-2
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => { this.pickPlace("W4-3") }}>
                                    <Text style={pageStyles.button}>
                                        W4-3
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => { this.pickPlace("W4-4") }}>
                                    <Text style={pageStyles.button}>
                                        W4-4
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => { this.pickPlace("W5-1") }}>
                                    <Text style={pageStyles.button}>
                                        W5-1
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => { this.pickPlace("W5-2") }}>
                                    <Text style={pageStyles.button}>
                                        W5-2
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => { this.pickPlace("W6") }}>
                                    <Text style={pageStyles.button}>
                                        W6
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => { this.pickPlace("W7") }}>
                                    <Text style={pageStyles.button}>
                                        W7
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => { this.pickPlace("W8") }}>
                                    <Text style={pageStyles.button}>
                                        W8
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => { this.pickPlace("W9") }}>
                                    <Text style={pageStyles.button}>
                                        W9
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => { this.pickPlace("W10") }}>
                                    <Text style={pageStyles.button}>
                                        W10
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => { this.pickPlace("W11") }}>
                                    <Text style={pageStyles.button}>
                                        W11
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => { this.pickPlace("W16") }}>
                                    <Text style={pageStyles.button}>
                                        W16
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <TouchableOpacity style={{ marginTop: 15 }}>
                            <Text style={pageStyles.button2} onPress = {this.onSearch}>
                                SEARCH
                            </Text>
                        </TouchableOpacity>
                    </View>
                )
            } else if (this.state.page == 'afterSearch') {
                return (
                    <View style={pageStyles.container}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <View style={{ flex: 1, height: 1, backgroundColor: 'black' }} />
                            <View>
                                <Text style={{textAlign: 'center', marginLeft: 8, marginRight: 8, fontWeight:'600'}}>SEARCH RESULTS</Text>
                            </View>
                            <View style={{ flex: 1, height: 1, backgroundColor: 'black' }} />
                        </View>
                        <View style={pageStyles.container2}>

                        </View>
                        <View>
                        <TouchableOpacity style={{ marginTop: 30 }} onPress = {this.onSearchAgain}>
                            <Text style={pageStyles.button3}>
                                Search Again
                            </Text>
                        </TouchableOpacity>
                        </View>
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
        maxWidth: Dimensions.get('window').width,
        maxHeight: Dimensions.get('window').height,
        justifyContent: 'center',
        padding: 35,
    },
    container2: {
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#aaa',
        marginTop: 40,
        width: '100%',
        height: '80%',
        backgroundColor: '#fdfdff',
        alignItems: 'center',
        justifyContent: 'center',
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
    inputText: {
        fontSize: 16,
    },
    button: {
        borderWidth: 2,
        borderRadius: 10,
        borderColor: 'white',
        color: 'black',
        fontSize: 11,
        textAlign: 'center',
        marginHorizontal: '0%',
        padding: 10,
        backgroundColor: '#CBC3E3',
        overflow: 'hidden'
    },
    button2: {
        borderWidth: 2,
        borderRadius: 10,
        borderColor: 'white',
        color: 'black',
        fontWeight: '700',
        fontSize: 16,
        textAlign: 'center',
        marginRight: 10,
        marginHorizontal: '0%',
        padding: 10,
        backgroundColor: 'lightgrey',
        overflow: 'hidden'
    },
    button3: {
        borderWidth: 2,
        borderRadius: 10,
        borderColor: 'white',
        color: 'black',
        fontWeight: '500',
        fontSize: 16,
        textAlign: 'center',
        marginRight: 10,
        marginHorizontal: '0%',
        padding: 10,
        backgroundColor: 'lightgrey',
        overflow: 'hidden'
    },
    locations: {
        paddingRight: 60,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        flexWrap: 'wrap',
    }
});

export default SearchPage;