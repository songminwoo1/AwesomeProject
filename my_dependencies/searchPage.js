import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput } from 'react-native';
import { Dimensions } from 'react-native';
import BoardItems from './boardItems';

const KorTimeToGMT = (t) => {
    return t - 32400;
}

const GMTToKorTime = (t) => {
    return t + 32400;
}

class SearchPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            itemTable: [],
            
            category: "##ALL##", //taxi, food, purchase
            place: "##ALL##",
        
            page: 'beforeSearch' // afterSearch
        }
    }
    
    pickCategory = (cat) => {
        this.setState({ category: cat });
        //this.category = cat;
    }

    pickPlace = (place) => {
        this.setState({ place: place });
        //this.place = place;
    }
    
    searchText = '';

    onSearchText = (text) => {
        this.searchText = text
    }
        
    from_year = "1970";
    from_month = "01";
    from_day = "02";
    from_hour = "00";
    from_minute = "00";

    onChangeFromYear = (text) => {
        this.from_year = text;
    }
    onChangeFromMonth = (text) => {
        this.from_month = text;
    }
    onChangeFromDay = (text) => {
        this.from_day = text;
    }
    onChangeFromHour = (text) => {
        this.from_hour = text;
    }
    onChangeFromMinute = (text) => {
        this.from_minute = text;
    }
        
    to_year = "2037";
    to_month = "01";
    to_day = "01";
    to_hour = "00";
    to_minute = "00";

    onChangeToYear = (text) => {
        this.to_year = text;
    }
    onChangeToMonth = (text) => {
        this.to_month = text;
    }
    onChangeToDay = (text) => {
        this.to_day = text;
    }
    onChangeToHour = (text) => {
        this.to_hour = text;
    }
    onChangeToMinute = (text) => {
        this.to_minute = text;
    }

    onSubmit = () => {
        if (this.from_year.length == 2) {
            this.from_year = '20' + this.from_year;
        } else if (this.from_year.length != 4) {
            this.from_year = '1970';
        }

        if (this.from_month.length == 1) {
            this.from_month = '0' + this.from_month;
        } else if (this.from_month.length != 2) {
            this.from_month = '00'
        }
        if (this.from_day.length == 1) {
            this.from_day = '0' + this.from_day;
        } else if (this.from_day.length != 2) {
            this.from_day = '00'
        }
        if (this.from_hour.length == 1) {
            this.from_hour = '0' + this.from_hour;
        } else if (this.from_hour.length != 2) {
            this.from_hour = '99'
        }
        if (this.from_minute.length == 1) {
            this.from_minute = '0' + this.from_minute;
        } else if (this.from_minute.length != 2) {
            this.from_minute = '99'
        }

        var m = '';
        switch (this.from_month) {
            case '01':
                m = 'Jan';
                break;
            case '02':
                m = 'Feb';
                break;
            case '03':
                m = 'Mar';
                break;
            case '04':
                m = 'Apr';
                break;
            case '05':
                m = 'May';
                break;
            case '06':
                m = 'Jun';
                break;
            case '07':
                m = 'Jul';
                break;
            case '08':
                m = 'Aug';
                break;
            case '09':
                m = 'Sep';
                break;
            case '10':
                m = 'Oct';
                break;
            case '11':
                m = 'Nov';
                break;
            case '12':
                m = 'Dec';
                break;
            default:
                m = 'Non';
                break;
        }
        this.from_time = KorTimeToGMT(Date.parse(`${this.from_day} ${m} ${this.from_year} ${this.from_hour}:${this.from_minute}:00 GMT`) / 1000);

        if (this.to_year.length == 2) {
            this.to_year = '20' + this.to_year;
        } else if (this.to_year.length != 4) {
            this.to_year = '1970';
        }

        if (this.to_month.length == 1) {
            this.to_month = '0' + this.to_month;
        } else if (this.to_month.length != 2) {
            this.to_month = '00'
        }
        if (this.to_day.length == 1) {
            this.to_day = '0' + this.to_day;
        } else if (this.to_day.length != 2) {
            this.to_day = '00'
        }
        if (this.to_hour.length == 1) {
            this.to_hour = '0' + this.to_hour;
        } else if (this.to_hour.length != 2) {
            this.to_hour = '99'
        }
        if (this.to_minute.length == 1) {
            this.to_minute = '0' + this.to_minute;
        } else if (this.to_minute.length != 2) {
            this.to_minute = '99'
        }

        var m = '';
        switch (this.to_month) {
            case '01':
                m = 'Jan';
                break;
            case '02':
                m = 'Feb';
                break;
            case '03':
                m = 'Mar';
                break;
            case '04':
                m = 'Apr';
                break;
            case '05':
                m = 'May';
                break;
            case '06':
                m = 'Jun';
                break;
            case '07':
                m = 'Jul';
                break;
            case '08':
                m = 'Aug';
                break;
            case '09':
                m = 'Sep';
                break;
            case '10':
                m = 'Oct';
                break;
            case '11':
                m = 'Nov';
                break;
            case '12':
                m = 'Dec';
                break;
            default:
                m = 'Non';
                break;
        }
        this.to_time = KorTimeToGMT(Date.parse(`${this.to_day} ${m} ${this.to_year} ${this.to_hour}:${this.to_minute}:00 GMT`) / 1000);
        this._SearchEventXHR(this.state.category, this.searchText, this.state.place, this.from_time, this.to_time);
    }
    
    toSearchResult = (data) => {
        this.setState({itemTable: data, page: 'afterSearch'});
    }
    
    onBack = () => { //to get out of the event creation page 
        this.props.mainPageFunc()
    }
    toSearch = (data) => {
        this.searchText = '';
        this.from_year = "1970";
        this.from_month = "01";
        this.from_day = "02";
        this.from_hour = "00";
        this.from_minute = "00";
        this.to_year = "2037";
        this.to_month = "01";
        this.to_day = "01";
        this.to_hour = "00";
        this.to_minute = "00";
        this.setState({itemTable: data, page: 'beforeSearch', category: "##ALL##", place: "##ALL##",});
    }

    _SearchEventXHR = (category, searchText, place, from_time, to_time) => {
        let request = new XMLHttpRequest();
        request.onload = () => {
            let responseObj = request.response;
            let parsed_response = JSON.parse(responseObj);
            if (parsed_response.exit_code == 1) {
                this.toSearchResult(parsed_response.data);
            }
        };

        request.open('POST', 'http://13.115.154.88:5000/resource');
        request.setRequestHeader("content-type", "application/json");
        request.setRequestHeader("data-type", "json");
        request.setRequestHeader("data", "my_test_data_section");
        request.setRequestHeader("output", "json");
        request.send(JSON.stringify({
            'function-name': 'GetBoardList',
            'argument': {
                'search-word': searchText,
                'category': category,
                'place': place,
                'period-start': from_time,
                'period-end': to_time,
                'event-start': 0,
                'num-event': 20
            },
            'user-info': {
                'email': this.props.email,
                'password': this.props.password
            }
        }));
    }

    render() {
        if (this.props.page == "search-page") {
            if (this.state.page == 'beforeSearch') {
                return (
                    <View style={pageStyles.container}>
                        <View style={{ justifyContent: 'flex-start', marginLeft: 60, marginBottom: 20 }}>
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
                                style={pageStyles.image2}
                                source={{
                                    uri: 'https://cdn-icons-png.flaticon.com/512/61/61088.png'
                                }}
                            />
                            <TextInput
                                editable={true}
                                maxLength={30}
                                style={pageStyles.input}
                                onChangeText={(newText) => this.onSearchText(newText)}
                                placeholder="Search..."
                                keyboardType="default"
                            />
                        </View>
                        <View style={pageStyles.rowst}>
                            <Text style={pageStyles.title}>
                                {'DATE & TIME(From):  '}
                            </Text>
                            <TextInput
                                editable={true}
                                maxLength={4}
                                style={pageStyles.dt}
                                onChangeText={newText => this.onChangeFromYear(newText)}
                                placeholder={'2022'}
                                keyboardType="numeric"
                                textAlign='left'
                                multiline={true}
                            />
                            <Text style={pageStyles.dt}>
                                /
                            </Text>
                            <TextInput
                                editable={true}
                                maxLength={2}
                                style={pageStyles.dt}
                                onChangeText={newText => this.onChangeFromMonth(newText)}
                                placeholder={'11'}
                                keyboardType="numeric"
                                textAlign='left'
                                multiline={true}
                            />
                            <Text style={pageStyles.dt}>
                                /
                            </Text>
                            <TextInput
                                editable={true}
                                maxLength={2}
                                style={pageStyles.dt}
                                onChangeText={newText => this.onChangeFromDay(newText)}
                                placeholder={'23'}
                                keyboardType="numeric"
                                textAlign='left'
                                multiline={true}
                            />
                            <Text style={pageStyles.dt}>
                                {" "}
                            </Text>
                            <TextInput
                                editable={true}
                                maxLength={2}
                                style={pageStyles.dt}
                                onChangeText={newText => this.onChangeFromHour(newText)}
                                placeholder={'09'}
                                keyboardType="numeric"
                                textAlign='left'
                                multiline={true}
                            />
                            <Text style={pageStyles.dt}>
                                :
                            </Text>
                            <TextInput
                                editable={true}
                                maxLength={2}
                                style={pageStyles.dt_right}
                                onChangeText={newText => this.onChangeFromMinute(newText)}
                                placeholder={'30'}
                                keyboardType="numeric"
                                textAlign='left'
                                multiline={true}
                            />
                        </View>
                        <View style={pageStyles.rowst}>
                            <Text style={pageStyles.title}>
                                {'DATE & TIME(To):  '}
                            </Text>
                            <TextInput
                                editable={true}
                                maxLength={4}
                                style={pageStyles.dt}
                                onChangeText={newText => this.onChangeToYear(newText)}
                                placeholder={'2022'}
                                keyboardType="numeric"
                                textAlign='left'
                                multiline={true}
                            />
                            <Text style={pageStyles.dt}>
                                /
                            </Text>
                            <TextInput
                                editable={true}
                                maxLength={2}
                                style={pageStyles.dt}
                                onChangeText={newText => this.onChangeToMonth(newText)}
                                placeholder={'11'}
                                keyboardType="numeric"
                                textAlign='left'
                                multiline={true}
                            />
                            <Text style={pageStyles.dt}>
                                /
                            </Text>
                            <TextInput
                                editable={true}
                                maxLength={2}
                                style={pageStyles.dt}
                                onChangeText={newText => this.onChangeToDay(newText)}
                                placeholder={'23'}
                                keyboardType="numeric"
                                textAlign='left'
                                multiline={true}
                            />
                            <Text style={pageStyles.dt}>
                                {" "}
                            </Text>
                            <TextInput
                                editable={true}
                                maxLength={2}
                                style={pageStyles.dt}
                                onChangeText={newText => this.onChangeToHour(newText)}
                                placeholder={'09'}
                                keyboardType="numeric"
                                textAlign='left'
                                multiline={true}
                            />
                            <Text style={pageStyles.dt}>
                                :
                            </Text>
                            <TextInput
                                editable={true}
                                maxLength={2}
                                style={pageStyles.dt_right}
                                onChangeText={newText => this.onChangeToMinute(newText)}
                                placeholder={'30'}
                                keyboardType="numeric"
                                textAlign='left'
                                multiline={true}
                            />
                        </View>
                        <View style={pageStyles.common}>
                            <Text style={pageStyles.title}>
                                CATEGORY: {this.state.category}
                            </Text>
                            <View style={pageStyles.cat_button_list}>
                                <TouchableOpacity onPress={() => { this.pickCategory("##ALL##") }}>
                                    <Text style={pageStyles.cat_button}>
                                        ALL
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => { this.pickCategory("taxi")}}>
                                    <Text style={pageStyles.cat_button}>
                                        Taxi
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => { this.pickCategory("food")}}>
                                    <Text style={pageStyles.cat_button}>
                                        Food
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => { this.pickCategory("purchase") }}>
                                    <Text style={pageStyles.cat_button}>
                                        Group purchase
                                    </Text>
                                </TouchableOpacity>
                            </View>
                            <Text style={pageStyles.title}>
                                PLACE: {this.state.place}
                            </Text>
                            <View style={pageStyles.cat_button_list}>
                                <TouchableOpacity onPress={() => { this.pickPlace("##ALL##") }}>
                                    <Text style={pageStyles.cat_button}>
                                        ALL
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => { this.pickPlace("E1") }}>
                                    <Text style={pageStyles.cat_button}>
                                        E1
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => { this.pickPlace("E2") }}>
                                    <Text style={pageStyles.cat_button}>
                                        E2
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => { this.pickPlace("E3") }}>
                                    <Text style={pageStyles.cat_button}>
                                        E3
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => { this.pickPlace("E4") }}>
                                    <Text style={pageStyles.cat_button}>
                                        E4
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => { this.pickPlace("E5") }}>
                                    <Text style={pageStyles.cat_button}>
                                        E5
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => { this.pickPlace("E6") }}>
                                    <Text style={pageStyles.cat_button}>
                                        E6
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => { this.pickPlace("E7") }}>
                                    <Text style={pageStyles.cat_button}>
                                        E7
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => { this.pickPlace("E8") }}>
                                    <Text style={pageStyles.cat_button}>
                                        E8
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => { this.pickPlace("E9") }}>
                                    <Text style={pageStyles.cat_button}>
                                        E9
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => { this.pickPlace("E9-1") }}>
                                    <Text style={pageStyles.cat_button}>
                                        E9-1
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => { this.pickPlace("E10") }}>
                                    <Text style={pageStyles.cat_button}>
                                        E10
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => { this.pickPlace("E11") }}>
                                    <Text style={pageStyles.cat_button}>
                                        E11
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => { this.pickPlace("E12") }}>
                                    <Text style={pageStyles.cat_button}>
                                        E12
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => { this.pickPlace("E13") }}>
                                    <Text style={pageStyles.cat_button}>
                                        E13
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => { this.pickPlace("E14") }}>
                                    <Text style={pageStyles.cat_button}>
                                        E14
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => { this.pickPlace("E15") }}>
                                    <Text style={pageStyles.cat_button}>
                                        E15
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => { this.pickPlace("E16") }}>
                                    <Text style={pageStyles.cat_button}>
                                        E16
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => { this.pickPlace("E17") }}>
                                    <Text style={pageStyles.cat_button}>
                                        E17
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => { this.pickPlace("E18-1") }}>
                                    <Text style={pageStyles.cat_button}>
                                        E18-1
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => { this.pickPlace("E18-2") }}>
                                    <Text style={pageStyles.cat_button}>
                                        E18-2
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => { this.pickPlace("E19") }}>
                                    <Text style={pageStyles.cat_button}>
                                        E19
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => { this.pickPlace("E20") }}>
                                    <Text style={pageStyles.cat_button}>
                                        E20
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => { this.pickPlace("E21") }}>
                                    <Text style={pageStyles.cat_button}>
                                        E21
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => { this.pickPlace("N0") }}>
                                    <Text style={pageStyles.cat_button}>
                                        N0
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => { this.pickPlace("N1") }}>
                                    <Text style={pageStyles.cat_button}>
                                        N1
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => { this.pickPlace("N2") }}>
                                    <Text style={pageStyles.cat_button}>
                                        N2
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => { this.pickPlace("N3") }}>
                                    <Text style={pageStyles.cat_button}>
                                        N3
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => { this.pickPlace("N4") }}>
                                    <Text style={pageStyles.cat_button}>
                                        N4
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => { this.pickPlace("N5") }}>
                                    <Text style={pageStyles.cat_button}>
                                        N5
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => { this.pickPlace("N6") }}>
                                    <Text style={pageStyles.cat_button}>
                                        N6
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => { this.pickPlace("N7") }}>
                                    <Text style={pageStyles.cat_button}>
                                        N7
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => { this.pickPlace("N9") }}>
                                    <Text style={pageStyles.cat_button}>
                                        N9
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => { this.pickPlace("N10") }}>
                                    <Text style={pageStyles.cat_button}>
                                        N10
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => { this.pickPlace("N11") }}>
                                    <Text style={pageStyles.cat_button}>
                                        N11
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => { this.pickPlace("N12") }}>
                                    <Text style={pageStyles.cat_button}>
                                        N12
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => { this.pickPlace("N13") }}>
                                    <Text style={pageStyles.cat_button}>
                                        N13
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => { this.pickPlace("N14") }}>
                                    <Text style={pageStyles.cat_button}>
                                        N14
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => { this.pickPlace("N15") }}>
                                    <Text style={pageStyles.cat_button}>
                                        N15
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => { this.pickPlace("N16") }}>
                                    <Text style={pageStyles.cat_button}>
                                        N16
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => { this.pickPlace("N17") }}>
                                    <Text style={pageStyles.cat_button}>
                                        N17
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => { this.pickPlace("N18") }}>
                                    <Text style={pageStyles.cat_button}>
                                        N18
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => { this.pickPlace("N19") }}>
                                    <Text style={pageStyles.cat_button}>
                                        N19
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => { this.pickPlace("N20") }}>
                                    <Text style={pageStyles.cat_button}>
                                        N20
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => { this.pickPlace("N21") }}>
                                    <Text style={pageStyles.cat_button}>
                                        N21
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => { this.pickPlace("N22") }}>
                                    <Text style={pageStyles.cat_button}>
                                        N22
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => { this.pickPlace("N23") }}>
                                    <Text style={pageStyles.cat_button}>
                                        N23
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => { this.pickPlace("N24") }}>
                                    <Text style={pageStyles.cat_button}>
                                        N24
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => { this.pickPlace("N25") }}>
                                    <Text style={pageStyles.cat_button}>
                                        N25
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => { this.pickPlace("N26") }}>
                                    <Text style={pageStyles.cat_button}>
                                        N26
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => { this.pickPlace("N27") }}>
                                    <Text style={pageStyles.cat_button}>
                                        N27
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => { this.pickPlace("N28") }}>
                                    <Text style={pageStyles.cat_button}>
                                        N28
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => { this.pickPlace("W1") }}>
                                    <Text style={pageStyles.cat_button}>
                                        W1
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => { this.pickPlace("W2") }}>
                                    <Text style={pageStyles.cat_button}>
                                        W2
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => { this.pickPlace("W3") }}>
                                    <Text style={pageStyles.cat_button}>
                                        W3
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => { this.pickPlace("W4-1") }}>
                                    <Text style={pageStyles.cat_button}>
                                        W4-1
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => { this.pickPlace("W4-2") }}>
                                    <Text style={pageStyles.cat_button}>
                                        W4-2
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => { this.pickPlace("W4-3") }}>
                                    <Text style={pageStyles.cat_button}>
                                        W4-3
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => { this.pickPlace("W4-4") }}>
                                    <Text style={pageStyles.cat_button}>
                                        W4-4
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => { this.pickPlace("W5-1") }}>
                                    <Text style={pageStyles.cat_button}>
                                        W5-1
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => { this.pickPlace("W5-2") }}>
                                    <Text style={pageStyles.cat_button}>
                                        W5-2
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => { this.pickPlace("W6") }}>
                                    <Text style={pageStyles.cat_button}>
                                        W6
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => { this.pickPlace("W7") }}>
                                    <Text style={pageStyles.cat_button}>
                                        W7
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => { this.pickPlace("W8") }}>
                                    <Text style={pageStyles.cat_button}>
                                        W8
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => { this.pickPlace("W9") }}>
                                    <Text style={pageStyles.cat_button}>
                                        W9
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => { this.pickPlace("W10") }}>
                                    <Text style={pageStyles.cat_button}>
                                        W10
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => { this.pickPlace("W11") }}>
                                    <Text style={pageStyles.cat_button}>
                                        W11
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => { this.pickPlace("W16") }}>
                                    <Text style={pageStyles.cat_button}>
                                        W16
                                    </Text>
                                </TouchableOpacity>
                                {/* W1 ~ 11, 2-1, x4 4-1, 4-2, 4-3, 4-4, x5 5-1, 5-2, 16 */}
                            </View>
                        </View>
                        <View style={pageStyles.submitDiv}>
                            <TouchableOpacity onPress={this.onSubmit}>
                                <Text style={pageStyles.button}>
                                    SEARCH
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                )
            } else {
                return (
                    <View style={pageStyles.container}>
                        <View style={{ justifyContent: 'flex-start', marginLeft: 60, marginBottom: 20 }}>
                            <TouchableOpacity onPress={this.toSearch}>
                                <Image
                                    style={{ width: 40, height: 40 }}
                                    source={{
                                        uri: 'https://img.icons8.com/ios-filled/512/circled-left-2.png'
                                    }}
                                />
                            </TouchableOpacity>
                        </View>
                        <BoardItems itemTable={this.state.itemTable} eventPageFunc = {this.props.eventPageFunc}/>
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
    common: {
        width: '100%',
    },
    rowst: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
    },
    title: {
        paddingLeft: 20,
        color: 'black',
        fontSize: 16,
        textAlign: 'left',
        fontWeight: '500',

    },
    cat_button_list: {
        paddingHorizontal: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        flexWrap: 'wrap',
    },
    cat_button: {
        borderWidth: 2,
        borderRadius: 10,
        borderColor: 'white',
        color: 'black',
        fontSize: 14,
        textAlign: 'center',
        marginHorizontal: '0%',
        padding: 5,
        backgroundColor: '#CBC3E3',
        overflow: 'hidden'
    },
    dt: {
        textAlignVertical: 'top',
        height: '100%',
        color: 'black',
        fontSize: 16,
        textAlign: 'right',
        fontWeight: '500',
    },
    dt_right: {
        textAlignVertical: 'top',
        height: '100%',
        color: 'black',
        fontSize: 16,
        textAlign: 'left',
        fontWeight: '500',
    },
    submitDiv: {
        paddingTop: 15,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        paddingHorizontal: 60,
    },
    button: {
        borderWidth: 2,
        width: 100,
        borderRadius: 15,
        color: "white",
        fontSize: 18,
        fontWeight: '700',
        textAlign: 'center',
        borderColor: '#6495ED',
        backgroundColor:'#6495ED',
        overflow: 'hidden',
        padding: 5,
    },
    input: {
        //width: '100%',
        width: '100%',
        flexDirection: 'column',
        flexWrap: 'wrap',
        flexShrink: 1,
        fontSize: 20,
        textAlign: 'center',
        marginBottom: 8,
    },
});

export default SearchPage;