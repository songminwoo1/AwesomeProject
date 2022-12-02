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
                        <View style={pageStyles.container3}>
                            <TouchableOpacity onPress={this.onBack}>
                                <Image
                                    style={pageStyles.image1}
                                    source={{
                                        uri: 'https://cdn-icons-png.flaticon.com/512/2/2144.png'
                                    }}
                                />
                            </TouchableOpacity>
                        </View>
                        <View style={pageStyles.container4}>
                            <Image
                                style={pageStyles.image2}
                                source={{
                                    uri: 'https://cdn-icons-png.flaticon.com/512/61/61088.png'
                                }}
                            />
                            <TextInput
                                style={pageStyles.inputText2}
                                onChangeText={(newText) => this.onChangeSearch(newText)}
                                editable={true}
                                placeholder="Search..."
                                keyboardType="default"
                            />
                        </View>
                        <View style={pageStyles.container5}>
                            <Text style={pageStyles.myText}>
                                CATEGORY :
                            </Text>
                            <View style={pageStyles.container4}>
                                <TouchableOpacity style={pageStyles.catButton}
                                    onPress={this.pickCategory('taxi')} >
                                    <Image
                                        style={pageStyles.catImage}
                                        source={{
                                            uri: 'https://cdn-icons-png.flaticon.com/512/1801/1801444.png'
                                        }}
                                    />
                                    <Text>
                                        Taxi
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={pageStyles.catButton}
                                    onPress={this.pickCategory('food')}>
                                    <Image
                                        style={pageStyles.catImage}
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
                                <TouchableOpacity style={pageStyles.catButton}
                                    onPress={this.pickCategory('purchase')}>
                                    <Image
                                        style={pageStyles.catImage}
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
                        <View style={pageStyles.container6}>
                            <Text style={pageStyles.myText}>
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
                            <Text style={pageStyles.slash}>
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
                            <Text style={pageStyles.slash}>
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
                            <Text style={pageStyles.slash}>
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
                            <Text style={pageStyles.slash}>
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
                            <Text style={pageStyles.slash}>
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
                        <View style={pageStyles.container7}>
                            <Text style={pageStyles.myText}>
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
                            <Text style={pageStyles.slash}>
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
                            <Text style={pageStyles.slash}>
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
                            <Text style={pageStyles.slash}>
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
                        <View style={pageStyles.container8}>
                            <Text style={pageStyles.myText}>
                                LOCATION :
                            </Text>
                            <View style={pageStyles.locations}>
                                <TouchableOpacity onPress={() => { this.pickPlace("E1") }}>
                                    <Text style={pageStyles.myButton}>
                                        E1
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => { this.pickPlace("E2") }}>
                                    <Text style={pageStyles.myButton}>
                                        E2
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => { this.pickPlace("E3") }}>
                                    <Text style={pageStyles.myButton}>
                                        E3
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => { this.pickPlace("E4") }}>
                                    <Text style={pageStyles.myButton}>
                                        E4
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => { this.pickPlace("E5") }}>
                                    <Text style={pageStyles.myButton}>
                                        E5
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => { this.pickPlace("E6") }}>
                                    <Text style={pageStyles.myButton}>
                                        E6
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => { this.pickPlace("E7") }}>
                                    <Text style={pageStyles.myButton}>
                                        E7
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => { this.pickPlace("E8") }}>
                                    <Text style={pageStyles.myButton}>
                                        E8
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => { this.pickPlace("E9") }}>
                                    <Text style={pageStyles.myButton}>
                                        E9
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => { this.pickPlace("E9-1") }}>
                                    <Text style={pageStyles.myButton}>
                                        E9-1
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => { this.pickPlace("E10") }}>
                                    <Text style={pageStyles.myButton}>
                                        E10
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => { this.pickPlace("E11") }}>
                                    <Text style={pageStyles.myButton}>
                                        E11
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => { this.pickPlace("E12") }}>
                                    <Text style={pageStyles.myButton}>
                                        E12
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => { this.pickPlace("E13") }}>
                                    <Text style={pageStyles.myButton}>
                                        E13
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => { this.pickPlace("E14") }}>
                                    <Text style={pageStyles.myButton}>
                                        E14
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => { this.pickPlace("E15") }}>
                                    <Text style={pageStyles.myButton}>
                                        E15
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => { this.pickPlace("E16") }}>
                                    <Text style={pageStyles.myButton}>
                                        E16
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => { this.pickPlace("E17") }}>
                                    <Text style={pageStyles.myButton}>
                                        E17
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => { this.pickPlace("E18-1") }}>
                                    <Text style={pageStyles.myButton}>
                                        E18-1
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => { this.pickPlace("E18-2") }}>
                                    <Text style={pageStyles.myButton}>
                                        E18-2
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => { this.pickPlace("E19") }}>
                                    <Text style={pageStyles.myButton}>
                                        E19
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => { this.pickPlace("E20") }}>
                                    <Text style={pageStyles.myButton}>
                                        E20
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => { this.pickPlace("E21") }}>
                                    <Text style={pageStyles.myButton}>
                                        E21
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => { this.pickPlace("N0") }}>
                                    <Text style={pageStyles.myButton}>
                                        N0
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => { this.pickPlace("N1") }}>
                                    <Text style={pageStyles.myButton}>
                                        N1
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => { this.pickPlace("N2") }}>
                                    <Text style={pageStyles.myButton}>
                                        N2
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => { this.pickPlace("N3") }}>
                                    <Text style={pageStyles.myButton}>
                                        N3
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => { this.pickPlace("N4") }}>
                                    <Text style={pageStyles.myButton}>
                                        N4
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => { this.pickPlace("N5") }}>
                                    <Text style={pageStyles.myButton}>
                                        N5
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => { this.pickPlace("N6") }}>
                                    <Text style={pageStyles.myButton}>
                                        N6
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => { this.pickPlace("N7") }}>
                                    <Text style={pageStyles.myButton}>
                                        N7
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => { this.pickPlace("N9") }}>
                                    <Text style={pageStyles.myButton}>
                                        N9
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => { this.pickPlace("N10") }}>
                                    <Text style={pageStyles.myButton}>
                                        N10
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => { this.pickPlace("N11") }}>
                                    <Text style={pageStyles.myButton}>
                                        N11
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => { this.pickPlace("N12") }}>
                                    <Text style={pageStyles.myButton}>
                                        N12
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => { this.pickPlace("N13") }}>
                                    <Text style={pageStyles.myButton}>
                                        N13
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => { this.pickPlace("N14") }}>
                                    <Text style={pageStyles.myButton}>
                                        N14
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => { this.pickPlace("N15") }}>
                                    <Text style={pageStyles.myButton}>
                                        N15
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => { this.pickPlace("N16") }}>
                                    <Text style={pageStyles.myButton}>
                                        N16
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => { this.pickPlace("N17") }}>
                                    <Text style={pageStyles.myButton}>
                                        N17
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => { this.pickPlace("N18") }}>
                                    <Text style={pageStyles.myButton}>
                                        N18
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => { this.pickPlace("N19") }}>
                                    <Text style={pageStyles.myButton}>
                                        N19
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => { this.pickPlace("N20") }}>
                                    <Text style={pageStyles.myButton}>
                                        N20
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => { this.pickPlace("N21") }}>
                                    <Text style={pageStyles.myButton}>
                                        N21
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => { this.pickPlace("N22") }}>
                                    <Text style={pageStyles.myButton}>
                                        N22
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => { this.pickPlace("N23") }}>
                                    <Text style={pageStyles.myButton}>
                                        N23
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => { this.pickPlace("N24") }}>
                                    <Text style={pageStyles.myButton}>
                                        N24
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => { this.pickPlace("N25") }}>
                                    <Text style={pageStyles.myButton}>
                                        N25
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => { this.pickPlace("N26") }}>
                                    <Text style={pageStyles.myButton}>
                                        N26
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => { this.pickPlace("N27") }}>
                                    <Text style={pageStyles.myButton}>
                                        N27
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => { this.pickPlace("N28") }}>
                                    <Text style={pageStyles.myButton}>
                                        N28
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => { this.pickPlace("W1") }}>
                                    <Text style={pageStyles.myButton}>
                                        W1
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => { this.pickPlace("W2") }}>
                                    <Text style={pageStyles.myButton}>
                                        W2
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => { this.pickPlace("W3") }}>
                                    <Text style={pageStyles.myButton}>
                                        W3
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => { this.pickPlace("W4-1") }}>
                                    <Text style={pageStyles.myButton}>
                                        W4-1
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => { this.pickPlace("W4-2") }}>
                                    <Text style={pageStyles.myButton}>
                                        W4-2
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => { this.pickPlace("W4-3") }}>
                                    <Text style={pageStyles.myButton}>
                                        W4-3
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => { this.pickPlace("W4-4") }}>
                                    <Text style={pageStyles.myButton}>
                                        W4-4
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => { this.pickPlace("W5-1") }}>
                                    <Text style={pageStyles.myButton}>
                                        W5-1
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => { this.pickPlace("W5-2") }}>
                                    <Text style={pageStyles.myButton}>
                                        W5-2
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => { this.pickPlace("W6") }}>
                                    <Text style={pageStyles.myButton}>
                                        W6
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => { this.pickPlace("W7") }}>
                                    <Text style={pageStyles.myButton}>
                                        W7
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => { this.pickPlace("W8") }}>
                                    <Text style={pageStyles.myButton}>
                                        W8
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => { this.pickPlace("W9") }}>
                                    <Text style={pageStyles.myButton}>
                                        W9
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => { this.pickPlace("W10") }}>
                                    <Text style={pageStyles.myButton}>
                                        W10
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => { this.pickPlace("W11") }}>
                                    <Text style={pageStyles.myButton}>
                                        W11
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => { this.pickPlace("W16") }}>
                                    <Text style={pageStyles.myButton}>
                                        W16
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <TouchableOpacity style={pageStyles.searchButton}>
                            <Text style={pageStyles.myButton2} onPress = {this.onSearch}>
                                SEARCH
                            </Text>
                        </TouchableOpacity>
                    </View>
                )
            } else if (this.state.page == 'afterSearch') {
                return (
                    <View style={pageStyles.container}>
                        <View style={pageStyles.container9}>
                            <View style={pageStyles.container10} />
                            <View>
                                <Text style={pageStyles.myText2}>SEARCH RESULTS</Text>
                            </View>
                            <View style={pageStyles.container10} />
                        </View>
                        <View style={pageStyles.container2}>

                        </View>
                        <View>
                        <TouchableOpacity style={pageStyles.searchAgainButton} onPress = {this.onSearchAgain}>
                            <Text style={pageStyles.myButton3}>
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
    container3: {
        justifyContent: 'flex-start',
        marginBottom: 20 
    },
    container4: {
        flexDirection: 'row' 
    },
    container5:{
        flexDirection: 'row', 
        marginTop: 10,
        alignItems: 'top' 
    },
    container6: { 
        flexDirection: 'row', 
        marginTop: 10, 
        alignItems: 'center' 
    },
    container7: { 
        flexDirection: 'row', 
        marginTop: 10, 
        alignItems: 'center' 
    },
    container8: {
        flexDirection: 'row', 
        marginTop: 10, 
        alignItems: 'top', 
        paddingRight:30
    },
    container9: {
        flexDirection: 'row', 
        alignItems: 'center' 
    },
    container10: {
        flex: 1, 
        height: 1, 
        backgroundColor: 'black' 
    },
    image1: {
        width: 40, 
        height: 40 
    },
    image2: { 
        width: 30, 
        height: 30, 
        marginRight: 10 
    },
    catImage: {
        width: 35, 
        height: 35 
    },
    hidden: {
        display: 'none',
    },
    myText: {
        color: 'black',
        fontSize: 16,
        textAlign: 'left',
        fontWeight: '500',
        lineHeight: 30,
        marginRight: 10
    },
    myText2: {
        textAlign: 'center',
        marginLeft: 8, 
        marginRight: 8, 
        fontWeight:'600'
    },
    inputText: {
        fontSize: 16,
    },
    inputText2: {
        maxWidth: 260 
    },
    myButton: {
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
    myButton2: {
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
    myButton3: {
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
    catButton: {
        alignItems: 'center', 
        marginRight: 30 
    },
    searchButton:{
        marginTop: 15 
    },
    searchAgainButton:{
        marginTop: 30
    },
    locations: {
        paddingRight: 60,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        flexWrap: 'wrap',
    },
    slash: {
        marginLeft: 5, 
        marginRight: 5, 
        fontSize: 16 
    }
});

export default SearchPage;