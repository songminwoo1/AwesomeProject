import React from 'react';
import { StyleSheet, View, BackHandler} from 'react-native';
import EventBoard from './eventBoard';
import UserPage from './loginPage';
import EventPage from './EventPage';
import SearchPage from './searchPage';
import EventCreation from './eventCreation';

class AppMain extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            page: "search-page",
            
            event_id: 0,
            event_data: {},

            email: "",
            password: "",
        }
    }
    MoveToUserPage = () => {
        this.setState({page: "user-page"});
    }
    MoveToMainPage = () => {
        this.setState({page: "event-board"});
    }
    _GetEventInfoXHR = (event_id) => {
        let request = new XMLHttpRequest();
        request.onload = () => {
            let responseObj = request.response;
            //alert(responseObj); //print out response.
            let parsed_response = JSON.parse(responseObj);

            //for temporary test
            parsed_response = {
                exit_code: 0,
                data: {
                    'email': 'testemail@kaist.ac.kr',
                    'username': 'thatUser',
                    'category': 'taxi',
                    'title': 'wanna taxi ride',
                    'content': 'from kaist to dajeon stn. ONE OF US from kaist to dajeon stn. ONE OF US from kaist to dajeon stn. ONE OF US from kaist to dajeon stn. ONE OF US from kaist to dajeon stn. ONE OF US from kaist to dajeon stn. ONE OF US from kaist to dajeon stn. ONE OF US from kaist to dajeon stn. ONE OF US from kaist to dajeon stn. ONE OF US from kaist to dajeon stn. ONE OF US from kaist to dajeon stn. ONE OF US from kaist to dajeon stn. ONE OF US from kaist to dajeon stn. ONE OF US from kaist to dajeon stn. ONE OF US from kaist to dajeon stn. ONE OF US ',
                    'place': 'N3',
                    'event_time': 1669599999,
                    'posting_time': 1669533927,
                    'status': 0,
                    'num_member': 4,
                    'cur_member': 2,
                    'members': [['alsdnthd1234@kaist.ac.kr', 'minwoo'], ['anotherppl@kaist.ac.kr', 'thatGuy']],
                }
            }
            //
            if (parsed_response.exit_code == 0) {
                parsed_response.data.event_id = event_id;
                this.setState({page: "event-page", event_data: parsed_response.data});
            } else {
                alert(responseObj); //print out response.
            }
        };
        request.open('POST', 'http://13.115.154.88:5000/resource');
        request.setRequestHeader("content-type", "application/json");
        request.setRequestHeader("data-type", "json");
        request.setRequestHeader("data", "my_test_data_section");
        request.setRequestHeader("output", "json");
        request.send(JSON.stringify({
            'function-name': 'GetEventInfo',
            'argument': {
                'event-id': event_id
            },
            'user-info': {
                'email': this.state.email,
                'password': this.state.password,
            }
        }
        ));
    }
    MoveToEventPage = (props) => {
        this._GetEventInfoXHR(props.event_id);
    }
    MoveToEventCreation = () => {
        this.setState({page: "event-creation"});
    }
    MoveToSearchPage = () => {
        this.setState({page: "search-page"});
    }

    //Back Handler
    backAction = () => {
        if(this.state.page == "event-board") {
            return false;
        }
        this.MoveToMainPage();
        return true;
    };

    componentDidMount() {
        this.backHandler = BackHandler.addEventListener(
            "hardwareBackPress",
            this.backAction
        );
    }

    componentWillUnmount() {
        this.backHandler.remove();
    }

    setEmailPassword = (email, password) => {
        this.setState({email: email, password: password});
    }

    render() {
        return (
            <View style={this.state.page}>
                <EventBoard page = {this.state.page} mainPageFunc = {this.MoveToMainPage} userPageFunc = {this.MoveToUserPage} eventPageFunc = {this.MoveToEventPage} toSearch = {this.MoveToSearchPage} toEventCreation = {this.MoveToEventCreation} email = {this.state.email} password = {this.state.password}/>
                <UserPage page = {this.state.page} mainPageFunc = {this.MoveToMainPage} set_email_pw = {this.setEmailPassword}/>
                <EventPage page = {this.state.page} email = {this.state.email} password = {this.state.password} mainPageFunc = {this.MoveToMainPage} event_data = {this.state.event_data}/>
                <SearchPage page = {this.state.page}/>
                <EventCreation page = {this.state.page} mainPageFunc = {this.MoveToMainPage} email = {this.state.email} password = {this.state.password}/>
            </View>
        );
    }
}

export default AppMain;