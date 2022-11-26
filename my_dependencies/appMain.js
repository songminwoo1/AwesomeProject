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
            page: "event-page",
            title_text: "",
            body_text: "",
            posttime: "",
            event_id: 0,

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
    MoveToEventPage = (props) => {
        this.setState({page: "event-page", title_text: props.title_text, body_text: props.body_text, eventtime: props.eventtime, event_id: props.event_id});
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
                <EventPage page = {this.state.page} ev_title={this.state.title_text} ev_body={this.state.body_text} ev_time={this.state.posttime} email = {this.state.email} password = {this.state.password} ev_id={this.state.event_id} mainPageFunc = {this.MoveToMainPage}/>
                <SearchPage page = {this.state.page}/>
                <EventCreation page = {this.state.page} mainPageFunc = {this.MoveToMainPage} email = {this.state.email} password = {this.state.password}/>
            </View>
        );
    }
}

export default AppMain;