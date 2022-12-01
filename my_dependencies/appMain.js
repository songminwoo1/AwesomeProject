import React from 'react';
import { StyleSheet, View, BackHandler, Alert} from 'react-native';
import EventBoard from './eventBoard';
import UserPage from './loginPage';
import EventPage from './EventPage';
import SearchPage from './searchPage';
import EventCreation from './eventCreation';
import CommentPage from './commentPage';

class AppMain extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            page: "user-page",
            
            event_data: {},

            comment_data: {},

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
            let parsed_response = JSON.parse(responseObj);

            if (parsed_response.exit_code == 1) {
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
    _GetCommentsXHR = (event_id) => {
        let request = new XMLHttpRequest();
        request.onload = () => {
            let responseObj = request.response;
            let parsed_response = JSON.parse(responseObj);

            //console.log(responseObj);
            //for temporary test
            // parsed_response = {
            //     'exit_code': 1,
            //     'data': [[1, 'commentmailA@kaist.ac.kr', 'commenterA', 'this is A comment.', 42], [1, 'commentmailB@kaist.ac.kr', 'commenterB', 'this is B comment.', 92]]
            // }
            //
            if (parsed_response.exit_code == 1) {
                parsed_response.data.event_id = event_id;
                this.setState({page: "comment-page", comment_data: parsed_response.data});
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
            'function-name': 'GetComments',
            'argument': {
                'event-id': event_id,
                'comment-start': 0,
                'num-comment': 10,
        },
            'user-info': {
                'email': this.state.email,
                'password': this.state.password
            }
        }
        ));
    }
    MoveToCommentPage = (props) => {
        this._GetCommentsXHR(props.event_id);
    }
    _AddCommentsXHR = (props) => { //props need email, password, event_id, text, text will be added later.
        let request = new XMLHttpRequest();
        request.onload = () => {
            let responseObj = request.response;
            let parsed_response = JSON.parse(responseObj);

            if (parsed_response.exit_code == 1) {
                this.MoveToCommentPage({event_id: this.state.event_data.event_id});
            } else {
                console.log(responseObj); //print out response.
                this.MoveToCommentPage({event_id: this.state.event_data.event_id});
            }
        };
        request.open('POST', 'http://13.115.154.88:5000/resource');
        request.setRequestHeader("content-type", "application/json");
        request.setRequestHeader("data-type", "json");
        request.setRequestHeader("data", "my_test_data_section");
        request.setRequestHeader("output", "json");
        request.send(JSON.stringify({
            'function-name': 'AddComment',
            'argument': {
                'email': props.email,
                'event-id': props.event_id,
                'comment': props.text
        },
            'user-info': {
                'email': props.email,
                'password': props.password
            }
        }));
    }
    _RemoveCommentsXHR = (props) => { //props need email, password, event_id, text, text will be added later.
        let request = new XMLHttpRequest();
        request.onload = () => {
            let responseObj = request.response;
            let parsed_response = JSON.parse(responseObj);

            if (parsed_response.exit_code == 1) {
                this.MoveToCommentPage({event_id: this.state.event_data.event_id});
            } else {
                console.log(responseObj); //print out response.
                this.MoveToCommentPage({event_id: this.state.event_data.event_id});
            }
        };
        request.open('POST', 'http://13.115.154.88:5000/resource');
        request.setRequestHeader("content-type", "application/json");
        request.setRequestHeader("data-type", "json");
        request.setRequestHeader("data", "my_test_data_section");
        request.setRequestHeader("output", "json");
        request.send(JSON.stringify({
            'function-name': 'AddComment',
            'argument': {
                'email': props.email,
                'event-id': props.event_id,
                'comment-id': props.comment_id,
        },
            'user-info': {
                'email': props.email,
                'password': props.password
            }
        }));
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
                <EventPage page = {this.state.page} email = {this.state.email} password = {this.state.password} mainPageFunc = {this.MoveToMainPage} event_data = {this.state.event_data} refreshFunc = {this.MoveToEventPage} commentFunc = {this.MoveToCommentPage}/>
                <CommentPage page = {this.state.page} email = {this.state.email} password = {this.state.password} mainPageFunc = {this.MoveToMainPage} comment_data = {this.state.comment_data} 
                    eventPageFunc = { () => {this.MoveToEventPage({event_id: this.state.event_data.event_id})} } 
                    commentFunc={(text) => {
                        var arg = {email: this.state.email, password: this.state.password, event_id: this.state.event_data.event_id, text: text}; 
                        this._AddCommentsXHR(arg)}
                    } 
                    commentDeleteFunc={(comment_id) => {
                        var arg = {email: this.state.email, password: this.state.password, event_id: this.state.event_data.event_id, comment_id: comment_id}; 
                        this._RemoveCommentsXHR(arg)}
                    }/>
                <SearchPage page = {this.state.page} mainPageFunc = {this.MoveToMainPage}/>
                <EventCreation page = {this.state.page} mainPageFunc = {this.MoveToMainPage} email = {this.state.email} password = {this.state.password}/>
            </View>
        );
    }
}

export default AppMain;